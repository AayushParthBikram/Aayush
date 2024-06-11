document.getElementById('eventForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const totalParticipants = document.getElementById('totalParticipants').value.trim();
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // First clear all the errors 
    document.getElementById('titleError').textContent = '';
    document.getElementById('descriptionError').textContent = '';
    document.getElementById('participantsError').textContent = '';
    document.getElementById('startDateError').textContent = '';
    document.getElementById('endDateError').textContent = '';

    // Validate title 
    if (!title) {
        isValid = false;
        document.getElementById('titleError').textContent = 'Title required';
    }

    // Validate description
    if (!description) {
        isValid = false;
        document.getElementById('descriptionError').textContent = 'Description required';
    }

    // Validate total participants 
    if (!totalParticipants || isNaN(totalParticipants) || totalParticipants <= 0) {
        isValid = false;
        document.getElementById('participantsError').textContent = 'Total participants must be a positive number.';
    }

    // Validate start date 
    if (!startDate) {
        isValid = false;
        document.getElementById('startDateError').textContent = 'Start date for the event is required.';
    }

    // Validate end date
    if (!endDate) {
        isValid = false;
        document.getElementById('endDateError').textContent = 'End date for the event is required.';
    } else if (new Date(startDate) > new Date(endDate)) {
        isValid = false;
        document.getElementById('endDateError').textContent = 'End date must come after start date.';
    }

    if (isValid) {
        const eventData = {
            title,
            description,
            totalParticipants: parseInt(totalParticipants),
            startDate,
            endDate
        };

        fetch('/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') // include the token if using authentication
            },
            body: JSON.stringify(eventData)
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert('Event created successfully!');
                document.getElementById('eventForm').reset();
            } else {
                alert('Failed to create event.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to create event.');
        });
    }
});
