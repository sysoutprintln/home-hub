const form = document.getElementById('form-signin');
const loginButton = document.getElementById('login');

form.addEventListener('submit', (event) => {
  // Prevent default form submission
  event.preventDefault();

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  let isValid = true; // Flag to track if all validations pass

  // Email validation (check for common email providers)
  const emailRegex = /^[^@]+@[^@.]+\.(com|net|org|co.id|my|sg|th|ph|vn|jp|cn|hk|tw|au|in|us|uk|eu|io|info|biz|name)$/;
  if (!email.match(emailRegex)) {
    isValid = false;
    alert('Email is invalid (example: username@gmail.com)!');
  }

  // Password validation (optional, depending on your security requirements)
  if (password.length < 7 || !password.match(/\d/)) {
    isValid = false;
    alert('Password should be at least 6 characters and contain a number!');
  }

  // Submit form only if all validations pass
  if (isValid) {
    alert('Sign in successful!');
    // form.submit();
    window.location.href = "./home.html";
  }
});
