import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CartProvider from './context/CartProvider';
import MenuProvider from './context/MenuProvider';
import Cart from './views/Cart';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Product from './views/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/pizza/:id" element={<Product />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </CartProvider>
        </MenuProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
