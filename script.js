let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('contact-name').value;

    if (name.length == 0){
        nameError.textContent = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.textContent = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

function validatePhone() {
    let phoneNumber = document.getElementById('contact-phone').value;

    if (phoneNumber.trim() === '') {
        phoneError.textContent = 'Phone number is required';
        return false;
    }

    let cleanPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digits
    if (cleanPhoneNumber.length !== 10) {
        phoneError.textContent = 'Enter a 10-digit phone number';
        return false;
    }

    phoneError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;

    if (email.trim() === '') {
        emailError.textContent = 'Email is required';
        return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Enter a valid email address';
        return false;
    }

    emailError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

function validateMessage() {
    let message = document.getElementById('contact-meaage').value;
    let requiredLength = 20;
    let msgLengthLeft = requiredLength - message.length;
 
    if (message.trim() === '') {
        messageError.textContent = 'Message is required';
        return false;
    }

    if (msgLengthLeft > 0) {
        messageError.textContent = `${msgLengthLeft}  more characters required`
        return false;
    }

    messageError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() ||!validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill all the fields and submit';
        setTimeout(() => {submitError.style.display = 'none';}, 3000);
        return false;
    }
}


