import React from 'react'
import bg from '../assets/images/bg.jpg'
import { GoGear } from "react-icons/go";
import '../assets/css/home.css';
import { Typewriter } from 'react-simple-typewriter'
import './home.css'
import Navbar from '../toggel/Navbar';
const Home = () => {
  return (

    <div className='slide'>



      <div className='title'>

        <span className='me-4'>Patrick</span>
        <span className='text-white' id='jon'> Johansson </span>
      </div>
      <div className='subtitle '>
       <span id='am'>I am a</span>   <h3 className='text-white ' id='textBlogger' style={{ position: "relative", zIndex: "2", display: "inline", colo: "#fff !important" }}>
          <span className='text-white' id='textBlogger' style={{ color: "#ffff !important" }}>
            <Typewriter
              id={"textBlogger"}
              loop={false}
              words={['web developer', 'blogger', 'freelancer', 'photographer']}
            />
          </span>
        </h3>

      </div>

      <div className='text-white' style={{ marginLeft: "98%", marginTop: "130px" }}>

        <div style={{ position: "relative", zIndex: "2" }}> <h5> <p style={{ fontSize: "24px", color: "#222", marginTop: "6px", }}>  <Navbar /> </p> </h5> </div>

      </div>

    </div>

  )
}

export default Home
