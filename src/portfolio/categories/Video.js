import React from 'react'
import work8 from '../../assets/images/work8.jpg'
import work1 from '../../assets/images/work1.jpg'
const Video = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>

        <div style={{ flex: 4 }} className='service-item-resum card-resume'>


          <div className="box-second effect1">
          <div className='aboutImage' style={{ backgroundImage: `url(${work8})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
          </div>
            <div className='icon1'>

            </div>

          </div>


        </div>
        <div style={{ flex: 4 }} className='service-item-second card-second'>

          <div className="box-resume effect1" id='resumee'>
          <div className='aboutImage' style={{ backgroundImage: `url(${work1})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
          </div>
            <div className='icon1'>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Video
