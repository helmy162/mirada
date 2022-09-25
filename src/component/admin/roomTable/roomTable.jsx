import React, { useState, useRef, useEffect } from "react";
import basket from "../../props/basket.svg";
import print from "../../props/print.svg";
import { Link } from "react-router-dom";
import './roomTable.css';


const RoomTable = (props) => {
    
 
  return (
            <div className="rooms " style={{width:'100%'}}>
                <div className="btn-room">
                    <Link to="/newroom"className="btn-div" style={{textDecoration:'none'}}>
                        <button style={{background:'#814486'}}>
                            <div style={{color:'#fff'}}>Create New Room</div>
                        </button>
                    </Link>
                </div>
                {props.rooms.slice(props.start, props.end).map((room, index) => (
                    <div className="btn-room">
                        <div className="btn-div">
                            <button >
                                <div style={{color:'#666'}}>{room.room}</div>
                                <div style={{color:'#111'}}>{room.name}</div>
                            </button>
                        </div>
                        <div className="btn-div2">
                            <button >
                                <img src={basket} alt="" />
                                <div style={{color:'#fff'}}> Delete</div>
                            </button>
                            <button>
                                <img src={print} alt="" />
                                <div style={{color:'#fff'}}> Print QR</div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
  );
};

export default RoomTable;
