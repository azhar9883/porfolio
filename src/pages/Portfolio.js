import React from 'react'
import Portfoliocard from '../portfolio/Portfoliocard'
import PortfolioImage from '../portfolio/PortfolioImage'
import All from '../portfolio/categories/All'
import { Routes, Route } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "rgb(31,32,35)" }}>
      <div style={{ flex: 6, }}>
        <Portfoliocard />
      </div>

      <div style={{ flex: 6 }}>
        <PortfolioImage />
      </div>
    </div>
  )
}

export default Portfolio
