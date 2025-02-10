import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../styles/App.css";
const Header = () => {
  const cartCount = useSelector((state) => state.cart.length);
  const style1 = ({ isActive }) => {
    return {
      color: isActive ? "black" : "gray",
      fontSize: isActive ? "24px" : "20px",
      padding: "5px 15px",
      borderRadius: "5%",
    }
  }

  return (
    <div className="div2" style={{ padding: "20px 0" }}>
      <nav className="container" >
        <i className="fa-solid fa-lock" style={{ fontSize: "25px" }}></i>
        <h4 style={{ display: "inline", margin: "0 600px 0 20px", fontSize: "35px" }}>Our store</h4>
        <NavLink className="Link" style={style1} to="/home" >Home</NavLink>
        <NavLink className="Link" to="/products" style={style1}>Products</NavLink>
        <NavLink className="Link" to="/cart" style={style1}>Cart</NavLink>
        <i className="fa-solid fa-cart-shopping" style={{ fontSize: "20px" }}></i>
        <span class="counter ">{cartCount}</span>
      </nav>
      <hr></hr>
    </div>
  )
}
export default Header;