import React from 'react'
import { ImHtmlFive2 } from 'react-icons/im'
import {FaMusic} from 'react-icons/fa'
import {TbSpeakerphone} from 'react-icons/tb'
import {GoGraph} from 'react-icons/go'
import {AiOutlineCamera} from 'react-icons/ai'
import {LuGamepad2} from 'react-icons/lu'
import './card.css';
const Card = () => {
    return (
        <div style={{ display: "flex" }}>

            <div style={{ flex: 4 }} className='service-item card-box'>

                <div className="box effect">
                    <div class="service-item card-box">
                        <h1><ImHtmlFive2 style={{ padding: "0px",color:"var(--bg-color)"}} /></h1>
                        <div class="name2">Web Development</div>
                        <p>
                            Modern and mobile-ready website that will help of your marketing.
                        </p>
                    </div>
                    <div className='icon1'>

                    </div>

                </div>
                <div className="box effect">
                    <div class="service-item card-box">
                    <h1><TbSpeakerphone style={{ padding: "0px",color:"var(--bg-color)"}} /></h1>
                        <div class="icon"><i class="la la-music"></i></div>
                        <div class="name2">Music Writing</div>
                        <p>
                            Music copying, transcription, arranging and composition Services.
                        </p>
                    </div>
                    <div className='icon1'>

                    </div>

                </div>
                <div className="box effect">
                    <div class="service-item card-box">
                    <h1><FaMusic style={{ padding: "0px",color:"var(--bg-color)"}} /></h1>
                        <div class="icon"><i class="la la-bullhorn"></i></div>
                        <div class="name2">Advetising</div>
                        <p>
                            Advertising services include television, radio, print, mail and web.
                        </p>
                    </div>
                    <div className='icon1'>

                    </div>

                </div>
            </div>
            <div style={{ flex: 4 }} className='service-item card-box'>
                <div className="box effect">
                    <div class="service-item card-box">
                    <h1><LuGamepad2 style={{ padding: "0px",color:"var(--bg-color)"}} /></h1>
                        <div class="icon"><i class="la la-gamepad"></i></div>
                        <div class="name2">Game Development</div>
                        <p>
                            Developing memorable and unique mobile android, ios games.
                        </p>
                    </div>
                    <div className='icon1'>

                    </div>

                </div>
                <div className="box effect">
                    <div class="service-item card-box">
                    <h1><GoGraph style={{ padding: "0px",color:"var(--bg-color)"}} /></h1>
                        <div class="icon"><i class="la la-area-chart"></i></div>
                        <div class="name2">Analytics</div>
                        <p>
                            Basic, advanced, custom implementations and online media analysis.
                        </p>
                    </div>
                    <div className='icon1'>

                    </div>

                </div>
                <div className="box effect">
                
                    <div class="service-item card-box">
                    <h1><AiOutlineCamera style={{ padding: "0px",color:"var(--bg-color)"}} /></h1>
                        <div class="icon"><i class="la la-camera-retro"></i></div>
                        <div class="name2">Hosting</div>
                        <p>
                            Full-day or half-day photo shoots with all necessary equipment.
                        </p>
                    </div>
                    <div className='icon1'>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card
