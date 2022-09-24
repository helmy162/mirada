import React, { useLayoutEffect, useState } from 'react';
import './dashboard.css';
import { stockData } from "./data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Table from "../table/table";
import Nav from "../Nav/nav";

const Dashboard = () => {
    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
      }
    const y = useWindowSize()[0];
    const x = y>=1289? 15: y>891? 10: 5;
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    const [requests, setRequests] = useState(stockData);
    const [isVisible, setIsVisible] = useState([false, false, false, false, false, false, false, false]);
    const openDrawer = index => e => {
        let newArr = [...isVisible];
        newArr[index] = true;
        setIsVisible(newArr);
      }
  return (
    <>
      
        <div className="container">
        <Nav active="Dashboard"></Nav> 
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      > 
        <SwiperSlide>
            <Table requests={requests} openDrawer={openDrawer} start={0} end={x-1}></Table>
        </SwiperSlide>
        <SwiperSlide>
            <Table requests={requests} openDrawer={openDrawer} start={x} end={2*x-1}></Table>
        </SwiperSlide>
        <SwiperSlide>
            <Table requests={requests} openDrawer={openDrawer} start={2*x} end={3*x-1}></Table>
        </SwiperSlide>
        <SwiperSlide>
            <Table requests={requests} openDrawer={openDrawer} start={3*x} end={4*x-1}></Table>
        </SwiperSlide>
        <SwiperSlide>
            <Table requests={requests} openDrawer={openDrawer} start={4*x} end={5*x-1}></Table>
        </SwiperSlide>
        <SwiperSlide>
            <Table requests={requests} openDrawer={openDrawer} start={5*x} end={6*x-1}></Table>
        </SwiperSlide>
        </Swiper>
        </div>
    </>
  );
};

export default Dashboard;
