import React from 'react'
import "../assets/css/home.css"
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  let activeClassName = "nav-link bg-light text-danger text-decoration-underline"

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid d-flex justify-content-space-around align-items-center">
          <div className="navbar-brand text-white ms-sm-5 ms-0">🍕 Pizzeria Mamma Mia!</div>
          <div className="d-flex align-items-center">
            <ul className="navbar-nav bg-light rounded p-1 me-sm-5 me-0">
              <li className="nav-item ms-auto ">
                🛒 <span><strong>$dslksd</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )



}
