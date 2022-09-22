import './wifi.css'
import React from 'react'
import { useState } from 'react'
const WifiLoader = () => {
  
function Rerenderwifi(){
  console.log("rerender")
  const signals = Array.from(
    document.getElementsByClassName('signal') as HTMLCollectionOf<HTMLElement>,
  );
  signals.forEach(signal => {
    signal.style.animation = 'none';
    setTimeout(function() {
      signal.style.animation = '';
  }, 10);
  });
}
  return (
    <div className='Wrapper2'>
      <button onClick={e => Rerenderwifi()}>
        <div className="wifi" id='wifi'>
          <div className="signal signal-1"></div>
          <div className="signal signal-2"></div>
          <div className="signal signal-3"></div>
          <div className="signal signal-4"></div>
        </div>
      </button>
    </div>

  )
}

export default WifiLoader
