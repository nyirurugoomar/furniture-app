import React from 'react'
import Categories from './Categories'
import Hero from './Hero'
import ProductContainer from './ProductContainer'
import Whoweare from './Whoweare'

function Home() {
  return (
    <>
   <div className='pt-10'>
    <Hero/>
    <Categories/>
    <Whoweare/>
    <ProductContainer/>
   </div>
    </>
  )
}

export default Home


