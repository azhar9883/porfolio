import React, { useEffect, useState } from 'react'
import ColorItem from './ColorItem'
import { GoGear } from "react-icons/go";
import './navbar.css'
const Navbar = () => {

    const [state, setState] = useState(false)
    const colors = ["#DE3163", "#FF7F50", "#FFBF00", "#9FE2BF", "#6495ED", "#40E0D0","#5ac24e"]
    const setTheme = (color) => {
        document.documentElement.style.setProperty('--bg-color', color)
    }

    useEffect(()=>{
        const currentColor = localStorage.getItem('color')
        setTheme(currentColor)
    },[])
    const colorSet = (event) => {
        const currentColor = event.target.style.getPropertyValue('--bg-color')
        setTheme(currentColor)
        localStorage.setItem('color', currentColor)
        console.log(currentColor)
    }

    return (
        <div className={`color-switcher ${state && 'color-switcher--open'}`}>
            <button onClick={()=> setState(preState => !preState)} id='btn'><GoGear id='go'/></button>
            <h1 className='heading'>select color</h1>
            <div className='color-list'>
                {
                    colors.map((color, ind) => <ColorItem colorSet={colorSet} key={ind} color={color} />)
                }
            </div>
        </div>
    )
}

export default Navbar
