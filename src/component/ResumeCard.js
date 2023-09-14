import React from 'react'
import './resumecard.css';
import TableCard from '../card/TableCard';
import Resume from '../card/Resume';
import ResumeSmall from '../card/ResumeSmall';
const ResumdCard = () => {
    return (
        <div className='card_detail scrolll' style={{ overflowX: "hidden" }} >
            <div>
                <div>
                    <div className='title-bg'>
                        Resume
                    </div>
                    <div className='card-ex'>
                        <span className='service'>My</span>
                        <span style={{color:"none"}}>  Experience </span>
                    </div>
                </div>
                <div>
                    <div className='title-n'>
                        Resume
                    </div>
                    <div className='card-m'>
                        <span className='service'>My</span>
                        Education
                    </div>
                </div>

            </div>

            <div>
                <div style={{ position: "relative", top: "70px" }}>

                    <Resume />
                    <ResumeSmall />



                </div>
            </div>
        </div>
    )
}

export default ResumdCard
