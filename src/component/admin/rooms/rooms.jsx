import React, { useLayoutEffect, useState } from 'react';
import { stockData } from "./data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import roomTable from "../roomTable/roomTable";
import Nav from "../Nav/nav";
import RoomTable from '../roomTable/roomTable';

const Rooms = () => {
    const x = 25;
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    const [rooms, setRooms] = useState(stockData);
    const [isVisible, setIsVisible] = useState([false, false, false, false, false, false, false, false]);
    const openDrawer = index => e => {
        let newArr = [...isVisible];
        newArr[index] = true;
        setIsVisible(newArr);
      }
  return (
    <>
      
        <div className="container">
        <Nav active="Room"></Nav> 
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      > 
        <SwiperSlide>
            <RoomTable rooms={rooms} openDrawer={openDrawer} start={0} end={x-1}></RoomTable>
        </SwiperSlide>
        <SwiperSlide>
            <RoomTable rooms={rooms} openDrawer={openDrawer} start={x} end={2*x-1}></RoomTable>
        </SwiperSlide>
        <SwiperSlide>
            <RoomTable rooms={rooms} openDrawer={openDrawer} start={2*x} end={3*x-1}></RoomTable>
        </SwiperSlide>
        <SwiperSlide>
            <RoomTable rooms={rooms} openDrawer={openDrawer} start={3*x} end={4*x-1}></RoomTable>
        </SwiperSlide>
        <SwiperSlide>
            <RoomTable rooms={rooms} openDrawer={openDrawer} start={4*x} end={5*x-1}></RoomTable>
        </SwiperSlide>
        <SwiperSlide>
            <RoomTable rooms={rooms} openDrawer={openDrawer} start={5*x} end={6*x-1}></RoomTable>
        </SwiperSlide>
        </Swiper>
        </div>
    </>
  );
};

export default Rooms;
