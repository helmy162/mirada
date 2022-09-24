import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './roomTable.css';
import bootstrap from 'bootstrap' 

const RoomTable = (props) => { 
 
  return (
            <div className="rooms row" style={{width:'100%'}}>
                <button className="btn-room col-2" style={{background:'#814486'}}>
                    <div style={{color:'#fff', fontSize:'18px'}}>Create New Room</div>
                </button>
                {props.rooms.slice(props.start, props.end).map((room, index) => (
                            <button className="btn-room col-2">
                                <div style={{color:'#666', fontSize:'26px'}}>{room.room}</div>
                                <div style={{color:'#111', fontSize:'16px'}}>{room.name}</div>
                            </button>
                ))}
            </div>
  );
};

export default RoomTable;
