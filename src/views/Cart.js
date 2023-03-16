import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../assets/css/cart.css'
import { CartContext } from '../context/CartProvider'
import { MenuContext } from '../context/MenuProvider'

export default function Cart() {

  const { totalPrice, formatChileanCurrency, cartItems, decreaseItemFromCart, addItemToCart } = React.useContext(CartContext)
  const { menuList } = React.useContext(MenuContext)

  const totalPricePerItem = (id, cartItems, menuList) => {
    const item = menuList.find((item) => item.id === id);
    const quantity = cartItems.find((item) => item.id === id)?.quantity || 0;
    return item.price * quantity;
  }

  const getItemFromMenu = (id, menuList) => {
    const item = menuList.find((item) => item.id === id);
    return item ? item : {};
  }

  const handleClickAddItem = (id) => {
    addItemToCart(id)
  }

  const handleClickRemoveOneItem = (id) => {
    decreaseItemFromCart(id)
  }

  const navigate = useNavigate()
  return (
    <>
      <section className='cart-section'>
        <h2>Detalles del pedido:</h2>
        <div className='order-resume w-100 p-1'>
          {cartItems.length <= 0 ? (
            <>
              <p className='fs-1'>Tu carrito está vacío😢</p>
              <button className='btn btn-success' onClick={() => { navigate('/home') }}>Volver a Inicio</button>
            </>
          ) : (
            <>{
              cartItems.map((item) => (
                <div className='order-item ' key={item.id}>
                  <div className='d-flex flex-row align-items-center'>
                    <img src={getItemFromMenu(item.id, menuList).img} alt="" className='img-fluid' />
                    <p className='item-name fs-5 my-1'>{getItemFromMenu(item.id, menuList).name}</p>
                  </div>
                  <div className='d-flex flex-row align-items-center'>
                    <p className='fs-5 m-2 text-success price-per-item'>{formatChileanCurrency(totalPricePerItem(item.id, cartItems, menuList))}</p>
                    <button className='btn btn-danger' onClick={() => { handleClickRemoveOneItem(item.id) }}>-</button>
                    <p className='fs-4 m-2'>{item.quantity}</p>
                    <button className='btn btn-primary' onClick={() => { handleClickAddItem(item.id) }}>+</button>
                  </div>
                </div>
              ))}
              <h3 className='fs-1'>Total: {formatChileanCurrency(totalPrice)}</h3>
              <Link className='btn btn-danger' to='/home'>Volver a Inicio</Link>
              <button className='btn btn-success ms-4' onClick={() => {
                Swal.fire({
                  icon: 'success',
                  title: 'Se ha realizado el pago!',
                  text: 'Muchas gracias por confiar en nuestros productos.'
                })
              }}>Ir a Pagar</button>
            </>
          )}

        </div>

      </section>
    </>
  )
}
