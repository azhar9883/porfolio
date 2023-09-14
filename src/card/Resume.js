import React from 'react'
import './resume.css'
import { ImHtmlFive2 } from 'react-icons/im'
const Resume = () => {
    return (
        <div>
            <div style={{ display: "flex" }}>

                <div style={{ flex: 4,marginLeft:"15px" }} className='service-item-resum card-resume'>

                    <div className="box-resumee effect1">


                        <div className="resume-items card-box">

                            <div className="resume-itemm">
                                <div className="name">Web Development</div>
                                <div className="date">
                                    2013-Present <span className='span1'>|</span> Facebook Inc.
                                </div>
                                <p>
                                
                                    Collaborate with creative and development teams on the execution of
                                    ideas.
                                </p>
                            </div>

                            <div className="resume-item">
                                <div className="name">Front-end Developer</div>
                                <div className="date">
                                    2011-2012 <span className='span1'>|</span> Google Inc.
                                </div>
                                <p>
                                    Monitored technical aspects of the front-end delivery for several
                                    projects.
                                </p>
                            </div>

                            <div className="resume-item">
                                <div className="name">Senior Developer</div>
                                <div className="date">
                                    2009-2010 <span className='span1'>|</span> Abc Inc.
                                </div>
                                <p>Optimize website performance using latest technology.</p>
                            </div>
                        </div>


                        <div className='icon1'>

                        </div>

                    </div>
                </div>
                <div style={{ flex: 4 }} className='service-item-resum card-resume'>
                    <div className="box-resumee effect1">
                        <div className="resume-items card-box">

                            <div className="resume-itemm">
                                <div className="name">Art University</div>
                                <div className="date">
                                    2006-2008 <span className='span1'>|</span> New York
                                </div>
                                <p>
                                    Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson,
                                    Missouri
                                </p>
                            </div>

                            <div className="resume-item">
                                <div className="name">Programming Course</div>
                                <div className="date">
                                    2005-2006 <span className='span1'>|</span> Paris
                                </div>
                                <p>
                                    Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson,
                                    Missouri
                                </p>
                            </div>

                            <div className="resume-item">
                                <div className="name">Web Design Course</div>
                                <div className="date">
                                    2004-2005 <span className='span1'>|</span> London
                                </div>
                                <p>
                                    Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript
                                </p>
                            </div>
                        </div>

                        <div className='icon1'>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
