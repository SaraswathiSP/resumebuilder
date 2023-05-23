import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Templates = () => {
  return (
    <div className='template-container'>
        <h1>Select Your Template</h1>
        <div className='templates'>
            <Link to="/resume1">
            <img className='template-image' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1684321988/WhatsApp_Image_2023-05-17_at_3.30.32_PM_boena1.jpg" alt="template"/>
            </Link>
        <Link to="/resume2">
            <img className='template-image' src="https://res.cloudinary.com/dg0telgxq/image/upload/v1683350731/WhatsApp_Image_2023-05-06_at_10.54.08_AM_rs9dnw.jpg" alt="template"/>
        </Link>
        <Link to="/resume3">
            <img className='template-image'  src="https://res.cloudinary.com/dg0telgxq/image/upload/v1683350551/WhatsApp_Image_2023-05-06_at_10.34.24_AM_mebjkc.jpg" alt="template"/>
        </Link>
        <Link to="/resume4">
            <img className='template-image'  src="https://res.cloudinary.com/dg0telgxq/image/upload/v1683350551/WhatsApp_Image_2023-05-06_at_10.34.27_AM_ternbo.jpg" alt="template"/>
        </Link>
            
        </div>
    </div>
  )
}

export default Templates