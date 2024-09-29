// Get the select element
const select = document.getElementById('select-building');
          
// Function to show/hide content based on selection
function showContent(id) {
  const contentContainers = document.querySelectorAll('.content-container');
  contentContainers.forEach(container => container.style.display = 'none');
            
  // Show the selected content container
    const selectedContent = document.getElementById(id);
    if (selectedContent) {
      selectedContent.style.display = 'flex';
    }
}
          
// Attach event listener to the select element
select.addEventListener('change', () => {
  const selectedValue = select.value;
    showContent(selectedValue);
});

// Get the container elements with class "buttons"
const buttonContainers = document.querySelectorAll('.buttons');
          
// Function to display alert message on click (using event delegation)
function handleBuyClick(event) {
  // Check if the clicked element has the class "buy-button"
  if (event.target.classList.contains('rent-button')) {
    const clickedButton = event.target;
    alert("Thank You for Renting Our Building!");
  }
}
          
// Attach event listener to each container element
buttonContainers.forEach(container => container.addEventListener('click', handleBuyClick));