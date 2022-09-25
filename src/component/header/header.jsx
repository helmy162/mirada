import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import back from "../props/back.svg";
import world from "../props/world.svg";
import Success from '../success/success';
import './header.css';


const Header = () => {
    const history = useHistory();
  return (
    <div className='header'>
        <div className='header-col'>
           <button onClick={history.goBack} style={{background:'transparent', border:'none'}}><img className='header-img' src={back} alt="" /> back</button>
        </div>
        <div className='header-col' style={{textAlign:'right'}}>
        <   button style={{background:'transparent', border:'none', textAlign:'right'}}><img className='header-img' src={world} alt="" />Switch to عربية</button>
        </div>
    </div>
  );
};

 
export default Header;