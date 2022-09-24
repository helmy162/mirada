import React, { useState, useRef, useEffect } from "react";
import Drawer from "react-bottom-drawer";
import tick from "../props/tick.svg";
import error from "../props/error.svg";
import x from "../props/x.svg";


const Success = (props) => {

  return (
    <Drawer
    duration={250}
    hideScrollbars={true}
    onClose={props.onClose}
    isVisible={props.isVisible}
    className="table-drawer2"
    >
        <div className="closex"> <button onClick={props.onClose} style={{background:'transparent', border:'none'}}><img src={x} alt="x" /></button></div>
        <img src={tick} alt="tick" className="tick"/>
        <span style={{marginTop:'32px', fontFamily: 'Cairo', fontSize: '18px', color:'#666666', padding:'0px 39px', textAlign:'center'}}>Thanks for your request.
            {props.message}
        </span>
    </Drawer>
  );
};

export default Success;
