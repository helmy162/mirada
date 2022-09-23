import React, { useState, useRef } from 'react'
import Drawer from "react-bottom-drawer";


const Popup = (props: {content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const onClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);
  return (
    <div className="popup-box">
      <Drawer isVisible={isVisible} onClose={onClose}>
        {props.content}
      </Drawer>
    </div>
  );
};

Popup.defaultProps = {
  noclose: false
};
 
export default Popup;