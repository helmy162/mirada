import React, { useState, useRef } from 'react'
import Drawer from "react-bottom-drawer";
import Switch from "react-switch";
import dndicon from "../props/dndicon.svg";


const DnDPopup = (props) => {
  
  const [isChecked, setisChecked] = useState(true);
  
  return (
    <Drawer
    duration={250}
    hideScrollbars={true}
    onClose={props.onClose}
    isVisible={props.isVisible}
    className="drawer"
    >
      <span style={{marginBottom:'33px', fontFamily: 'Cairo', fontSize: '18px', color:'#666666'}}>«Do not disturb mode» is <span style={isChecked?{color:'#666666'}: {color:'#EB5757'}}>{isChecked? 'disabled' : 'active'}</span></span>
      <img src={dndicon} alt="" style={{marginBottom:'32px'}}/>
      <Switch onChange={() => setisChecked(!isChecked)} checked={isChecked} borderRadius={8} height={45} width={104} offColor="#F2F2F2" onColor="#F2F2F2" offHandleColor='#814486' onHandleColor="#814486" checkedIcon={<div style={{color:'#666666'}}>ON</div>} uncheckedIcon={<div style={{color:'#666666'}}>OFF</div>} checkedHandleIcon={<div style={{color:'white'}}>OFF</div>} uncheckedHandleIcon='ON' handleDiameter={45}/>
      <textarea   placeholder="Add comment" rows="4" cols="50" style={{width:'90%', height:'82px',marginTop:'16px', background:'#F2F2F2', borderRadius:'16px', border:'none', padding:'16px', fontFamily:'Cairo', fontSize:'16px', marginBottom:'16px'}} />
    </Drawer>
  );
};

 
export default DnDPopup;