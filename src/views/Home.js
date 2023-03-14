import React from 'react'
import Gallery from '../components/Gallery';
import { MenuContext } from '../context/MenuProvider';

export default function Home() {
  const { menuList, setMenuList } = React.useContext(MenuContext)





  return (
    <section>
      <div className='home-banner'>
        <h1>¡Pizzería Mamma Mia!</h1>
        <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
      </div>
      <Gallery menuList={menuList} className="h-100" />

    </section>
  )
}
