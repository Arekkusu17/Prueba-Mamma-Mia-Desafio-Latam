import React from 'react'
import { CartContext } from '../context/CartProvider'
import { MenuContext } from '../context/MenuProvider'

export default function Cart() {

  const { cartItems } = React.useContext(CartContext)
  const { menuList } = React.useContext(MenuContext)

  return (
    <section className='cart-section'>
      <div className='order-resume'>
        <h2>Detalles del pedido:</h2>
        <div>

        </div>
      </div>
    </section>
  )
}
