import React, { useState } from 'react'
import './sidebar.css'
import { TbWorld } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { AiOutlineSetting } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { BsNewspaper } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { AiOutlineFacebook } from 'react-icons/ai'
import { BsStackOverflow } from 'react-icons/bs'
import { Routes, Route, NavLink } from 'react-router-dom'
const Sidebar = () => {
    const [active, setActive] = useState('home');
    const hundl = () => {   
        // setActive(!active)
    }
    return (
        <>


            <div className='d-flex justify-content-between flex-column vh-100  ' style={{ flex: 0.6, backgroundColor: "rgb(24,24,24)", backgroundSize: "", position: "fixed", left: "0px", zIndex: "9999" }}>

                <div className style={{ marginTop: "-25px" }}>
                    <NavLink className='text-decoration-none' to='/'>
                        <h1 className='text-white text-center ptag' style={{ position: "relative", fontFamily: "Cormorant Garamond", fontSize: "26px", fontWeight: "700px", textTransform: "uppercase", zIndex: 2, padding: "14px" }}>P</h1>
                    </NavLink>
                    <NavLink to='/' onClick={() => setActive('home')} > <h5 className='ps-2 pe-2 ' data-placement="right" title="Home" data-toggle="tooltip" style={{ color: "rgb(169,158,146)", marginTop: "-12px" }} onClick={hundl}> <GoHome className={active === 'home' ? 'navLogoStl' : ''} /></h5></NavLink>
                    <NavLink to='/about'> <h5 className='ps-2 pe-2 ' data-placement="right" title="About" data-toggle="tooltip" style={{ color: "rgb(169,158,146)", marginTop: "-12px" }} onClick={() => setActive('about')} ><BiUser className={active === 'about' ? 'navLogoStl' : ''} /></h5></NavLink>
                    <NavLink to='/resume'> <h5 className='ps-2 pe-2 ' data-placement="right" title="Resume" data-toggle="tooltip" style={{ color: "rgb(169,158,146)", marginTop: "-12px" }} onClick={() => setActive('resume')} ><AiOutlineSetting className={active === 'resume' ? 'navLogoStl' : ''} /></h5></NavLink>
                    <NavLink to='/portfolio'> <h5 className='ps-2 pe-2 ' data-placement="right" title="Portfolio" data-toggle="tooltip" style={{ color: "rgb(169,158,146)", marginTop: "-12px" }} onClick={() => setActive('portfolio')} ><AiFillEye className={active === 'portfolio' ? 'navLogoStl' : ''} /></h5></NavLink>
                    <NavLink to='/blog'> <h5 className='ps-2 pe-2 py-2' data-placement="right" title="Blog" data-toggle="tooltip" style={{ color: "rgb(169,158,146)", marginTop: "-12px" }} onClick={() => setActive('blog')}><BsNewspaper className={active === 'blog' ? 'navLogoStl' : ''} /></h5></NavLink>
                    <NavLink to='/contact'>  <h5 className='ps-2 pe-2 ' data-placement="right" title="Contact" data-toggle="tooltip" style={{ color: "rgb(169,158,146)", marginTop: "-12px" }} onClick={() => setActive('contact')}><CiMail className={active === 'contact' ? 'navLogoStl' : ''} /></h5> </NavLink>
                </div>

                <div>
                    <NavLink> <p className='ps-2 pe-1 ' style={{ color: "rgb(169,158,146)", marginTop: "-30px" }}><TbWorld /></p></NavLink>
                    <NavLink>  <p className='ps-2 pe-1 ' style={{ color: "rgb(169,158,146)", marginTop: "-30px" }}><AiOutlineFacebook /></p></NavLink>
                    <NavLink>  <p className='ps-2 pe-1 ' style={{ color: "rgb(169,158,146)", marginTop: "-30px" }}><AiFillGithub /></p></NavLink>
                    <NavLink>   <p className='ps-2 pe-1 ' style={{ color: "rgb(169,158,146)", marginTop: "-30px" }}><BsStackOverflow /></p></NavLink>
                </div>

            </div>
        </>
    )
}

export default Sidebar
