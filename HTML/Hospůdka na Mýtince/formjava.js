function validateForm() {
    var name = document.getElementById('contact-name').value.trim();
    var phone = document.getElementById('contact-phone').value.trim();
    var email = document.getElementById('contact-email').value.trim();
    var birthnumber = document.getElementById('contact-birthnumber').value.trim();
    var message = document.getElementById('contact-message').value.trim();
    var isValid = true;
    
    if (name === '') {
      document.getElementById('name-error').textContent = 'Prosím vyplňte vaše jméno.';
      document.getElementById('name-error').style.color = 'red';
      isValid = false;
    } else {
      document.getElementById('name-error').textContent = '';
    }
    
    if (phone === '') {
      document.getElementById('phone-error').textContent = 'Prosím vyplńte vaše telefonní číslo.';
      document.getElementById('phone-error').style.color = 'red';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      document.getElementById('phone-error').textContent = 'Prosím vyplńte validní telefonní číslo.';
      document.getElementById('phone-error').style.color = 'red';
      isValid = false;
    } else {
      document.getElementById('phone-error').textContent = '';
    }
    
    if (email === '') {
      document.getElementById('email-error').textContent = 'Prosím vyplňte váš email.';
      document.getElementById('email-error').style.color = 'red';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('email-error').textContent = 'Prosím vyplňte VALIDNÍ email.';
      document.getElementById('email-error').style.color = 'red';
      isValid = false;
    } else {
      document.getElementById('email-error').textContent = '';
    }
    
    if (birthnumber === '') {
      document.getElementById('birthnumber-error').textContent = 'Prosím vyplńte rodné číslo.';
      document.getElementById('birthnumber-error').style.color = 'red';
      isValid = false;
    } else if (birthnumber.length === 6) {
      birthnumber = birthnumber + '/';
      document.getElementById('contact-birthnumber').value = birthnumber;
    } else if (!/^\d{6}\/\d{3,4}$/.test(birthnumber)) {
      document.getElementById('birthnumber-error').textContent = 'Prosím vyplňte VALIDNÍ rodné číslo. Lomítko je povinné.';
      document.getElementById('birthnumber-error').style.color = 'red';
      isValid = false;
    } else {
      document.getElementById('birthnumber-error').textContent = '';
    }
    
    if (message === '') {
      document.getElementById('message-error').textContent = 'Prosím vložte zprávu.';
      document.getElementById('message-error').style.color = 'red';
      isValid = false;
    } else {
      document.getElementById('message-error').textContent = '';
    }
    
    if (!isValid) {
      document.getElementById('submit-error').textContent = 'Prosím opravte chyby a zkuste to znovu.';
      document.getElementById('submit-error').style.color = 'red';
      return false;
    } else {
      alert('Formulář byl úspěšně odeslán!');
      return true;
    }
  }
  document.getElementById('submit-button').addEventListener('click', validateForm);
  