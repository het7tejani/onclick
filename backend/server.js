require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
const dbURI = process.env.MONGODB_URI;
if (!dbURI || dbURI === 'YOUR_MONGODB_CONNECTION_STRING_HERE') {
  console.error('Error: MONGODB_URI is not defined. Please check your backend/.env file.');
  process.exit(1);
}
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));


// === API ROUTES ===
// @route   POST /api/contact
// @desc    Create a contact form submission
// @access  Public
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !service || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            service,
            message,
        });

        await newContact.save();

        res.status(201).json({ message: 'Your message has been received! We will get back to you shortly.' });
    } catch (error) {
        console.error('Error saving contact form data:', error);
        res.status(500).json({ error: 'An error occurred while submitting the form. Please try again.' });
    }
});


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder. The path is relative to the backend folder.
    app.use(express.static(path.join(__dirname, '../build')));

    // Serve the index.html file for all other routes
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});