document.getElementById('itinerary-form').addEventListener('submit', function(event) {
    const form = event.target;
    let valid = true;

    form.querySelectorAll('input').forEach(input => {
        if (!input.value) {
            input.style.border = "2px solid red";
            valid = false;
        } else {
            input.style.border = "2px solid #007bff";
        }
    });

    if (!valid) {
        alert("Please fill out all required fields.");
        event.preventDefault();
    } else {
        alert("Your itinerary is being generated!");
    }
});
