import React,{useEffect} from 'react'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Resume from '../pages/Resume'
import { Routes, Route, NavLink } from 'react-router-dom'
import './dashboard.css'
const Dashboard = () => {

   
    return (
        <div className='card-inner card-started active 100-vh' id='home-card' style={{ flex: 38, height: "100%" }}>
            <Routes>
                <Route path='/' exact  strict element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='blog' element={<Blog />} />
                <Route path='contact' element={<Contact />} />
                <Route path='about' element={<About />} />
                <Route path='resume' element={<Resume />} />
                <Route path='portfolio' element={<Portfolio />} />
            </Routes>

        </div>
    )
}

export default Dashboard
