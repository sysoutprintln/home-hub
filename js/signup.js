const form = document.querySelector('form');
const registerButton = document.getElementById('register');

form.addEventListener('submit', (event) => {
  // Prevent default form submission
  event.preventDefault();

  const fullName = document.querySelector('input[placeholder="Nama Lengkap"]').value;
  const phoneNumber = document.querySelector('input[placeholder="Nomor Telepon"]').value;
  const hasSelectedGender = document.querySelector('input[name="gender"]:checked');
  const birthDate = document.querySelector('input[type="date"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;
  const password = document.querySelector('input[placeholder="Password"]').value;
  const rePassword = document.querySelector('input[placeholder="Re-password"]').value;

  let filledFields = []; // Array to store filled fields

  // Check if any fields are empty
  if (!fullName || !phoneNumber || !hasSelectedGender || !birthDate || !email || !password || !rePassword) {
    alert('Please fill the form!');
    return; // Exit function early if any field is empty
  }

  let isValid = true; // Flag to track if all validations pass

  // Nama Lengkap validation
  if (fullName.length < 6) {
    isValid = false;
    alert('Your name needs to be at least 6 characters!');
  } else {
    filledFields.push('Nama Lengkap: ' + fullName);
  }

  // Nomor Telepon validation
  if (!phoneNumber.match(/^\d{10,12}$/)) {
    isValid = false;
    alert('The phone number needs to be between 10-12!');
  } else {
    filledFields.push('Nomor Telepon: ' + phoneNumber);
  }

  // Gender validation
  if (!hasSelectedGender) {
    isValid = false;
    alert('Please choose your gender!');
  } else {
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;
    filledFields.push('Jenis Kelamin: ' + selectedGender);
  }

  // Date validation (calculate age based on birthdate)
  if (!birthDate) {
    isValid = false;
    alert('Please choose your date of birth!');
    return; // Exit function early if no birthdate provided
  }
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  const age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  if (age < 18) {
    isValid = false;
    alert('Your age must be 18 or above!');
  } else {
    filledFields.push('Tanggal Lahir: ' + birthDate);
  }

  // Email validation
  const emailRegex = /^[^@]+@[^@.]+\.(com|net|org|co.id|my|sg|th|ph|vn|jp|cn|hk|tw|au|in|us|uk|eu|io|info|biz|name)$/;
  if (!email.match(emailRegex)) {
    isValid = false;
    alert('Email must valid (example: nama@gmail.com)!');
  } else {
    filledFields.push('Email: ' + email);
  }

  // Password validation (don't include in filledFields)
  if (password.length < 7 || !password.match(/\d/)) {
    isValid = false;
    alert('Your password must include a number!');
  }

  // Re-password validation (don't include in filledFields)
  if (password !== rePassword) {
    isValid = false;
    alert('The password and re-password must same!');
  }

  // Submit form only if all validations pass and display filled fields summary (excluding passwords)
  if (isValid) {
    const filledInfo = `THANK YOU FOR YOUR REGISTRATION\n - ${filledFields.join('\n - ')}`;
    alert(filledInfo);
    form.submit();
  }
});