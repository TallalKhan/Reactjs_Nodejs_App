import React from "react";

import '../App.css';
import logo from '../logo.svg';

import { NavLink } from 'react-router-dom'; 



const Header = () => {
  return (

    <div className="navigation-bar" >
    <div id="navigation-container">
   
    <NavLink to="/"> <img src={require('../logo2.png')} className="App-logo" alt="logo" /></NavLink>
    
    </div>
    </div>
  );
};

export default Header;