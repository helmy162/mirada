import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import './nav.css';
import Popup from "../../popup/popup";
import tick from "../../props/tick.svg";
import Services from "../../services/services";
import styled from 'styled-components';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { MdOutlineClose} from 'react-icons/md';

const Menu = styled.div`
  border-bottom: 2px solid #72BFD0;
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: MediumPurple;
    &:hover {
      color: white;
    }
  }
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

const Nav = (props) => { 
    const [IsPopupOpen, setIsPopupOpen] = useState(false);
    return (
      <div style={{width:'100%'}}>
        <ResponsiveMenu
          menuOpenButton={<FaBars size={30} color="#72BFD0" />}
          menuCloseButton={<MdOutlineClose size={30} color="#72BFD0" />}
          changeMenuOn="850px"
          largeMenuClassName="nav"
          smallMenuClassName="nav2"
          menu={
            <Menu>
              <ul>
                <li>
                  <Link to="/dashboard">Dashboard Page</Link>
                </li>
                <li>
                  <Link to="/report">Report Page</Link>
                </li>
                <li>
                <Link to="/roomsetup">Room Setup Page</Link>
                </li>
                <li>
                  <button onClick={() => setIsPopupOpen(true)} > Add Service</button>
                </li>
                <li>
                  <a href="">Logout</a>
                </li>
              </ul>
            </Menu>
          }
        />
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
  