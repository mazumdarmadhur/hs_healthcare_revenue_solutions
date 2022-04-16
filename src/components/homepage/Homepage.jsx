import React from 'react'
import { NavLink } from 'react-router-dom'
import './Homepage.scss'
import Welcome from './Welcome'
import Work from './Work'
import OurService from './OurService'

const Homepage = () => {
  return (
    <>
      <Welcome />
      <Work />
      <OurService />
    </>
  )
}

export default Homepage