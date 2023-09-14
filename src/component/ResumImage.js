import React from 'react'
import profile2 from '../assets/images/profile2.jpg';
import Navbar from '../toggel/Navbar';
import './resum.css'
const ResumImage = () => {
  return (
    <div className='aboutImage' style={{ backgroundImage: `url(${profile2})`,height:"100vh" }}>
    <div style={{ marginLeft: "865px", position: "relative", top: "245px" }}>
    <div style={{ position: "relative", zIndex: "2" }}> <h5> <p style={{ fontSize: "24px", color: "#222", marginTop: "6px", }}>  <Navbar /> </p> </h5> </div>
      </div>
    </div>
  )
}

export default ResumImage
