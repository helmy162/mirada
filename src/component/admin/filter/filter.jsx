import React, { useLayoutEffect, useState } from 'react';
import './filter.css';

const Filter = () => {

    function filterData(filtered){
        var div1 = document.createElement("div");
        div1.innerHTML= filtered;
        div1.className = "filtered";
        var btn1 = document.createElement("button");
        btn1.innerHTML = "X";
        btn1.className = "filtered-btn";
        div1.appendChild(btn1);
        btn1.onclick = function(){
            div1.remove();
        }
        document.getElementById("filter").appendChild(div1);
    }
    function filterData2(filtered){
        var div1 = document.createElement("div");
        div1.innerHTML= filtered;
        div1.className = "filtered";
        var btn1 = document.createElement("button");
        btn1.innerHTML = "X";
        btn1.className = "filtered-btn";
        div1.appendChild(btn1);
        btn1.onclick = function(){
            div1.remove();
        }
        document.getElementById("filter2").appendChild(div1);
    }

  return (
    <>
        <div className='filter' id='filter'>
            <select className="filterfield" name="" id="" style={{}} onChange={(e) => filterData(e.target.value)}>
                <option value="Select a service" selected  disabled>Select a service</option>
                <option value="Cleaning service">Cleaning service</option>
                <option value="DND">Do not Disturb</option>
                <option value="Room Service">Room Service</option>
                <option value="Wake up" >Wake up</option>
                <option value="Reservation Details" >Reservation Details</option>
                <option value="Laundry Service">Laundry Service</option>
            </select>
        </div>
        <div className='filter' id='filter2'>
            <select className="filterfield" name="" id="" style={{}} onChange={(e) => filterData2(e.target.value)}>
                <option value="Select a status" selected  disabled>Select a status</option>
                <option value="Pending">Pending</option>
                <option value="In-Process" >In-Process</option>
                <option value="Complete" >Complete</option>
                <option value="Couldn't Serve">Couldn't Serve</option>
            </select>
        </div>
    </>
  );
};

export default Filter;
