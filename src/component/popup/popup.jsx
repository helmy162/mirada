import React from "react";
import './popup.css';
import close from '../props/x.svg';
 
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose} style={props.noclose? {display:'none'}: {display:''}}> <img src={close} alt="x" className="popup-x"/></span>
        {props.content}
      </div>
    </div>
  );
};

Popup.defaultProps = {
  noclose: false
};
 
export default Popup;