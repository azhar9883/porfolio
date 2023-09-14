import React from 'react'
import ContactImage from '../contact/ContactImage'
import ContactCard from '../contact/ContactCard'

const Contact = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "rgb(31,32,35)",height:"100vh",width:"100%" }}>
      <div style={{ flex: 6, }}>
        <ContactCard />
      </div>

      <div style={{ flex: 6 }}>
        <ContactImage />
      </div>
    </div>
  )
}

export default Contact
