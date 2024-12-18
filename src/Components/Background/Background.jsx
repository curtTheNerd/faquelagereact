import React from 'react'
import './background.css'
import img from '../Assets/Backround.jpg'

const Background = () => {
  return (
    <div className='background'>
        <img src={img} alt="bg" className='bgImg' />
    </div>
  )
}

export default Background
