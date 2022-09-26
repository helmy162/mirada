import React, { useState, useRef } from 'react'
import Drawer from "react-bottom-drawer";
import Switch from "react-switch";
import Success from '../success/success';
import Error from '../error/error';
import './popup-time.css'

const TimePopup = (props) => {
  
  const [isChecked, setisChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    !isVisible?
    <Drawer
    duration={250}
    hideScrollbars={true}
    onClose={props.onClose}
    isVisible={props.isVisible}
    className="drawer"
    >
      <span style={{marginBottom:'33px', fontFamily: 'Cairo', fontSize: '18px', color:'#666666'}}>Please select a time</span>
      <div className="timepicker">
          <input type="time" className="time" placeholder=""/>
          {/* : */}
          {/* <input type="text" className="time" placeholder="00"/> */}
      </div>
      <Switch onChange={() => setisChecked(!isChecked)} checked={isChecked} borderRadius={8} height={45} width={104} offColor="#F2F2F2" onColor="#F2F2F2" offHandleColor='#814486' onHandleColor="#814486" checkedIcon={<div style={{color:'#666666'}}>AM</div>} uncheckedIcon={<div style={{color:'#666666'}}>PM</div>} checkedHandleIcon={<div style={{color:'white'}}>PM</div>} uncheckedHandleIcon='AM' handleDiameter={45}/>
      <textarea   placeholder="Add comment" rows="4" cols="50" style={{width:'90%', height:'82px',marginTop:'16px', background:'#F2F2F2', borderRadius:'16px', border:'none', padding:'16px', fontFamily:'Cairo', fontSize:'16px', marginBottom:'16px'}} />
      <button onClick={()=> setIsVisible(true)} style={{backgroundColor: 'transparent', borderRadius:'999px', width: '235px', height: '60px', border: '1px solid #814486', color: '#814486', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
      Request service</button>
    </Drawer>
    :
    <Success isVisible={isVisible} onClose={() => {setIsVisible(false); props.onClose()}}> </Success>
  );
};

 
export default TimePopup;