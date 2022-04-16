import React from 'react'
import { NavLink } from 'react-router-dom'
import './Homepage.scss'
import Welcome from './Welcome'
import Work from './Work'

const Homepage = () => {
  return (
    <>
      <Welcome />
      <Work />
    </>
  )
}

export default Homepage