import React from 'react'
import AboutSideImage from '../component/AboutSideImage'
import AboutCard from '../component/AboutCard'

const About = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "rgb(31,32,35)" }}>
      <div style={{ flex: 6, marginLeft: "33px" }}>
        <AboutCard />
      </div>

      <div style={{ flex: 6, }}>
      
      <AboutSideImage/>
      
      </div>
    </div>
  )
}

export default About
