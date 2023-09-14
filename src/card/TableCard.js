import React from 'react'
import { ImHtmlFive2 } from 'react-icons/im'
import { FaTachometerAlt } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import './tablecard.css'
const TableCard = () => {
    return (
        <div>
            <div style={{ display: "flex",marginLeft:"4px" }}>

                <div style={{ flex: 4 }} className='service-item-table card-table'>

                    <div className="box-table effect effectBox">

                        <div className="pricing-item card-boxx">
                            <div className="icon">
                                <div className='icon2'>
                                    <FaTachometerAlt style={{ padding: "6px", marginTop: "23px", marginLeft: "12px" }} />
                                </div>
                            </div>
                            <div className="name">Basic</div>
                            <div className="amount">
                                <span className="dollar">$</span>
                                <span className="number">22</span>
                                <span className="period">hour</span>
                            </div>
                            <div className="feature-list">
                                <ul>
                                    <li>Web Development</li>
                                    <li>Advetising</li>
                                    <li>Game Development</li>
                                    <li className="disable">Music Writing</li>
                                    <li className="disable">
                                        Photography <strong>new</strong>
                                    </li>
                                </ul>
                            </div>
                            <div className="lnks">
                                <a href="#" className="lnk">
                                    Buy <span>Basic</span>
                                </a>
                            </div>
                        </div>



                    </div>
                </div>
                <div style={{ flex: 4,marginLeft:"-12px" }} className='service-item-table card-table'>
                    <div className="box-table effect effectBox">

                        <div className="pricing-item card-boxx">
                            <div className="icon">
                                <div className='icon2'>
                                    <IoIosRocket style={{ padding: "6px", marginTop: "23px", marginLeft: "12px" }} />
                                </div>
                            </div>
                            <div className="name">Pro</div>
                            <div className="amount">
                                <span className="dollar">$</span>
                                <span className="number">48</span>
                                <span className="period">hour</span>
                            </div>
                            <div className="feature-list">
                                <ul>
                                    <li>Web Development</li>
                                    <li>Advetising</li>
                                    <li>Game Development</li>
                                    <li>Music Writing</li>
                                    <li>
                                        Photography <strong>new</strong>
                                    </li>
                                </ul>
                            </div>
                            <div className="lnks">
                                <a href="#" className="lnk">
                                    Buy <span>Pro</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableCard
