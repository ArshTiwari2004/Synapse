import os
import requests
from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv

app = Flask(__name__)

# Load environment variables from .env
load_dotenv()

# Set API key and base URL for GroQ API
API_KEY = os.getenv('API_KEY', 'undefined')
GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

# Set your LocationIQ API key
LOCATIONIQ_API_KEY = os.getenv('LOCATIONIQ_API_KEY', 'undefined')  
LOCATIONIQ_API_URL = 'https://api.locationiq.com/v1/reverse'

# Set your OpenWeather API key
WEATHER_API_KEY = os.getenv('Weather_API', 'undefined')
BASE_URL = 'http://api.weatherapi.com/v1'


@app.route('/')
def home():
    return render_template('index.html')


# Helper function to get weather based on destination
def get_weather(location):
    # Use the location parameter directly here
    current_weather_url = f'{BASE_URL}/current.json?key={WEATHER_API_KEY}&q={location}&aqi=yes'
    forecast_url = f'{BASE_URL}/forecast.json?key={WEATHER_API_KEY}&q={location}&days=7&aqi=yes'

    try:
        # Fetch current weather
        current_response = requests.get(current_weather_url)
        current_data = current_response.json()

        # Fetch weather forecast
        forecast_response = requests.get(forecast_url)
        forecast_data = forecast_response.json()

        if 'error' not in current_data and 'error' not in forecast_data:
            # Format current weather
            current_weather = (f"Location: {current_data['location']['name']}\n"
                               f"Temperature: {current_data['current']['temp_c']}°C\n"
                               f"Condition: {current_data['current']['condition']['text']}\n"
                               f"Air Quality Index: {current_data['current']['air_quality']['pm2_5']}\n")

            # Format forecast details
            forecast_weather = "Weather Forecast:\n"
            for day in forecast_data['forecast']['forecastday']:
                forecast_weather += (f"Date: {day['date']}\n"
                                    f"Max Temp: {day['day']['maxtemp_c']}°C\n"
                                    f"Min Temp: {day['day']['mintemp_c']}°C\n"
                                    f"Condition: {day['day']['condition']['text']}\n\n")

            # Return formatted weather details as a dictionary
            return {
                'current': {
                    'location': current_data['location']['name'],
                    'temp_c': current_data['current']['temp_c'],
                    'condition': current_data['current']['condition']['text'],
                    'air_quality_index': current_data['current']['air_quality']['pm2_5'],
                },
                'forecast': [
                    {
                        'date': day['date'],
                        'max_temp_c': day['day']['maxtemp_c'],
                        'min_temp_c': day['day']['mintemp_c'],
                        'condition': day['day']['condition']['text'],
                    }
                    for day in forecast_data['forecast']['forecastday']
                ]
            }

        else:
            return {"error": "Weather data unavailable."}

    except requests.exceptions.RequestException as e:
        print(f"Error fetching weather data: {e}")
        return {"error": "Weather data unavailable."}

@app.route('/location', methods=['POST'])
def handle_location():
    data = request.get_json()
    destination = data.get('destination')
    # Process the destination as needed
    print(f'Received destination: {destination}')
    
    return jsonify({'message': 'Destination received successfully!'}), 200

@app.route('/generate_itinerary', methods=['POST'])
def generate_itinerary():
    user_data = request.get_json()
    destination = user_data.get('destinations', 'unknown destination')

    # Fetch weather data for the selected destination
    weather_data = get_weather(destination)

    # Initialize weather_details as an empty list
    weather_details = []

    # Check if weather data is valid
    if 'error' not in weather_data:
        # Get current weather
        current_temp = weather_data['current']['temp_c']
        current_condition = weather_data['current']['condition']
        current_date = "Today"

        # Append current weather to weather_details
        weather_details.append({
            'date': current_date,
            'temperature': f"{current_temp}°C",
            'description': current_condition
        })

        # Add forecast data
        for day in weather_data['forecast']:
            weather_details.append({
                'date': day['date'],
                'temperature': f"Max: {day['max_temp_c']}°C, Min: {day['min_temp_c']}°C",
                'description': day['condition'],
            })

        # Construct a detailed prompt with a dedicated weather block
        prompt = f"""
        Create a detailed {user_data.get('duration', 7)}-day travel itinerary for a trip to {destination}.
        
        Traveler Information:
        - Budget: {user_data.get('budget', 'standard')}
        - Interests: {user_data.get('interests', 'none')}
        - Travel style: {user_data.get('travel_style', 'explorer')}
        - Previous visits: {user_data.get('previous_visits', 'first time')}
        - Food preferences: {user_data.get('food_preferences', 'none')}
        - Traveling with: {user_data.get('traveling_with', 'solo')}
        - Explore hidden gems: {user_data.get('hidden_gems', 'yes')}
        - Cultural tips: {user_data.get('cultural_tips', 'none')}
        - Local events: {user_data.get('events', 'none')}
        
        Weather Information for {destination}:
        {weather_details}

        Please generate an itinerary that includes places to visit, recommended activities, and suggestions         Please generate an itinerary that includes places to visit, recommended activities, and suggestions for meals based on this information.
for meals based on this information.
        """

        try:
            # Fetch the itinerary from the GroQ API based on the prompt
            itinerary = get_groq_response(prompt)

            # Format the itinerary output
            formatted_itinerary = str(itinerary) if isinstance(itinerary, str) else 'No itinerary available'

            # Render the itinerary HTML page
            return render_template('itinerary.html', itinerary=formatted_itinerary, weather_data=weather_details, destination=destination)
        
        except requests.exceptions.RequestException as e:
            return jsonify({'error': f'Error: Could not connect to GroQ API. Exception: {e}'}), 500
        except Exception as e:
            return jsonify({'error': f'Error: Unexpected error occurred. Exception: {e}'}), 500

    else:
        # Handle case where weather data is unavailable
        return jsonify({'error': 'Weather data unavailable.'}), 400  # Ensure a response is returned here

def get_groq_response(prompt):
    headers = {'Authorization': f'Bearer {API_KEY}'}

    # Prepare data for the request
    data = {
        "model": "llama3-8b-8192",  # Specify your model here
        "messages": [
            {"role": "system", "content": "You are a helpful assistant who creates travel itineraries for the user"},
            {"role": "user", "content": prompt}
        ],
        "max_tokens": 5000,  # Adjust based on how detailed the itinerary needs to be
        "stop": [" End of itinerary."]
    }

    # Make the POST request to the GroQ API
    response = requests.post(GROQ_API_URL, headers=headers, json=data)

    # Parse the response from GroQ API
    if response.status_code == 200:
        response_json = response.json()
        print(response_json)  # Print full response for debugging
        # Extract the content from the response
        return response_json['choices'][0]['message']['content']
    else:
        raise Exception(f"Error: {response.status_code} - {response.text}")


if __name__ == '__main__':
    app.run(debug=True)
