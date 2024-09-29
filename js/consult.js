function checkBuilding() {
  var building = document.getElementById('select-building').value;
  if (building === 'choose') {
    alert('Please select a building.');
    return false; // Prevent form submission if 'choose' is selected
  }
  return true; // Allow form submission if a building is selected
}

document.getElementById('consult-form').addEventListener('submit', function(event) {
  if (!checkBuilding()) {
    event.preventDefault(); // Prevent the default form submission
  } else {
    alert('Form submitted!');
    // You can add more code here to handle the form data
  }
});