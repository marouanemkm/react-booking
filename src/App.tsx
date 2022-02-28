import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Booking from './components/Booking/Booking';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <div className='booking-picker'>
        <Booking />
      </div>
    </div>
  );
}

export default App;
