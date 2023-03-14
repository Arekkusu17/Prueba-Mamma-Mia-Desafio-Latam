import React, { useEffect, useState } from "react";
import axios from "axios";

export const MenuContext = React.createContext()

const MenuProvider = ({ children }) => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const getMenuData = async () => {
      const response = await axios.get("/pizzas.json");
      setMenuList(response.data)
      console.log(response.data)
    };
    getMenuData()
  }, [])

  return (
    <MenuContext.Provider value={{ menuList, setMenuList }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider


