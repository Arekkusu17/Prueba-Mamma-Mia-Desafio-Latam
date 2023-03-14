import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import MenuProvider from './context/MenuProvider';
import Cart from './views/Cart';
import Home from './views/Home';
import Product from './views/Product';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <MenuProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pizza/:id" element={<Product />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </MenuProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
