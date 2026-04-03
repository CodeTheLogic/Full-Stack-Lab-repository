const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/flightDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


const flightSchema = new mongoose.Schema({
  name: String,
  from: String,
  to: String,
  date: String,
  departure: String,
  arrival: String,
  phone: String,
  email: String
});

const Flight = mongoose.model("Flight", flightSchema);

app.post('/add', async (req, res) => {
  try {
    const data = new Flight(req.body);
    await data.save();
    res.send("Passenger Added");
  } catch (err) {
    res.send(err);
  }
});


app.get('/flights', async (req, res) => {
  const data = await Flight.find();
  res.json(data);
});


app.delete('/delete/:phone', async (req, res) => {
  await Flight.findOneAndDelete({ phone: req.params.phone });
  res.send("Deleted Successfully");
});


app.put('/update/:phone', async (req, res) => {
  await Flight.findOneAndUpdate(
    { phone: req.params.phone },
    { email: req.body.email }
  );
  res.send("Updated Successfully");
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});