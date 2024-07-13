import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

function Navbar() {
    const navigate=useNavigate();//useNavigate is implicity for react-router-dom
    const handleClick=()=>{
        navigate("/");
    }
  return (
    <>
    <div>This is a navbar</div>
    <li>
        {/* <Link to="/">Home</Link> */}
        <button onClick={handleClick}>Home</button>
    </li>
    <li>
        <Link to="/about">About</Link>
    </li>
    </>
  )
}

export default Navbar