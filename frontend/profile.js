document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (!file) return; // If no file is selected, do nothing

    // Check if the selected file is an image
    if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        return;
    }

    // Check for file size limit (e.g., 2MB)
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
        alert('File size should be less than 2MB.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById('userImage');
        img.src = reader.result;

        // Hide the upload label after image is uploaded
        const uploadLabel = document.querySelector('.upload-label');
        uploadLabel.style.display = 'none'; // Hide the label
    }
    reader.readAsDataURL(file);
});
