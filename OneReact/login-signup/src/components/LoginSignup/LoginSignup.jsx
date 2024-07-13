import React ,{useState} from 'react'
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import person_icon from '../Assets/person.png';

function LoginSignup() {
    const[action,setAction]=useState("Sign Up");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={person_icon} alt=""/> &nbsp;
                <input type="text" placeholder='name'/>
            </div>
            <div className="input">
                <img src={email_icon} alt=""/>&nbsp;
                <input type="email" placeholder='email id'/>
            </div>
            <div className="input">
                <img src={password_icon} alt=""/> &nbsp;
                <input type="password" placeholder='password'/>
            </div>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click here</span></div>
        <div className="submit-container">
            <div className={action==="Login"? "submit gray":"submit"}>Sign Up</div>
            <div className={action==="Sign Up"? "submit gray":"submit"}>Login</div>
        </div>
        
    </div>
  )
}

export default LoginSignup