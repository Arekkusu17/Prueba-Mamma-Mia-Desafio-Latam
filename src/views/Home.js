import React from 'react'
import Gallery from '../components/Gallery';

export default function Home() {

  return (
    <section>
      <div className='home-banner'>
        <h1>¡Pizzería Mamma Mia!</h1>
        <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
      </div>
      <Gallery className="h-100" />

    </section>
  )
}
