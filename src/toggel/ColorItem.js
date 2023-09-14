import React from 'react'
  
const ColorItem = ({color, colorSet}) => {
  return (
    <div className='color-item' onClick={colorSet} style={{'--bg-color':color}}>
      
    </div>
  )
}

export default ColorItem
