import React from 'react'
import ResumeCard from '../component/ResumeCard'
import ResumImage from '../component/ResumImage'
const Resume = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "rgb(31,32,35)"}}>
      <div style={{ flex: 6, marginLeft: "34px", }}>
        <ResumeCard />
      </div>

      <div style={{ flex: 6 }}>
        <ResumImage />
      </div>
    </div>
  )
}

export default Resume
