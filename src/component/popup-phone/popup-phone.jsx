import React, { useState, useRef } from 'react'
import Drawer from "react-bottom-drawer";
import checkout from "../props/checkout.svg";
import invoice from "../props/invoice.svg";
import Success from '../success/success';

const PhonePopup = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [phone, setPhone] = useState('');

  return (
    !isVisible?
    <Drawer
    duration={250}
    hideScrollbars={true}
    onClose={props.onClose}
    isVisible={props.isVisible}
    className="drawer"
    >
      <span style={{marginBottom:'33px', fontFamily: 'Cairo', fontSize: '18px', color:'#666666'}}>Please enter your {props.text} below</span>
      <textarea onChange={(e)=>setPhone(e.target.value)} value={phone}  placeholder="Your full phone number here" rows="4" cols="50" style={{width:'90%', height:'216px',marginTop:'16px', background:'#F2F2F2', borderRadius:'16px', border:'none', padding:'16px', fontFamily:'Cairo', fontSize:'16px', marginBottom:'16px'}} />
      <button disabled={phone.length<1} onClick={() => setIsVisible(true)} className="btn-lined" style={{backgroundColor: 'transparent', borderRadius:'999px', width: '235px', height: '60px', border: '1px solid #814486', color: '#814486', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center', marginTop:'10px'}}>
      Send</button> 
    </Drawer>
    :
    <Success isVisible={isVisible} onClose={() => {setIsVisible(false); props.onClose()}}> </Success>
  );
};

 
export default PhonePopup;