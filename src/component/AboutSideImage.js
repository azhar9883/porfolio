import React from 'react'
import Navbar from '../toggel/Navbar'
import './aboutsideimage.css'
import profile from '../assets/images/profile.jpg'
const AboutSideImage = () => {
  return (
    <div className='aboutImage' style={{ backgroundImage: `url(${profile})`, height: "100vh" }}>
      <div style={{ marginLeft: "865px", position: "relative", top: "245px" }}>
      <div style={{ position: "relative", zIndex: "2" }}> <h5> <p style={{ fontSize: "24px", color: "#222", marginTop: "6px", }}>  <Navbar /> </p> </h5> </div>
      </div>
    </div>
  )
}

export default AboutSideImage
