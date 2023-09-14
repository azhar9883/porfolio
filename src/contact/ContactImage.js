import React from 'react'
import Navbar from '../toggel/Navbar'
const ContactImage = () => {
  return (
    <div style={{position:"absolute",top:"-37px"}}>
    <div style={{ marginLeft: "880px", position: "relative", top: "245px" }}>
    <div style={{ position: "relative", zIndex: "2" }}> <h5> <p style={{ fontSize: "24px", color: "#222", marginTop: "6px", }}>  <Navbar /> </p> </h5> </div>
      </div>
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14736.221804284312!2d88.48880994999999!3d22.577029300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693389288909!5m2!1sen!2sin"
    width={920}
    height={938}
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
  
    </div>
  )
}

export default ContactImage
