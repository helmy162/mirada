import React, { useState, useRef, useEffect } from "react";
import Drawer from "react-bottom-drawer";
import tick from "../props/tick.svg";
import error from "../props/error.svg";
import x from "../props/x.svg";
import back from "../props/back.svg";
import { useHistory } from 'react-router-dom'


const Error = (props) => {
  const history = useHistory();

  return (
    
    <Drawer
    duration={250}
    hideScrollbars={true}
    onClose={props.onClose}
    isVisible={props.isVisible}
    className="error-drawer"
    >
        <div className="closex"> <button onClick={props.onClose} style={{background:'transparent', border:'none'}}><img src={x} alt="x" /></button></div>
        <img src={error} alt="error" className="tick"/>
        <span style={{marginTop:'32px', marginBottom:'34px' ,fontFamily: 'Cairo', fontSize: '18px', color:'#666666', padding:'0px 39px', textAlign:'center'}}>
          Failed to book service request on specific time, please try another time
        </span>
        <button onClick={history.goBack} style={{background:'transparent', width:'100%', border:'none', color:'#814486', fontSize:'16px', display:'flex', justifyContent:'center', gap:'4px'}}><img src={back} alt="back"/>back</button>
    </Drawer>
  );
};

export default Error;
