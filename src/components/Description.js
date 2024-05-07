import React from 'react'
import brand from '../assets/icon-brand-recognition.png'
import detailed from '../assets/icon-detailed-records.svg'
import custom from '../assets/icon-fully-customizable.svg'
function Description() {
  return (
    <div className="description-container">
      <div className="desc-head">
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
      </div>

      <div className="desc-gridbox">
        <div className="box">
            <img src={brand} alt="" />
             <h1>Brand Recognition</h1>
             <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
             <hr className="blue" /> 
        </div>
        
        <div className="box">
            <img src={detailed} alt="" />
            <h1>Detailed Records</h1>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div className="box">
            <img src={custom} alt="" />
            <h1>Fully Customizable</h1>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
      </div>
    </div>
  )
}

export default Description
