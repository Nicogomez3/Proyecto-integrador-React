
import React from 'react'
import { Hero } from './Hero/Hero'
import { Discover } from './Discover/Discover'
import { ChooseUs } from './ChooseUs/ChooseUs'
import { FeaturedProducts } from './Products/FeaturedProducts'
import Process from './Process/Process'
import Support from './Support/Support'
 const Home = () => {
  return (
    <>
      <Hero/>
      <Process/>
      <Discover/>
      <ChooseUs/>
      <FeaturedProducts/>
      <Support/>
    </>
  )
}

export default Home