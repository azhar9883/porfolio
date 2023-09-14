import React from 'react';
import './resumesmall.css'
import { ImHtmlFive2 } from 'react-icons/im'
const ResumeSmall = () => {
    return (
        <div>
            <div>
                <div>

                    <div className='card-lm'>
                        <span className='service'>Personal</span>
                        Skills
                    </div>
                </div>
                <div>

                    <div className='card-l'>
                        <span className='service'>Professnail</span>
                        Skills
                    </div>
                </div>

            </div>

            <div style={{ display: "flex" }}>

                <div style={{ flex: 4, marginLeft: "13px" }} className='service-item-resum-small  card-resume-small'>

                    <div className="box-resume-small effect1">
                        <div className="skills-list card-box">
                            <ul>
                                <li>
                                    <div className="name">Communication</div>
                                    <div className="progress">
                                        <div className="percentage" style={{ width: "90%" }} />
                                    </div>
                                </li>
                                <li>
                                    <div className="name">Team Work</div>
                                    <div className="progress">
                                        <div className="percentage" style={{ width: "65%" }} />
                                    </div>
                                </li>
                                <li>
                                    <div className="name">Leadership</div>
                                    <div className="progress">
                                        <div className="percentage" style={{ width: "75%" }} />
                                    </div>
                                </li>
                                <li>
                                    <div className="name">Language</div>
                                    <div className="progress">
                                        <div className="percentage" style={{ width: "85%" }} />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='icon1'>

                        </div>

                    </div>
                </div>
                <div style={{ flex: 4 }} className='service-item-resum-small card-resume-small'>
                    <div className="box-resume-small effect1">
                        <div className="skills-list card-box">
                            <ul>
                                <li>
                                    <div className="name">WordPress</div>
                                    <div className="progress">
                                        <div className="percentage" style={{ width: "90%" }} />
                                    </div>
                                </li>
                                <li>
                                    <div className="name">PHP / MYSQL</div>
                                    <div className="progress">
                                        <div className="percentage" style={{ width: "65%" }} />
                                    </div>
                                </li>
                                <li>
                                    <div className="name">HTML / CSS / JS</div>
                                    <div className="progress">
                                        <div className="percentage" style={{ width: "95%" }} />
                                    </div>
                                </li>
                                <li>
                                    <div className="name">Photoshop</div>
                                    <div className="progress">
                                        <div className="percentage" style={{ width: "85%" }} />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='icon1'>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResumeSmall
