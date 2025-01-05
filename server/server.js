const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://personunknownn1:aksavari@cluster0.pyti6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bookingSchema = new mongoose.Schema({
  pickupCity: String,
  dropCity: String,
  pickupDate: String,
  pickupTime: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

app.post('/api/bookings', async (req, res) => {
  const { pickupCity, dropCity, pickupDate, pickupTime } = req.body;
  const newBooking = new Booking({ pickupCity, dropCity, pickupDate, pickupTime });
  await newBooking.save();
  res.status(201).send(newBooking);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
