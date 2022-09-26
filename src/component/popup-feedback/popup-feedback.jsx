import React, { useState, useRef } from 'react'
import Drawer from "react-bottom-drawer";
import checkout from "../props/checkout.svg";
import invoice from "../props/invoice.svg";
import customer from "../props/customer.svg";
import Success from '../success/success';
import MessagePopup from '../popup-message/popup-message';
import {RiCustomerService2Fill} from 'react-icons/ri'

const FeedbackPopup = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  return (
    !isVisible?
      <Drawer
    duration={250}
    hideScrollbars={true}
    onClose={props.onClose}
    isVisible={props.isVisible}
    className="drawer"
    >
      <button onClick={() => {setIsVisible(true); setText('suggestion')}} style={{backgroundColor: 'transparent', borderRadius:'999px', width: '235px', height: '60px', border: '1px solid #814486', color: '#814486', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
      <img src={invoice} alt="" style={{marginRight:'5px'}}/> Suggestions</button>
      <button onClick={() => {setIsVisible(true); setText('complaint')}} style={{backgroundColor: 'transparent', borderRadius:'999px', width: '235px', height: '60px', border: '1px solid #814486', color: '#814486', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center', marginTop:'10px'}}>
      <img src={checkout} alt="" style={{marginRight:'5px'}}/> Complain</button>
      <a href='https://wa.me/923367713621' style={{textDecoration:'none', backgroundColor: 'transparent', borderRadius:'999px', width: '235px', height: '60px', border: '1px solid #814486', color: '#814486', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center', marginTop:'10px'}}>
      <RiCustomerService2Fill style={{marginRight:'5px'}} /> Customer Services</a> 
    </Drawer>
    :
    <MessagePopup text={text} isVisible={isVisible} onClose={() => {setIsVisible(false); props.onClose()}}> </MessagePopup>
  );
};

 
export default FeedbackPopup;