import React, { useLayoutEffect, useState } from 'react';
import { stockData } from "./data.js";
import ReportTable from "../table/reporttable";
import Nav from "../Nav/nav";
import { Pagination } from '@mui/material';
import usePagination from "./Pagination";
import './report.css';
// import { default as data } from "./MOCK_DATA.json";


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
  const PER_PAGE = y>=1920? 16: 10;

  const count = Math.ceil(stockData.length / PER_PAGE);
  const _DATA = usePagination(stockData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const [isVisible, setIsVisible] = useState([false, false, false, false, false, false, false, false]);
    const openDrawer = index => e => {
        let newArr = [...isVisible];
        newArr[index] = true;
        setIsVisible(newArr);
      }

  return (
    <div className="container">
      <Nav active="Report"></Nav> 
      <ReportTable requests={_DATA.currentData()} openDrawer={openDrawer} ></ReportTable>
      
      <Pagination
        count={count}
        size="large"
        page={page}
        onChange={handleChange}
        color="secondary"
        className='pagination'
        style={{ marginTop: "20px", background:'transparent', color:'white'}}
      />
    </div>
  );
};

export default Report;
