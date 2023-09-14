import React from 'react'
import './blogcard.css';
import blog3 from '../assets/images/blog3.jpg';
import blog2 from '../assets/images/blog2.jpg'
import blog1 from '../assets/images/blog1.jpg'
import { SlCalender } from 'react-icons/sl';
const Blog = () => {
  return (
    <div className='card_detail scroll' style={{ overflowX: "hidden"}}>
      <div>
        <div className='title-bg'>
          My Blog
        </div>
        <div className='card-Blog'>
          <span className='service'>My</span>
          Blog
        </div>
        <div style={{ position: "relative", top: "130px", marginLeft: "30px" }}>
          <div>
            <div style={{ display: "flex" }}>

              <div style={{ flex: 4 }} className='service-item-blog card-blog'>

                <div className="box-blog effect6">

                  <div className='aboutImage' style={{ backgroundImage: `url(${blog3})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>


                    <a className='dash name'>By spite about do of do allow blush</a>
                    <p className='dash1'>Design</p>
                    <span className="info">
                      <div className='box-item'>
                        <span className="date1"><strong >20</strong>Jun</span>
                      </div>
                    </span>
                  </div>
                  <div className='icon1'>

                  </div>
                </div>
              </div>

            </div>
            <div style={{ display: "flex" }}>

              <div style={{ flex: 4 }} className='service-item-blog card-blog'>

                <div className="box-blog effect6">

                  <div className='aboutImage' style={{ backgroundImage: `url(${blog2})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
                    <a className='dash-middle name' name>By spite about do of do allow blush</a>
                    <p className='dash1-middle'>Design</p>
                    <span className="info">
                      <div className='box-item'>
                        <span className="date1"><strong >20</strong>Jun</span>
                      </div>
                    </span>
                  </div>
                  <div className='icon1'>

                  </div>
                </div>
              </div>

            </div>
            <div style={{ display: "flex" }}>

              <div style={{ flex: 4 }} className='service-item-blog card-blog'>

                <div className="box-blog effect6">

                  <div className='aboutImage' style={{ backgroundImage: `url(${blog1})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
                    <a className='dash-last name' name>By spite about do of do allow blush</a>
                    <p className='dash1-last'>Design</p>
                    <span className="info">
                      <div className='box-item'>
                        <span className="date1"><strong >20</strong>Jun</span>
                      </div>
                    </span>
                  </div>
                  <div className='icon1'>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
