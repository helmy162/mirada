import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import './nav.css';
import Popup from "../../popup/popup";
import tick from "../../props/tick.svg";
import Services from "../../services/services";

const Nav = (props) => { 
    const [IsPopupOpen, setIsPopupOpen] = useState(false);
    return (
            <div className="nav">
                <div className="leftnav">
                    <Link to="/dashboard" style={{textDecoration:'none'}}><div className={props.active==="Dashboard"?"nav-item active":"nav-item"}>Dashboard</div></Link>
                    <Link to="/report" style={{textDecoration:'none'}}><div className={props.active==="Report"?"nav-item active":"nav-item"}>Report</div></Link>
                    <Link to="/roomsetup" style={{textDecoration:'none'}}><div className={props.active==="Room"?"nav-item active":"nav-item"}>Room Setup</div></Link>
                </div>
                <div className="rightnav">
                    <button className="nav-item add-service" onClick={() => setIsPopupOpen(true)}>Add Service</button>
                    <button className="nav-item" style={{background: 'transparent', border: 'none'}}>Logout</button>
                </div>
            
              {IsPopupOpen && (
                <Popup
                  noclose= {false}
                  content={
                    <>
                      <Services nonav={true}></Services>
                    </>
                  }
                  handleClose={e => setIsPopupOpen(!IsPopupOpen)}
                />
              )}
            </div>
    );
  };
  export default Nav;
  