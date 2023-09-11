const form = document.getElementById('submitButton1');
    const submitButton = document.getElementById('submitButton');

    // Add a click event listener to the submit button
    submitButton.addEventListener('click', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Show an alert when the button is clicked
      alert('Booking Completed Successfully!');
    });

