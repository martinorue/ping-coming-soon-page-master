
// There are many ways to pick a DOM node; here we get the form itself and the email
    // input box, as well as the span element into which we will place the error message.
    const form  = document.getElementsByTagName('form')[0];

    const email = document.getElementById('email');
    const emailError = document.getElementById('email_error');

    email.addEventListener('input', function (event) {
      // Each time the user types something, we check if the
      // form fields are valid.

      if (email.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.innerHTML = ''; // Reset the content of the message
        emailError.className = 'error'; // Reset the visual state of the message
      } else {
        // If there is still an error, show the correct error
        showError();
      }
    });

    form.addEventListener('submit', function (event) {
      // if the form contains valid data, we let it submit

      if(!email.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
      }
    });

    function showError() {
      if(email.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        emailError.textContent = 'Whoops! It looks like you forgot to add your email';
        setTimeout(() => {
            emailError.textContent = ''
        }, 2000);
      } else if(email.validity.typeMismatch) {
        // If the field doesn't contain an email address
        // display the following error message.
        emailError.textContent = 'Please provide a valid email address';
      } 
      // Set the styling appropriately
      emailError.className = 'error active';
    }
