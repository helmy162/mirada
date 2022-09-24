import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";
import { HiOutlineClock } from "react-icons/hi";
import logo from "../../props/logo.svg";
import service from "../../props/service.svg";
import clock from "../../props/clock.svg";
import Header from "../../header/header";
import tick from "../../props/tick.svg";
import x from "../../props/x.svg";
import Drawer from "react-bottom-drawer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Table = (props) => { 
 
  return (
            <table className="dashboard" style={{width:'80vw'}}>
                <tr style={{background:'#814486'}}>
                    <th>Date and Time request</th>
                    <th>Room No.</th>
                    <th>Service Type</th>
                    <th>Time of service </th>
                    <th>Comments </th>
                    <th>Hotel Action</th>
                </tr>
                {props.requests.slice(props.start, props.end).map((request, index) => (
                            <tr>
                                <td>{request.date} {request.time}</td>
                                <td>{request.room}</td>
                                <td>{request.name}</td>
                                <td>{request.timeservice}</td>
                                <td>{request.details}</td>
                                <td><button onClick={props.openDrawer(index)}>{request.status}</button></td>
                            </tr>
                ))}
            </table>
  );
};

export default Table;