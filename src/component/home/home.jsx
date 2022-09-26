import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";
import { HiOutlineClock } from "react-icons/hi";
import "./home.css";
import logo from "../props/logo.svg";
import service from "../props/service.svg";
import clock from "../props/clock.svg";
import Header from "../header/header";

const Home = () => {
  // call useHistory for routing
  
  return (
    <>
      {/* <Header></Header> */}
      <div className="Wrapper login"> 
        <img src={logo} alt="" />
        <div className="welcome">
          Welcome to <span style={{color:'#814486'}}> Mirada Hotel</span>
          <br></br> Your room is 77
        </div>
        <Link to="/services" style={{backgroundColor: '#814486', borderRadius:'999px', width: '235px', height: '60px', border: 'none', marginBottom:'16px', color:'white', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center', textDecoration:'none'}}> 
        <img src={service} alt="" style={{marginRight:'6px'}}/>Request a service</Link>
        <Link to="/requests" style={{backgroundColor: 'transparent', borderRadius:'999px', width: '235px', height: '60px', border: '1px solid #814486', color: '#814486', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center', textDecoration:'none'}}>
        <HiOutlineClock style={{marginRight:'6px', fontSize:'18px'}}/> My Requests</Link>
      </div>
    </>
  );
};

export default Home;
