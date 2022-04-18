import React from 'react'
import './Homepage.scss'
import Welcome from './Welcome'
import Work from './Work'
import OurService from './OurService'
import Slider from './Slider'
import { TabTitle } from '../util/GeneralFunctions'

const Homepage = () => {
  TabTitle('HS Heathcare Revenue Solution | HSHCRS');

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