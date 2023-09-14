import React from 'react';
import work1 from '../../assets/images/work1.jpg'
import work2 from '../../assets/images/work2.jpg'
import work3 from '../../assets/images/work3.jpg'
import work4 from '../../assets/images/work4.jpg'
import work5 from '../../assets/images/work5.jpg'
import work6 from '../../assets/images/work6.jpg'
import work7 from '../../assets/images/work7.jpg'
import work8 from '../../assets/images/work8.jpg'
import './all.css'

const All = () => {
    return (
        <div>
            <div style={{ display: "flex" }}>

                <div style={{ flex: 4 }} className='service-item-resum card-resume'>

                    <div className="box-resume effect2">
                        <div className='aboutImage'id='sal' style={{ backgroundImage: `url(${work1})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
                        </div>
                        <div className='icon1'>

                        </div>

                    </div>
                    <div className=" effect4">
                        <div className='aboutImage' style={{ backgroundImage: `url(${work4})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
                        </div>
                       
                        <div className='icon1'>

                        </div>

                    </div>
                    <div className="effect1">
                        <div className='aboutImage' style={{ backgroundImage: `url(${work7})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
                        </div>
                        <div className='icon1'>

                        </div>

                    </div>
                    <div className="effect3">
                        <div className='aboutImage' style={{ backgroundImage: `url(${work8})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
                        </div>
                        <div className='icon1'>

                        </div>

                    </div>
                </div>
                <div style={{ flex: 4 }} className='service-item-second card-second'>
                    <div className="box-second effect1">
                        <div className='aboutImage' style={{ backgroundImage: `url(${work2})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
                        </div>
                        <div className='icon1'>

                        </div>

                    </div>
                    <div className="box-second effect1" >
                        <div className='aboutImage' style={{ backgroundImage: `url(${work3})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
                        </div>
                        <div className='icon1'>

                        </div>

                    </div>

                    <div className="box-resumee effect1">
                        <div className='aboutImage' style={{ backgroundImage: `url(${work5})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
                        </div>
                        <div className='icon1'>

                        </div>

                    </div>
                    <div className="box-resume effect2">
                        <div className='aboutImage' style={{ backgroundImage: `url(${work6})`, boxSizing: "border-box", backgroundSize: "contain", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", borderRadius: "15px" }}>
                        </div>
                   
                        <div className='icon1'>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default All
