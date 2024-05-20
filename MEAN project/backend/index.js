const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const client = new MongoClient('mongodb+srv://ajekfdjdidkthg:3DmBCkZLvSMJWMFs@cluster0.5pjhgvc.mongodb.net/Cars?retryWrites=true&w=majority&appName=Cluster0');
const Car = require('./models/cars.model');
const start = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit the process on connection error
  }
};

start();

let express = require('express');
let app = express();

app.use(express.json()); // Parse incoming JSON data
app.get('/api/cars', async function (req, res){
    Console.log(res.body);
})
app.get('/api/cars', async function (req, res) {
 try {
    // Use Mongoose to retrieve cars
    const cars = await Car.find({}); // Use the Car model from models.cars.js
    res.json(cars);
  } catch (err) {
    console.error('Error fetching cars:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/api/cars/:id', async function (req, res) {
  try {
    const Car = require('./models/cars.model');
    const carId = req.params.id; // Get the car ID from the request parameter

    // Validate car ID (optional)
    if (!mongoose.Types.ObjectId.isValid(carId)) {
      return res.status(400).send('Invalid car ID');
    }

    const car = await Car.findById(carId); // Find car by ID

    if (!car) {
      return res.status(404).send('Car not found');
    }

    res.json(car);
  } catch (err) {
    console.error('Error fetching car:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000);
console.log("Welcome and Hello World running on port 3000");

