import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Shows from './components/Shows/Shows';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;