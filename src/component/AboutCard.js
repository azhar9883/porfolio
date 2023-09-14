import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from 'react-icons/bs'
import { AiOutlineSkype } from 'react-icons/ai'
import { HiDownload } from 'react-icons/hi'
import './aboutcard.css'
import { NavLink } from 'react-router-dom';
import Card from '../card/Card';
import TableCard from '../card/TableCard';
import FunFact from '../card/FunFact'
import Client from '../card/Client'
const AboutCard = () => {
  const cv = () => {

  const str =  prompt("enter your  code")
  if(str == "perveen"){
    fetch('/home/azhar/Videos/file.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = '/home/azhar/Videos/file.pdf';
          alink.click();
      })
  })
  }
    
  }
  return (
    <div className='card_detail scroll' >
      <div className='title-bg'>
        about me
      </div>
      <div className="text">
        <p className='discript'>
          <strong>Hello, I’m a Patrick</strong>, web-developer based on Paris. <br />
          I have rich experience in web site design & building <br />
          and customization. Also I am good at <strong>html, css, <br />
            wordpress, php, jquery, bootstrap.</strong>
        </p>
      </div>
      <div className="circle-bts">
        <a href="" onClick={cv}><span className='btnStl'><HiDownload className='mb-1 me-2'  />Download CV</span></a>
        <NavLink><AiFillGithub className='iconStl' /></NavLink>
        <NavLink><BsStackOverflow className='iconStl' /></NavLink>
        <NavLink><AiOutlineSkype className='iconStl' /></NavLink>
      </div>

      <div className='card-title'>
        <span className='service'>Our</span>
        Services
      </div>
      <div style={{ position: "relative", top: "165px", marginLeft: "12px" }}>
        <Card />

      </div>

      <div className='card-title'>
        <span className='service'>Pricing</span>
        Table
      </div>
      <div style={{ position: "relative", top: "187px" }}>

        <TableCard />

      </div>
      <div className='card-title'>
        <span className='service'>Fun</span>
        Facts
      </div>
      <div style={{ position: "relative", top: "180px" }}>
        <FunFact />



      </div>

      <div className='card-title'>
        <span className='service'>Our</span>
        Client
      </div>
      <div style={{ position: "relative", top: "210px" }}>
        <Client />

      </div>
    </div>
  )
}

export default AboutCard
