import React from 'react'
import { BsHeadphones } from 'react-icons/bs'
import { BsTrophyFill } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiTwotoneFlag } from 'react-icons/ai';
import { BsBookFill } from 'react-icons/bs';
import { BsCodeSlash } from 'react-icons/bs';
import { BsEmojiSmile } from 'react-icons/bs';
import { BsBicycle } from 'react-icons/bs';
import './funfact.css'
const FunFact = () => {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 4, marginLeft: "49px" }} className='service-item-fun card-fun'>

                        <div className="box-fun effect">
                            <div className="fuct-item card-box1">
                                <div className='icon3'>
                                    <BsHeadphones style={{ padding: "6px", marginLeft: "12px" }} />
                                </div>
                                <div className="name">47 Albumes Listened</div>
                            </div>
                            <div className='icon1'>

                            </div>

                        </div>
                    </div>

                    <div>
                        <div style={{ flex: 4, marginLeft: "60px" }} className='service-item-fun card-fun'>

                            <div className="box-fun effect">
                                <div className="fuct-item card-box1">
                                    <div className='icon3'>
                                        <BsTrophyFill style={{ padding: "6px", marginLeft: "12px" }} />
                                    </div>
                                    <div className="name">15 Awards Won</div>
                                </div>
                                <div className='icon1'>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ flex: 4, marginLeft: "60px" }} className='service-item-fun card-fun'>

                        <div className="box-fun effect">
                            <div
                                className="fuct-item card-box1">
                                <div className='icon3'>
                                    <HiOutlineLightBulb style={{ padding: "6px",  marginLeft: "12px" }} />
                                </div>
                                <div
                                    className="name">54 Projects Completed</div>
                            </div>
                            <div className='icon1'>

                            </div>

                        </div>
                    </div>
                    <div>
                        <div style={{ flex: 4, marginLeft: "60px" }} className='service-item card-fun'>

                            <div className="box-fun effect">
                                <div className="fuct-item card-box1">
                                    <div className='icon3'>
                                        <AiTwotoneFlag style={{ padding: "6px", marginLeft: "12px" }} />
                                    </div>
                                    <div className="name">10 Countries Visited</div>
                                </div>
                                <div className='icon1'>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ textAlign: "center" }}>


                <div style={{ display: "flex", marginTop: "-87px", marginLeft: "-9x" }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ flex: 4, marginLeft: "50px" }} className='service-item-fun card-fun'>

                            <div className="box-fun effect">
                                <div className="fuct-item card-box1">
                                    <div className='icon3'>
                                        <BsBookFill style={{ padding: "6px",  marginLeft: "12px" }} />
                                    </div>
                                    <div className="name">50+ Books Readed</div>
                                </div>
                                <div className='icon3'>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div style={{ flex: 4, marginLeft: "50px" }} className='service-item-fun card-fun'>

                                <div className="box-fun effect">
                                    <div className="fuct-item card-box1">
                                        <div className='icon3'>
                                            <BsCodeSlash style={{ padding: "6px",  marginLeft: "12px" }} />
                                        </div>
                                        <div className="name">100 000 Lines of Code</div>
                                    </div>
                                    <div className='icon1'>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex" }}>
                        <div style={{ flex: 4, marginLeft: "66px" }} className='service-item-fun card-fun'>

                            <div className="box-fun effect">
                                <div className="fuct-item card-box1">
                                    <div className='icon3'>
                                        <BsEmojiSmile style={{ padding: "6px", marginLeft: "12px" }} />
                                    </div>
                                    <div className="name">49 Satisfied Customers</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ flex: 4, marginLeft: "62px" }} className='service-item card-fun'>

                                <div className="box-fun effect">
                                    <div className="fuct-item card-box1">
                                        <div className='icon3'>
                                            <BsBicycle style={{ padding: "6px",  marginLeft: "12px" }} />
                                        </div>
                                        <div className="name">1250 km Cycled</div>
                                    </div>
                                    <div classNameName='icon1'>

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

export default FunFact
