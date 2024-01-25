function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password length
    if (password.length < 8) {
        showError('Password should be at least 8 characters long');
        return;
    }
    

    // Validate username (no numbers or special characters)
    if (!/^[a-zA-Z]+$/.test(username)) {
        showError('Username should not contain numbers or special characters');
        return;
    }

    // Validate password match
    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return;
    }

    // If all validations pass, show success message
    showSuccess('Registration successful!');
}

function showError(message) {
    const errorPopup = document.getElementById('errorPopup');
    errorPopup.textContent = message;
    errorPopup.style.backgroundColor = '#ff9999';
    errorPopup.style.display = 'block';

    setTimeout(() => {
        errorPopup.style.display = 'none';
    }, 2000);
}

function showSuccess(message) {
    const errorPopup = document.getElementById('errorPopup');
    errorPopup.textContent = message;
    errorPopup.style.backgroundColor = '#99ff99';
    errorPopup.style.display = 'block';

    setTimeout(() => {
        errorPopup.style.display = 'none';
    }, 3000);
}
