import React, { useState, useRef, useEffect } from "react";
import Drawer from "react-bottom-drawer";
import tick from "../props/tick.svg";
import x from "../props/x.svg";
import Success from "../success/success";
import Error from "../error/error";
import './requests.css'


const Requests = () => {
    const [requests, setRequests] = useState([
        {
            date: '14 Jan',
            name: 'Cleaning service',
            status: 'In-process',
            time: '10:15 AM',
            details: ''
        },
        {
            date: '13 Jan',
            name: 'Room Service Request',
            status: 'In-process',
            time: '10:00 AM',
            details: ''
        },
        {
            date: '14 Jan',
            name: 'Cleaning service',
            status: 'Complete',
            time: '10:00 AM',
            details: ''
        },
        {
            date: '8 Jan',
            name: 'Do not disturb',
            status: 'In-process',
            time: '10:00 AM',
            details: ''
        },
    ]);
    const [isVisible, setIsVisible] = useState([false, false, false, false, false, false, false, false]);
    const [isRemoved, setisRemoved] = useState([false, false, false, false, false, false, false, false])
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
      const onClick =(index)=> e => {
        let newArr = [...isVisible];
        newArr[index] = false;
        setIsVisible(newArr);
        let newArr2 = [...isRemoved];
        newArr2[index] = true;
        setisRemoved(newArr2);
      }
      const onClose = index => e => {
        let newArr = [...isRemoved];
        newArr[index] = false;
        setisRemoved(newArr);
      }

  
  return (
    <div className="Wrapper Wrapper-table">
        <span style={{marginBottom:'33px', fontFamily: 'Cairo', fontSize: '18px', color:'#666666'}}>Here is your latest requests</span>
        <div className="table">
            <table style={{width:'100%'}}>
                <tr>
                    <th>Date</th>
                    <th>Request</th>
                    <th>Status</th>
                </tr>
                {requests.map((request, index) => (
                            <tr>
                                <td><button onClick={openDrawer(index)}>{request.date}</button></td>
                                <td><button onClick={openDrawer(index)}>{request.name}</button></td>
                                <td className={request.status==='Complete'? 'completed': ''}><button onClick={openDrawer(index)}>{request.status}</button></td>
                                <Drawer
                                duration={250}
                                hideScrollbars={true}
                                onClose={closeDrawer(index)}
                                isVisible={isVisible[index]}
                                className="table-drawer"
                                >  
                                    <div className="closex"> <button onClick={closeDrawer(index)} style={{background:'transparent', border:'none'}}><img src={x} alt="x" /></button></div>
                                    <div><strong>Date:</strong> {request.date}, {request.time}</div>
                                    <div><strong>Service:</strong> {request.name}</div>
                                    <div className={request.status==='Complete'? 'completed': ''} style={{color:'#D5A62C'}}><strong style={{color:'Black'}}>Status:</strong> {request.status}</div>
                                    <div style={{color:'#666666', marginTop:'32px', marginBottom:'64px'}}><strong style={{color:'Black'}}>Details:</strong> <br/> {request.details? request.details: 'Here can be additional information which give some clarification of situation.'}</div>
                                    <div style={{width:'100%', display:'flex', justifyContent:'center', marginLeft:'-11px'}}>
                                    <button onClick={onClick(index)} style={{backgroundColor: 'transparent', borderRadius:'999px', width: '235px', height: '60px', border: '1px solid #814486', color: '#814486', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                                        Remove Request
                                    </button>
                                    </div>
                                </Drawer>
                                <Drawer
                                duration={250}
                                hideScrollbars={true}
                                onClose={onClose(index)}
                                isVisible={isRemoved[index]}
                                className="table-drawer"
                                >
                                    <img src={tick} alt="tick" className="tick"/>
                                    <span style={{marginTop:'32px', fontFamily: 'Cairo', fontSize: '18px', color:'#666666', padding:'0px 39px', textAlign:'center'}}>Your request was successfully removed.</span>
                                </Drawer>
                            </tr>
                ))}
            </table>
        </div>   
    </div>
  );
};

export default Requests;
