function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab content and add active class
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  function redirectToProductPage() {
    // Redirect to the product page (update the URL as needed)
    window.location.href = "/product-page";
  }
  