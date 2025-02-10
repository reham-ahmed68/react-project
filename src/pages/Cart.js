import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div style={{ margin: "100px 0 40px 0" , textAlign:"center"}}>
            <h2>Cart</h2>
            <div className="fshowProducts" style={{ display: "flex",marginRight:"10px" , border:"3px solid black" , borderRadius:" 5%" }}>
                {cartItems.length === 0 ? <p>No items in cart</p> : cartItems.map((item) => (
                    <div key={item.id} style={{ padding: "10px", marginBottom: "10px" }}>
                        <img src={item.imageUrl} alt={item.product} style={{ width: "250px", height: "250px" }} />
                        <h4>{item.product}</h4>
                        <p>Price: ${item.price}</p>
                        <button className="btn btn-danger " onClick={() => dispatch(removeFromCart(item.id))} style={{ backgroundColor: "red", color: "white" }}>Remove</button>
                    </div>
                ))}
            </div>
            <div style={{margin:"50px 0 0 400px" , border:"3px solid black" , borderRadius:" 10%", width:"550px" , height:"200px", textAlign:"center" }}>
                <h2 style={{padding:"35px 0 0 0 "}}>Total Price</h2>
                {cartItems.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                    <h3>${totalPrice}</h3>
                </div>
            )}
            </div>

        </div>
    );
};

export default Cart;
