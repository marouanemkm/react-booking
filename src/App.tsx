import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Booking from './components/Booking/Booking';
import Hotel from "./components/Hotels/Hotel";
import Cart from './components/Cart/Cart';


function App() {

  const [cartPrice, setCartPrice] = useState<any>(0);

  return (
    <BrowserRouter>
      <div className="App">

        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/show' element={<div>hey</div>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;