fetch('/api/product/123')  // Replace with actual API endpoint
    .then(response => response.json())
    .then(product => {
        document.querySelector('.product-image img').src = product.image;
        document.querySelector('.product-name').textContent = product.name;
        document.querySelector('.product-description').textContent = product.description;
        document.querySelector('.product-price').textContent = `$${product.price}`;
    })
    .catch(error => console.error('Error fetching product data:', error));
