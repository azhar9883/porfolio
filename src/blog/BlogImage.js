import React from 'react'
import profile4 from '../assets/images/profile4.jpg';
import Navbar from '../toggel/Navbar';
import './blogimage.css'
const BlogImage = () => {
  return (
    <div className='aboutImage' style={{ backgroundImage: `url(${profile4})`,height:"100vh" }}>
    <div style={{ marginLeft: "865px", position: "relative", top: "245px" }}>
    <div style={{ position: "relative", zIndex: "2" }}> <h5> <p style={{ fontSize: "24px", color: "#222", marginTop: "6px", }}>  <Navbar /> </p> </h5> </div>
      </div>
     </div>
  )
}

export default BlogImage
