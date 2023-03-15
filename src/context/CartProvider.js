import React, { useEffect, useState } from "react"
import { MenuContext } from "./MenuProvider";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {

  function formatChileanCurrency(number) {
    const formatter = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });
    return formatter.format(number);
  }
  const { menuList } = React.useContext(MenuContext)
  const [cartItems, setCartItems] = useState([])

  const cartTotalItems = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  function getItemTotal(id) {
    // check if item exists and has the quantity property
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function addItemToCart(id) {
    setCartItems(currentItems => {
      // if the item doesnt exist in cart, it is added with a quantity of 1
      if (currentItems.find(item => item.id === id) === undefined) {
        return [...currentItems, { id: id, quantity: 1 }]
      } else {
        // if the item it's already in the cart the quantity gets 1 added.
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseItemFromCart(id) {
    setCartItems(currentItems => {
      // check if the item qty is 1 to remove it from the cart
      if (currentItems.find(item => item.id === id)?.quantity === 1) {
        return currentItems.filter(item => item.id !== id)
      } else {
        // if is more than 1, it gets 1 reduced from qty
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const [totalPrice, setTotalPrice] = useState(0);


  function calculateTotalPrice(cartItems, menuList) {
    setTotalPrice(cartItems.reduce((total, cartItem) => {
      const item = menuList.find(i => i.id === cartItem.id)
      return total + (item?.price || 0) * cartItem.quantity
    }, 0));
  }

  useEffect(() => {
    calculateTotalPrice(cartItems, menuList);
  }, [cartItems, menuList])

  return (
    <CartContext.Provider value={{
      totalPrice, calculateTotalPrice, decreaseItemFromCart, addItemToCart, getItemTotal, cartItems, cartTotalItems, formatChileanCurrency
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
