import React from "react";
import logo from '../asset/image/freecodecamp-logo.png';
import '../styles/Logo.css';

export const Logo = () => (
  <div className="freecodecamp-logo-contenedor">
    <img 
      className="freecodecamp-logo" 
      src={logo}
      alt='Logo freecodecamp' />
  </div>
);