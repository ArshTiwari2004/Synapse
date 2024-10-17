import requests

API_KEY = '5ecad1c989eb43338af42425241610'  # Replace with your valid WeatherAPI key
BASE_URL = 'http://api.weatherapi.com/v1'

def get_weather(location):
    current_weather_url = f'{BASE_URL}/current.json?key={API_KEY}&q={location}&aqi=yes'
    forecast_url = f'{BASE_URL}/forecast.json?key={API_KEY}&q={location}&days=3&aqi=yes'

    try:
        # Fetch current weather
        current_response = requests.get(current_weather_url)
        if current_response.status_code != 200:
            print(f"Error: Unable to fetch current weather. Status code: {current_response.status_code}")
            print(f"Response content: {current_response.text}")
            return
        current_data = current_response.json()

        # Fetch weather forecast
        forecast_response = requests.get(forecast_url)
        if forecast_response.status_code != 200:
            print(f"Error: Unable to fetch weather forecast. Status code: {forecast_response.status_code}")
            print(f"Response content: {forecast_response.text}")
            return
        forecast_data = forecast_response.json()

        # Display current weather
        if 'error' not in current_data:
            print("Current Weather:")
            print(f"Location: {current_data['location']['name']}")
            print(f"Temperature: {current_data['current']['temp_c']}°C")
            print(f"Condition: {current_data['current']['condition']['text']}")
            print(f"Air Quality Index: {current_data['current']['air_quality']['pm2_5']}")
            print()

        # Display weather forecast
        if 'error' not in forecast_data:
            print("Weather Forecast:")
            for day in forecast_data['forecast']['forecastday']:
                print(f"Date: {day['date']}")
                print(f"Max Temp: {day['day']['maxtemp_c']}°C")
                print(f"Min Temp: {day['day']['mintemp_c']}°C")
                print(f"Condition: {day['day']['condition']['text']}")
                print()

    except requests.exceptions.RequestException as e:
        print(f"Error occurred during API request: {e}")
    except requests.exceptions.JSONDecodeError as e:
        print(f"Error parsing JSON response: {e}")

if __name__ == '__main__':
    location = input("Enter location (e.g., city name): ")
    get_weather(location)
