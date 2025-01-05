import React, { useState } from 'react';
import './CabBookingForm.css';

const CabBookingForm = () => {
  const [pickupCity, setPickupCity] = useState('');
  const [dropCity, setDropCity] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { pickupCity, dropCity, pickupDate, pickupTime };
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      const data = await response.json();
      console.log('Booking successful:', data);
    } catch (error) {
      console.error('Error booking cab:', error);
    }
  };

  return (
    <form className="cab-booking-form" onSubmit={handleSubmit}>
      <label>
        FROM:
        <input
          type="text"
          value={pickupCity}
          onChange={(e) => setPickupCity(e.target.value)}
          placeholder="Enter Pickup City"
        />
      </label>
      <label>
        TO:
        <input
          type="text"
          value={dropCity}
          onChange={(e) => setDropCity(e.target.value)}
          placeholder="Enter Drop City"
        />
      </label>
      <label>
        PICK UP:
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
      </label>
      <label>
        PICK UP AT:
        <input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
        />
      </label>
      <button type="submit">EXPLORE CABS</button>
    </form>
  );
};

export default CabBookingForm;
