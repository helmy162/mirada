import React, { useState, useRef, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
import { HiOutlineClock } from "react-icons/hi";
import "./signin.css";
import logo from "../props/logo.svg";
import service from "../props/service.svg";
import clock from "../props/clock.svg";

const Signin = () => {
  // call useHistory for routing
  
  return (
    <div className="Wrapper">  
      <img src={logo} alt="" />
      <div className="welcome">
        Welcome to <span style={{color:'#814486'}}> Mirada Hotel</span>
        <br></br> Your room is 77
      </div>
      <button style={{backgroundColor: '#814486', borderRadius:'999px', width: '235px', height: '60px', border: 'none', marginBottom:'16px', color:'white', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center'}}> 
      <img src={service} alt="" style={{marginRight:'6px'}}/>Request a service</button>
      <button style={{backgroundColor: 'transparent', borderRadius:'999px', width: '235px', height: '60px', border: '1px solid #814486', color: '#814486', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
      <HiOutlineClock style={{marginRight:'6px', fontSize:'18px'}}/> My Requests</button>
    </div>
  );
};

export default Signin;
