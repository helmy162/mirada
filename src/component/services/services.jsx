import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./services.css";
import cleaning from "../props/cleaning.svg";
import details from "../props/details.svg";
import dnd from "../props/dnd.svg";
import feedback from "../props/feedback.svg";
import laundry from "../props/laundry.svg";
import roomservice from "../props/roomservice.svg";
import wakeup from "../props/wakeup.svg";
import wifi from "../props/wifi.svg";
import Drawer from "react-bottom-drawer";
import Switch from "react-switch";
import TimePopup from "../popup-time/popup-time";
import FeedbackPopup from "../popup-feedback/popup-feedback";
import PhonePopup from "../popup-phone/popup-phone";

const Services = () => {
  // call useHistory for routing
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Cleaning, Makeup rooms",
      img: cleaning,
      opened: false,
      status: "inactive",
    },
    {
      id: 2,
      name: "Do not disturb",
      img: dnd,
      opened: false,
      status: "inactive",
    },
    {
      id: 3,
      name: "Room Service Request",
      img: roomservice,
      opened: false,
      status: "inactive",
    },
    {
      id: 4,
      name: "Wake Up service",
      img: wakeup,
      opened: false,
      status: "inactive",
    },
    {
      id: 5,
      name: "Request for Reservation details",
      img: details,
      opened: false,
      status: "inactive",
    },
    {
      id: 6,
      name: "Feedback, Complains",
      img: feedback,
      opened: false,
      status: "inactive",
    },
    {
      id: 7,
      name: "Laundry Serivce",
      img: laundry,
      opened: false,
      status: "inactive",
    },
    {
      id: 8,
      name: "Wi-Fi Connection",
      img: wifi,
      opened: false,
      status: "inactive",
    },
  ]);
  const [isVisible, setIsVisible] = useState([false, false, false, false, false, false, false, false]);
  
  const [firstPopup, setFirstPopup] = useState(-1);
  const [secondPopup, setSecondPopup] = useState(-1);

  const openDrawer = index => e => {
    let newArr = [...isVisible];
    newArr[index] = true;
    setIsVisible(newArr);
    if(services[index].status === "inactive"){
        setFirstPopup(index);
        setSecondPopup(-1);
    }
    else{
        setFirstPopup(-1);
        setSecondPopup(index);
    }
  }

  const closeDrawer = index => e => {
    console.log(index);
    let newArr = [...isVisible];
    newArr[index] = false;
    setIsVisible(newArr);
  }
  
  return (
    <div className="Wrapper">
        <span style={{marginBottom:'33px', fontFamily: 'Cairo', fontSize: '18px', color:'#666666'}}>Please Make your request</span>
        <div className="services">
            {services.map((service, index) => (
            <button className="service" onClick={openDrawer(index)}>
                <img src={service.img} alt="" />
                <div className="service-name">{service.name}</div>
            </button>
            ))}
        </div>
        
        { firstPopup >= 0 ?
            <PhonePopup onClose={closeDrawer(firstPopup)}
            isVisible={isVisible[firstPopup]}> </PhonePopup>
            :
            null
        }

        { secondPopup >= 0 ?
          <Drawer
          duration={250}
          hideScrollbars={true}
          onClose={closeDrawer(secondPopup)}
          isVisible={isVisible[secondPopup]}
          className="drawer"
          >
            <div className="drawer0">
            The service has already been requested, you can check the status of the request on <Link to='/home' style={{textDecoration:'none'}}> my request page </Link>
            </div>
          </Drawer>
        :
        null
        }
        
    </div>
  );
};

export default Services;
