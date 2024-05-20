const mongoose = require('mongoose');

// Define a schema for the Cars collection
const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number
});

// Define a Mongoose model for the Cars collection
const Car = mongoose.model('Car', carSchema);

// Function to get all cars


module.exports = Car; // Export the Car model


