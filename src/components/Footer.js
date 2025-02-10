import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="  footer">
      <p style={{padding:"25px 0px 0 550px"}}>SEF Academy <NavLink style={{color:"black"}}>Reham Ahmed</NavLink></p>

    </div>
  )
}
export default Footer;