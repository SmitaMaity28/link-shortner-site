import React ,{useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Nav() {
  
  const [open,setopen]=useState("close")
  const handleopen=()=>{
    if(open==='close')
    {
      setopen('open')
    }
    else
    {
      setopen('close')
    }
  }
  return (
    <>
        <div className="container">
          <h1 className="title">Shortly</h1>
          <div className="list left">
            <p className="item">Feature</p>
            <p className="item">Pricing</p>
            <p className="item">Resource</p>
          </div>
          <div className="list right">
            <p className="item">Login</p>
            <p className="item signup">signup</p>
          </div>
          <FontAwesomeIcon icon={faBars} className="bar"  onClick={()=>{handleopen()}} />

          <div className={`drawer ${open}`} >
          <p className={`draw-item ${open}`}>Feature</p>
            <p className={`draw-item ${open}`}>Pricing</p>
            <p className={`draw-item ${open}`}>Resource</p>
            <hr />
            <p className={`draw-item ${open}`}>Login</p>
            <p className={`draw-item ${open} signup`}>Signup</p>
          </div>
        </div>
    </>
  );
}
export default Nav;
