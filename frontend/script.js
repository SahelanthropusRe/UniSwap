// Toggle between sell and rent fields and display relevant product type options
function toggleFields(option) {
    const sellFields = document.getElementById('sell-fields');
    const rentFields = document.getElementById('rent-fields');
    
    if (option === 'sell') {
        sellFields.style.display = 'block';
        rentFields.style.display = 'none';
    } else if (option === 'rent') {
        sellFields.style.display = 'none';
        rentFields.style.display = 'block';
    }
}

function showPreview(event) {
    const imagePreview = document.getElementById('image-preview');
    imagePreview.src = URL.createObjectURL(event.target.files[0]);
    imagePreview.onload = function() {
        URL.revokeObjectURL(imagePreview.src);
    }
}

function previewImage() {
    const fileInput = document.getElementById('product-image');
    if (fileInput.files.length === 0) {
        alert("Please upload an image first!");
    } else {
        document.getElementById('image-preview').style.display = 'block';
    }
}

// Handle form submission and show confirmation
document.getElementById('product-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('http://localhost:5000/submit', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (response.ok) {
            form.reset();  // Reset form fields
            document.getElementById('confirmation-message').style.display = 'block';
        } else {
            alert(result.message || "An error occurred");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form.");
    }
});
