import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    name: "",
    from: "",
    to: "",
    date: "",
    departure: "",
    arrival: "",
    phone: "",
    email: ""
  });

  const [flights, setFlights] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addFlight = async () => {
    await axios.post("http://localhost:5000/add", form);
    fetchFlights();
  };

  const fetchFlights = async () => {
    const res = await axios.get("http://localhost:5000/flights");
    setFlights(res.data);
  };

  const deleteFlight = async (phone) => {
    await axios.delete(`http://localhost:5000/delete/${phone}`);
    fetchFlights();
  };

  const updateFlight = async (phone) => {
    const newEmail = prompt("Enter new email:");
    await axios.put(`http://localhost:5000/update/${phone}`, {
      email: newEmail
    });
    fetchFlights();
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <div>
      <h2>Flight Booking System</h2>

      <input name="name" placeholder="Passenger Name" onChange={handleChange}/>
      <input name="from" placeholder="From" onChange={handleChange}/>
      <input name="to" placeholder="To" onChange={handleChange}/>
      <input name="date" placeholder="Date" onChange={handleChange}/>
      <input name="departure" placeholder="Departure" onChange={handleChange}/>
      <input name="arrival" placeholder="Arrival" onChange={handleChange}/>
      <input name="phone" placeholder="Phone" onChange={handleChange}/>
      <input name="email" placeholder="Email" onChange={handleChange}/>

      <button onClick={addFlight}>Add Passenger</button>

      <h3>Passenger List</h3>
      {flights.map((f) => (
        <div key={f.phone}>
          {f.name} | {f.from} → {f.to} | {f.phone}
          <button onClick={() => deleteFlight(f.phone)}>Delete</button>
          <button onClick={() => updateFlight(f.phone)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default App;