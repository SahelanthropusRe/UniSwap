// app.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Product = require('./models/Product');

// Initialize express app
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('uploads'));  // Serve uploaded images statically

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Error connecting to MongoDB", err));

// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Save with timestamp to avoid conflicts
    }
});

const upload = multer({ storage });

// Endpoint to handle form submission
app.post('/submit', upload.single('product-image'), async (req, res) => {
    try {
        // Extract form data
        const { 'product-name': productName, 'sell-or-rent': sellOrRent, 'sell-price': sellPrice, 'daily-price': dailyPrice, 
                'rental-period': rentalPeriod, description, 'rental-description': rentalDescription, 
                'sell-product-type': sellProductType, 'rent-product-type': rentProductType } = req.body;

        // Determine the product type based on sell or rent option
        const productType = sellOrRent === 'sell' ? sellProductType : rentProductType;

        // Create a new product entry
        const product = new Product({
            name: productName,
            image: req.file ? `/uploads/${req.file.filename}` : null,  // Store the image path
            sellOrRent,
            productType,  // Add product type
            price: sellPrice || null,
            dailyPrice: dailyPrice || null,
            rentalPeriod: rentalPeriod || null,
            description: description || rentalDescription || '',
        });

        // Save product to database
        await product.save();

        // Send a success response
        res.json({ message: "Product successfully uploaded!" });
    } catch (error) {
        console.error("Error submitting product:", error);
        res.status(500).json({ message: "An error occurred" });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
