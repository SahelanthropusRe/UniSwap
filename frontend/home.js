// Function to switch between tabs
function openTab(evt, tabName) {
    const tabContent = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab-link');
  
    // Hide all tab content
    tabContent.forEach(content => content.style.display = 'none');
  
    // Remove active class from all tab links
    tabLinks.forEach(link => link.classList.remove('active'));
  
    // Show the current tab and add active class to the clicked tab
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }
  
  // Simulate a click on the first tab to open it by default
  document.querySelector('.tab-link').click();
  
  // Function to handle card click and redirect to another page
  function redirectToProductPage() {
    window.location.href = "/product-page";  // Replace with the actual product page URL
  }
  