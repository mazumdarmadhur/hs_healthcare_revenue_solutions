import React from 'react'
import './Homepage.scss'
import Welcome from './Welcome'
import Work from './Work'
import OurService from './OurService'
import Slider from './Slider'

const Homepage = () => {
  return (
    <>
      <Slider />
      <Welcome />
      <Work />
      <OurService />
    </>
  )
}

export default Homepage