import React, { useState, useRef } from 'react'
import Drawer from "react-bottom-drawer";
import Switch from "react-switch";


const TimePopup = (props) => {
  
  const [isChecked, setisChecked] = useState(false);
  
  return (
    <Drawer
    duration={250}
    hideScrollbars={true}
    onClose={props.onClose}
    isVisible={props.isVisible}
    className="drawer"
    >
      <span style={{marginBottom:'33px', fontFamily: 'Cairo', fontSize: '18px', color:'#666666'}}>Please select a time</span>
      <div className="timepicker">
          <input type="text" className="time" placeholder="01"/>
          :
          <input type="text" className="time" placeholder="00"/>
      </div>
      <Switch onChange={() => setisChecked(!isChecked)} checked={isChecked} borderRadius={8} height={45} width={104} offColor="#F2F2F2" onColor="#814486" offHandleColor='#814486' onHandleColor="#F2F2F2" checkedIcon='AM' uncheckedIcon='PM' checkedHandleIcon='PM' uncheckedHandleIcon='AM' handleDiameter={45}/>
      <textarea   placeholder="Add comment" rows="4" cols="50" style={{width:'90%', height:'82px',marginTop:'16px', background:'#F2F2F2', borderRadius:'16px', border:'none', padding:'16px', fontFamily:'Cairo', fontSize:'16px', marginBottom:'16px'}} />
      <button style={{backgroundColor: 'transparent', borderRadius:'999px', width: '235px', height: '60px', border: '1px solid #814486', color: '#814486', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
      Request service</button>
    </Drawer>
  );
};

 
export default TimePopup;