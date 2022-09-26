import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../Nav/nav";
import './newroom.css';

const NewRoom = () => {
 
  return (
    <>
      
        <div className="container3">
            <Nav active="Room"></Nav>
            <div style={{width:'90%'}}>
                <div className="Wrapper wrapper2"> 
                    <div className='addnewroom'>Add new room</div>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name" className="label">Room Name</label>
                                <input type="text" name="name" id="name" className="form-input"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="number" className="label">Room No</label>
                                <input type="text" name="number" id="number" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="wifi" className="label">Wifi Name</label>
                                <input type="text" name="wifi" id="wifi" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="label">Wifi Password</label>
                                <input type="text" name="password" id="password" className="form-input" />
                            </div>
                            <div className="form-group">
                                <Link to="/dashboard"  type="submit" className="btn-login" >Add room</Link>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </>
  );
};

export default NewRoom;
