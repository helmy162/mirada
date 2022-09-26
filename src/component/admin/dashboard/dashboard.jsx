import React, { useLayoutEffect, useState } from 'react';
import { stockData } from "./data.js";
import DashboardTable from "../table/dashboardtable";
import Nav from "../Nav/nav";
import { Pagination } from '@mui/material';
import usePagination from "./Pagination";
import './dashboard.css';
import Popup from "../../popup/popup";
import tick from "../../props/tick.svg";
import Services from "../../services/services";
import Filter from '../filter/filter.jsx';

const Report = () => {
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
  let [page, setPage] = useState(1);
  const y = useWindowSize()[0];
  const PER_PAGE = y>=1920? 15: y>800? 10: 7;

  const count = Math.ceil(stockData.length / PER_PAGE);
  const _DATA = usePagination(stockData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const [isVisible, setIsVisible] = useState([false, false, false, false, false, false, false, false]);
  const [IsPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState("");
    function openDrawer() {
      console.log("test")
        setIsPopupOpen(true);
      }

  return (
    <div className="container2">
      <Nav active="Dashboard"></Nav>
      <Filter></Filter>
      <DashboardTable requests={_DATA.currentData()} openDrawer={openDrawer} ></DashboardTable>
      
      <Pagination
        count={count}
        size="large"
        page={page}
        onChange={handleChange}
        color="secondary"
        className='pagination'
        style={{ marginTop: "20px", background:'transparent', color:'white'}}
      />
      {
        IsPopupOpen&& <Popup
        noclose= {false}
        content={
          <div className='Wrapper radiopopup'>
            {/* Change status of order */}
            <form >
              {/* <div className='radio'>
                <div className='flex'>
                  <input type="radio" name="status" id="pending" />
                  <label htmlFor="pending">Pending</label>
                </div>
                <div className='flex'>
                  <input type="radio" name="status" id="process" />
                  <label htmlFor="process">In Process</label>
                </div>
                <div className='flex'>
                  <input type="radio" name="status" id="done" />
                  <label htmlFor="done">Done</label>
                </div>
              </div> */}
              <div className='popupcomment'>
                <span style={{marginTop:'89px', marginBottom:'24px', fontFamily: 'Cairo', fontSize: '18px', color:'#666666', textAlign:'center'}}>Please enter your comment below</span>
              <textarea onChange={(e)=>setMessage(e.target.value)} value={message}  placeholder="Add comment" rows="4" cols="50" style={{width:'90%', height:'82px', background:'#F2F2F2', borderRadius:'16px', border:'none', padding:'16px', fontFamily:'Cairo', fontSize:'16px', marginBottom:'16px'}} />
              <button disabled={message.length<1} onClick={() => setIsVisible(true)} className="btn-lined" style={{backgroundColor: 'transparent', borderRadius:'999px', width: '235px', height: '60px', border: '1px solid #814486', color: '#814486', fontFamily:'Cairo', fontSize:'16px', display:'flex', justifyContent:'center', alignItems: 'center', marginTop:'10px'}}>
              Submit</button> 
              </div>
            </form>
          </div>
        }
        handleClose={e => setIsPopupOpen(!IsPopupOpen)}
      />
  }
    </div>
  );
};

export default Report;
