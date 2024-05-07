import React from 'react'
import headImg from '../assets/illustration-working.svg'
function Head() {
  return (
    <div className="head-container">
      <div className="head-body">
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insigts on how your links are performing.</p>
        <button class="btn ">Get Started</button>
      </div>
      <div className="head-img">
        <img src={headImg} alt="" />
      </div>
    </div>
  )
}

export default Head
