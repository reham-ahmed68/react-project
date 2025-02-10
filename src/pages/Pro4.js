import {React} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum();
const Pro4 = () => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(productInfo));
        alert("Product has been added to cart")
    }; 
  const productInfo = {id: 2, product: "Knitted T-Shirt", category: "Men fashion", price: 1299, imageUrl: "/1 (5).jpg" };
   const products = [
    { id: 1, product: "T-shirt Defacto", category: "Men fashion", price: 2000, imageUrl: "/1 (7).jpg" },
    { id: 2, product: "Hoodie Defacto", category: "Men fashion", price: 2499, imageUrl: "/1 (6).jpg" },
    { id: 3, product: "Woven Dress Defacto", category: "Women fashion", price: 1189, imageUrl: "/1 (1)2.jpg" },
    { id: 5, product: "Skinny Trousers", category: "Women fashion", price: 380, imageUrl: "/1.jpg" },
    { id: 6, product: "knitted Dress Defacto", category: "Women fashion", price: 699, imageUrl: "/1 (2).jpg" },
    ]
    return (
        
        <div>
            <div className="header" ><h2>Knitted T-Shirt</h2></div>
            <div className="d-flex" style={{ marginBottom: "20px" }}>
                <img src="1 (5).jpg" alt="nothing"></img>
                <div style={{ width: "500px" , marginLeft:"20px" }}>
                    <h2 >Knitted T-Shirt</h2>
                    <div style={{ margin: "10px 0" }}><i className="fa-solid fa-star" style={{ color: "rgb(255, 208, 0)" }}></i><i className="fa-solid fa-star" style={{ color: "rgb(255, 208, 0)" }}></i><i className="fa-solid fa-star" style={{ color: "rgb(255, 208, 0)" }}></i> 3 ratings</div>
                    <h3>$1299 </h3>
                    <p>category:Men fashion</p>
                    <p>{lorem.generateSentences(2)}</p>
                    <button className="btn addtocart" style={{backgroundColor:"rgb(6, 0, 85)" , color:"white"}} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            <div style={{ margin: "50px", width: "700px" }}>
                <h6>Description Review(1)</h6>
                <p>{lorem.generateSentences(2)}</p>
            </div>

            <div style={{marginTop: "50px"}}>
                <h4 style={{ margin: "0 0px 20px 50px" }}>you might also like</h4>
                <hr style={{ width: "220px", marginLeft: "50px" }}></hr>
                <div className="  row" style={{ height: "100%"  }}>


                    {
                        products.map((product) => (
                            <div className="items col-xl-3 col-lg-3 col-md-3 col-sm-3 " style={{ margin: "20px 55px", backgroundColor: "white", borderRadius: "2%", padding: "10px 0 0 10px" }} >
                                <div style={{ backgroundColor: "rgb(6, 0, 85)", color: "white", borderRadius: "40%", width: "40px", height: "20px", textAlign: "center" }}><p style={{ fontSize: "10px" }}>30% off</p></div>
                                <img className="image" src={product.imageUrl} alt="no" style={{ padding: "20px 0 5px 10px" }} />
                                <div style={{ marginLeft: "57px" }}>
                                    <p className="product">{product.product}</p>
                                    <p data-category="Men" className="category"> {product.category}</p>
                                    <div style={{ margin: "10px 0" }}><i className="fa-solid fa-star" style={{ color: "rgb(255, 208, 0)" }}></i><i className="fa-solid fa-star" style={{ color: "rgb(255, 208, 0)" }}></i><i className="fa-solid fa-star" style={{ color: "rgb(255, 208, 0)" }}></i></div>
                                    <p style={{ display: "inline", fontWeight: "bold" }}>$</p>
                                    <p className="price_paragraph" style={{ fontWeight: "bold", display: "inline-block", marginRight: "180px" }}>{product.price} </p>
                                    <div className="plusIcon" style={{ display: "inline-block", width: "25px", height: "25px", border: "1px solid rgb(218, 206, 206)", borderRadius: "50%", textAlign: "center", marginBottom: "10px" }}>
                                        <NavLink to={`/pro${product.id}`}><i className="fa-solid fa-plus " style={{ color: "rgb(136, 136, 136)" }}></i></NavLink>
                                    </div>

                                </div>
                            </div>
                        ))}


                </div>
            </div>


        </div>
    )
}
export default Pro4;