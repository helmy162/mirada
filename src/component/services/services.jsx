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
import AM from "../props/AM.svg";
import PM from "../props/PM.svg";
import Drawer from "react-bottom-drawer";
import Switch from "react-switch";


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
  const [isChecked, setisChecked] = useState(false);

  const openDrawer = index => e => {
    let newArr = [...isVisible];
    newArr[index] = true;
    setIsVisible(newArr);
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
        {/* <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer(0)}
        isVisible={isVisible[0]}
        className="drawer"
        >
            <div className="drawer0">
            The service has already been requested, you can check the status of the request on <Link to='/home' style={{textDecoration:'none'}}> my request page </Link>
            </div>
        </Drawer> */}
        <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer(0)}
        isVisible={isVisible[0]}
        className="drawer"
        >
            <span style={{marginBottom:'33px', fontFamily: 'Cairo', fontSize: '18px', color:'#666666'}}>Please select a time</span>
            <div className="timepicker">
                <input type="text" className="time" placeholder="1"/>
                :
                <input type="text" className="time" placeholder="00"/>
            </div>
            <Switch onChange={() => setisChecked(!isChecked)} checked={isChecked} borderRadius={8} height={45} width={104} offColor="#F2F2F2" onColor="#814486" offHandleColor='#814486' onHandleColor="#F2F2F2" checkedIcon='AM' uncheckedIcon='PM' checkedHandleIcon='PM' uncheckedHandleIcon='AM' handleDiameter={45}/>
            <textarea   placeholder="Add comment" rows="4" cols="50" style={{width:'90%', height:'82px',marginTop:'16px', background:'#F2F2F2', borderRadius:'16px', border:'none', padding:'16px', fontFamily:'Cairo', fontSize:'16px', marginBottom:'16px'}} />
            <button style={{backgroundColor: 'transparent', borderRadius:'999px', width: '235px', height: '60px', border: '1px solid #814486', color: '#814486', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
             Request service</button>
        </Drawer>   
    </div>
  );
};

export default Services;
