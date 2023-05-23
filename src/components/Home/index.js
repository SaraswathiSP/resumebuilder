import React from 'react'
import './index.css';

import resume from '../../../src/resume.png'
import Templates from '../Templates'

const Home = () => {
  return (
    <>
    <div className='header-container'>
      <div className="heading-section">
        <p className='heading'>A <span>Resume</span> that stands out!</p>
        <p className='heading'>Make your own resume. <span>It's free</span></p>
      </div>
        <div className='img-section'>
          <img className='resume-image' src={resume} alt="resume" />
      </div>
      
    </div>
    <Templates/>
    </>
    
  )
}

export default Home

