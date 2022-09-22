import React from "react";
import './popup.css';
import close from '../props/close.png';
 
const Popup = (props: { noclose:Boolean ; handleClose: React.MouseEventHandler<HTMLSpanElement> | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose} style={props.noclose? {visibility:'hidden'}: {visibility:'visible'}}> <img src={close} alt="x" className="popup-x"/></span>
        {props.content}
      </div>
    </div>
  );
};

Popup.defaultProps = {
  noclose: false
};
 
export default Popup;