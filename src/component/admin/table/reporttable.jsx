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

const ReportTable = (props) => { 
 
  return (
            <table className="dashboard2" style={{width:'80vw'}}>
                <tr style={{background:'#814486'}}>
                    <th>Date and Time request</th>
                    <th>Room No.</th>
                    <th>Service Type</th>
                    <th>Time of service </th>
                    <th>Comments </th>
                    <th>Completed time </th>
                    <th>Hotel Comments</th>
                </tr>
                {props.requests.map((request, index) => (
                            <tr>
                                <td>{request.date} {request.time}</td>
                                <td>{request.room}</td>
                                <td>{request.name}</td>
                                <td>{request.timeservice}</td>
                                <td>{request.details}</td>
                                <td>{request.completetime}</td>
                                <td>{request.hotelcomment}</td>
                            </tr>
                ))}
            </table>
  );
};

export default ReportTable;
