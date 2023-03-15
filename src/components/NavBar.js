import React from 'react'
import "../assets/css/home.css"
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartProvider'

export default function NavBar() {
  const { totalPrice, formatChileanCurrency, } = React.useContext(CartContext)


  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid d-flex justify-content-space-around align-items-center">
          <NavLink to='/home'>
            <div className="navbar-brand text-white ms-sm-5 ms-0">🍕 Pizzeria Mamma Mia!</div>
          </NavLink>
          <div className="d-flex align-items-center">
            <ul className="navbar-nav bg-light rounded p-1 me-sm-5 me-0">
              <NavLink to="/carrito" className="nav-item ms-auto text-decoration-none text-dark">
                🛒 <span><strong>{formatChileanCurrency(
                  totalPrice
                )}</strong></span>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )



}
