import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import Hotel from "./components/Hotels/Hotel";


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <div>
        <Home />
      </div>

      <div className='booking-picker'>
        <Booking />
        <div className="hotels-component">
          <Hotel />
        </div>
      </div>
    </div>
  );
}

export default App;