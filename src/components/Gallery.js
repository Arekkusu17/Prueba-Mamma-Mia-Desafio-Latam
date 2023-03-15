import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/gallery.css";
import { CartContext } from "../context/CartProvider";
import { MenuContext } from "../context/MenuProvider";

export default function Gallery() {

  // const { }

  const { menuList } = React.useContext(MenuContext)
  const { addItemToCart, formatChileanCurrency } = React.useContext(CartContext)

  const navigate = useNavigate()

  const handleClickAddItem = (id) => {
    addItemToCart(id)
  }
  const handleClickViewMore = (id) => {
    navigate(`/pizza/${id}`)
  }

  return (

    <div className="galeria grid-columns-home">
      {menuList.map((pizza) => (
        <div key={pizza.id} className="card" >
          <img src={pizza.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{pizza.name}</h3>

            <p className="card-text">Ingredientes:</p>
            <ul>
              {pizza.ingredients.map((ingrediente, idx) => (
                <li key={idx} className="ingredient-list">{ingrediente}</li>
              ))}
            </ul>
            <p className="fs-1 text-center">{formatChileanCurrency(pizza.price)}</p>
          </div>
          <div className="buttons">
            <button className="btn btn-primary" onClick={() => { handleClickViewMore(pizza.id) }}>Ver Más 👀</button>
            <button className="btn btn-danger" onClick={() => { handleClickAddItem(pizza.id) }}> Añadir 🛒</button>
          </div>
        </div>
      ))
      }
    </div >
  )
}
