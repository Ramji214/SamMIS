import React, { useState } from 'react';
import  "../styles/login.css";
import user_icon from "../assets/person.png"
import email_icon from "../assets/email.png"
import password_icon from "../assets/password.png"

const Login = () => {
    const[action,setAction]=useState("Sign up");
    function validateForm() {
        setAction(!action)
    
        
        var emailInput = document.getElementById("email").value;
      
        var passInput = document.getElementById("password").value;
      
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      
      
      
        if (!emailInput.match(emailPattern)) {
          
          alert("Please enter a valid email address.");
          return false;
        }
        if(passInput.length<8){
          alert('Password must be atleast 8 characters long');
          return false;
      }
      
        
      
        return true; // Allow form submission
      }
  return (
    <div className="container">
    <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
        <img src={user_icon} alt=""/>
        <input type="text" placeholder='Name'/>
    </div>}
       
    <div className="input">
        <img src={email_icon} alt=""/>
        <input type="email" placeholder='Email Id' id="email"/>
    </div>  
    <div className="input">
        <img src={password_icon} alt=""/>
        <input type="password" placeholder='Password' id="password"/>
    </div> 
    </div>
    {action==="Sign Up"?<div></div>:<div className="forgot_password"> Lost password?<span> click here</span></div>}
   
    <div className="submit_container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign UP"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        <div className="button"><button onClick={()=>{validateForm()}}>Submit</button></div>
    </div>
    </div>
  )
}

export default Login
