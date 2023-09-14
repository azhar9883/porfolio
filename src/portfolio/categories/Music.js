import React from 'react'
import './music.css'
import work8 from '../../assets/images/work8.jpg'
const Music = () => {
  return (
    <div>
    <div style={{ display: "flex" }}>

    <div style={{ flex: 4 }} className='service-item-resum card-resume'>

      
        <div className="box-second effect5">
        <div className='aboutImage' style={{ backgroundImage: `url(${work8})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
          </div>
            <div className='icon1'>
              
            </div>

        </div>
     
        
    </div>
    <div style={{ flex: 4 }} className='service-item-second card-second'>
        <div className="box-second effect5">
        <div className='aboutImage' style={{ backgroundImage: `url(${work8})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
        </div>
            <div className='icon1'>
              
            </div>

        </div>
      

   
    </div>
</div>
    </div>
  )
}

export default Music
