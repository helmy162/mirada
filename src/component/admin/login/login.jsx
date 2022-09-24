import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";
import { HiOutlineClock } from "react-icons/hi";
import logo from "../../props/logo.svg";
import service from "../../props/service.svg";
import clock from "../../props/clock.svg";
import Header from "../../header/header";
import './login.css';

const Login = () => {  
  return (
    <>
      <Header></Header>
      <div className="Wrapper"> 
        <img src={logo} alt="" style={{marginBottom:'90px'}}/>
                                    {/* Uncomment if there is invalid input */}
        {/* <span style={{marginBottom:'40px', color:'#EB5757', marginTop:'-20px', fontSize:'18px'}}>Login or password is incorrect</span> */}
        <form action="">
            <div className="form-group">
                <label htmlFor="username" className="label">Login</label>
                <input type="text" name="username" id="username" className="form-input"  />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" name="password" id="password" className="form-input" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn-login" >Login</button>
            </div>
            <div className="forgot">
                <Link style={{textDecoration:'none'}}> Forgot your password? </Link>
            </div>
        </form>
      </div>
    </>
  );
};

export default Login;
