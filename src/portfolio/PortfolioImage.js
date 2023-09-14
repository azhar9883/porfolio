import React from 'react'
import profile3 from '../assets/images/profile3.jpg';
import Navbar from '../toggel/Navbar';
const PortfolioImage = () => {
  return (
    <div className='aboutImage' style={{ backgroundImage: `url(${profile3})`,height:"100vh"}}>
    <div style={{ marginLeft: "885px", position: "relative", top: "245px" }}>
    <div style={{ position: "relative", zIndex: "2" }}> <h5> <p style={{ fontSize: "24px", color: "#222", marginTop: "6px", }}>  <Navbar /> </p> </h5> </div>
  </div>
    </div>
  )
}

export default PortfolioImage
