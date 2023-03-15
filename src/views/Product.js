import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../assets/css/product.css"
import { CartContext } from '../context/CartProvider';
import { MenuContext } from '../context/MenuProvider';

export default function Product() {

  const { addItemToCart, cartItems, formatChileanCurrency } = React.useContext(CartContext)

  const { menuList } = React.useContext(MenuContext);
  const { id: pizzaId } = useParams();
  const [pizzaInfo, setPizzaInfo] = useState(null);

  const handleClickAddItem = (id) => {
    console.log("agregando al carro")
    addItemToCart(id)
    console.log(cartItems)
  }

  useEffect(() => {
    const selectedPizza = menuList.find(item => item.id === pizzaId);
    setPizzaInfo(selectedPizza);
    console.log(selectedPizza);
  }, [menuList, pizzaInfo, pizzaId]);

  if (!pizzaInfo) {
    return null;
  }



  return (
    <section className='section-product-item'>
      <div className="card product-card mb-3" >
        <div className="row g-0">
          <div className="col-md-5">
            <img src={pizzaInfo.img} className="img-fluid product-img rounded-start" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{pizzaInfo.name}</h5>
              <p className="card-text">{pizzaInfo.desc}</p>
              <p className="card-text">Ingredientes:</p>
              <ul>
                {pizzaInfo.ingredients.map((ingrediente, idx) => (
                  <li key={idx} className="ingredient-list">{ingrediente}</li>
                ))}
              </ul>
              <div className='d-flex flex-row justify-content-between'>
                <p className="fs-1 text-start">{formatChileanCurrency(pizzaInfo.price)}</p>
                <button className="btn btn-danger" onClick={() => { handleClickAddItem(pizzaInfo.id) }}> Añadir 🛒</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
