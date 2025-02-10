import React from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoremIpsum } from 'lorem-ipsum';
import { NavLink } from "react-router-dom";
const lorem = new LoremIpsum();
const Home = () => {
    const products = [
        { id: 1, product: "T-shirt Defacto", category: "Men fashion", price: 2000, imageUrl: "/1 (7).jpg" },
        { id: 2, product: "Hoodie Defacto", category: "Men fashion", price: 2499, imageUrl: "/1 (6).jpg" },
        { id: 3, product: "Woven Dress Defacto", category: "Women fashion", price: 1189, imageUrl: "/1 (1)2.jpg" },
        { id: 4, product: "Knitted T-Shirt", category: "Men fashion", price: 1299, imageUrl: "/1 (5).jpg" },
        { id: 5, product: "Skinny Trousers", category: "Women fashion", price: 380, imageUrl: "/1.jpg" },
        { id: 6, product: "knitted Dress Defacto", category: "Women fashion", price: 699, imageUrl: "/1 (2).jpg" },
    ]
    const products2 = [
        { id: 7, product: "Oppo",  price: 2000, imageUrl: "/oppo.png" },
        { id: 8, product: "Realme",  price: 2499, imageUrl: "/realme.png" },
        { id: 9, product: "Samsung",  price: 1189, imageUrl: "/samsung.png" },
        { id: 10, product: "Samsung",  price: 2000, imageUrl: "/samsung2.png" },
        { id: 11, product: "Nokia",  price: 2499, imageUrl: "/nokia.png" },
        { id: 12, product: "Realme",  price: 3199, imageUrl: "/1 (13).jpg" },
        { id: 13, product: "SODO headphone",  price: 1299, imageUrl: "/1 (8).jpg" },
        { id: 14, product: "P9 blue",  price: 380, imageUrl: "/1 (9).jpg" },
        { id: 15, product: "P9 gray",  price: 699, imageUrl: "/1 (14).jpg" },
    ]
    const products3 = [
        { id: 16, product: "Gray color sofa",  price: 2000, imageUrl: "/sofa1.png" },
        { id: 17, product: "Bage color sofa",  price: 2499, imageUrl: "/sofa2.png" },
        { id: 18, product: "Gray color sofa",  price: 1189, imageUrl: "/sofa3.png" },
        { id: 19, product: "Bage color sofa",  price: 2000, imageUrl: "/sofa4.png" },
        { id: 20, product: "olive color sofa",  price: 2499, imageUrl: "/sofa5.png" },
        { id: 21, product: "Black color Sofa",  price: 3199, imageUrl: "/sofa6.png" },
    ]
    return (
        <div >
            <div id="demo" className="carousel slide home" data-ride="carousel" style={{ height: "400px", margin: "100px 0 40px 0", backgroundColor: "rgb(240, 238, 238)" }}>
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                </ul>

                <div className=" carousel-inner" style={{ paddingTop: "100px" }}>
                    <div className="container ">
                        <div className=" carousel-item active "  >
                            <div className="text" style={{ width: "400px", marginRight: "300px", display: "inline-block" }}>
                                <h2>50% Offer For Your First Shopping</h2>
                                <p>{lorem.generateSentences(2)}</p>
                            </div>
                            <img src="/watch.png" alt="watch" style={{ width: "100px", height: "200px", marginTop: "-80px" }} />
                        </div>

                        <div className=" carousel-item ">
                            <div className="text" style={{ width: "400px", marginRight: "300px", display: "inline-block" }}>
                                <h2>50% Offer For Your First Shopping</h2>
                                <p>{lorem.generateSentences(2)}</p>
                            </div>
                            <img src="/phone.png" alt="watch" style={{ width: "100px", height: "200px", marginTop: "-80px" }} />
                        </div>

                        <div className=" carousel-item ">
                            <div className="text" style={{ width: "400px", marginRight: "300px", display: "inline-block" }}>
                                <h2>50% Offer For Your First Shopping</h2>
                                <p>{lorem.generateSentences(2)}</p>
                            </div>
                            <img src="/chair.png" alt="watch" style={{ width: "100px", height: "200px", marginTop: "-80px" }} />
                        </div>
                        <div className=" carousel-item">
                            <div className="text" style={{ width: "400px", marginRight: "300px", display: "inline-block" }}>
                                <h2>50% Offer For Your First Shopping</h2>
                                <p>{lorem.generateSentences(2)}</p>
                            </div>
                            <img src="/headphone.png" alt="watch" style={{ width: "100px", height: "200px", marginTop: "-80px" }} />
                        </div>

                    </div>
                </div>

                {/* Controls */}
                <a className="carousel-control-prev" href="#demo" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#demo" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {/* /////////////////////////////////////////////////////////////////////// */}
            <div className="information" style={{ height: "250px" }}>
                <div className="container d-flex" style={{ padding: "20px 0" }}>
                    <div className="firstOne" style={{ backgroundColor: "rgba(248, 200, 209, 0.56)", width: "250px", height: "150px", padding: "25px 0 ", textAlign: "center", margin: "0 10px" }}>
                        <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "white", textAlign: "center", padding: "5px 0", margin: " 0px 0 10px 110px" }}>
                            <i className="fa-solid fa-car" style={{ fontSize: "17px" }}></i></div>
                        <h4 style={{ margin: "0px 0 10px 0" }}>Free Shipping</h4>
                        <p>lorem Ipsum dolor sit amet</p>
                    </div>
                    <div className="firstOne" style={{ backgroundColor: "rgba(140, 189, 218, 0.56)", width: "250px", height: "150px", padding: "25px 0 ", textAlign: "center", margin: "0 10px" }}>
                        <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "white", textAlign: "center", padding: "5px 0", margin: " 0px 0 10px 110px" }}>
                            <i className="fa-solid fa-credit-card" style={{ fontSize: "17px" }}></i></div>
                        <h4 style={{ margin: "0px 0 10px 0" }}>Safe Payment</h4>
                        <p>lorem Ipsum dolor sit amet</p>
                    </div>
                    <div className="firstOne" style={{ backgroundColor: "rgba(176, 226, 143, 0.56)", width: "250px", height: "150px", padding: "25px 0 ", textAlign: "center", margin: "0 10px" }}>
                        <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "white", textAlign: "center", padding: "5px 0", margin: " 0px 0 10px 110px" }}>
                            <i className="fa-solid fa-shield" style={{ fontSize: "17px" }}></i></div>
                        <h4 style={{ margin: "0px 0 10px 0" }}>Secure Payment</h4>
                        <p>lorem Ipsum dolor sit amet</p>
                    </div>
                    <div className="firstOne" style={{ backgroundColor: "rgba(140, 189, 218, 0.56)", width: "250px", height: "150px", padding: "25px 0 ", textAlign: "center", margin: "0 10px" }}>
                        <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "white", textAlign: "center", padding: "5px 0", margin: " 0px 0 10px 110px" }}>
                            <i className="fa-solid fa-headphones" style={{ fontSize: "17px" }}></i></div>
                        <h4 style={{ margin: "0px 0 10px 0" }}>Back Guarantee</h4>
                        <p>lorem Ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////////// */}
            {/* /////////////////////////////////////////////////////////////////////// */}

            <div className=" products row" style={{ height: "100%", marginTop: "50px" }}>
                <h3 style={{ padding: "50px 0 0 570px" }} >Big Discounts</h3>
                <hr style={{ margin: "10px  150px 50px 150px" }}></hr>

                {
                    products.map((product) => (
                        <div className="items col-xl-3 col-lg-3 col-md-3 col-sm-3 " style={{ margin: "20px 55px", borderRadius: "2%" , padding:"10px 0 0 10px" }} >
                            <div style={{backgroundColor:"rgb(6, 0, 85)" , color:"white" , borderRadius:"40%", width:"40px",height:"20px", textAlign:"center"}}><p style={{fontSize:"10px"}}>30% off</p></div>
                            <img className="image" src={product.imageUrl} alt="no" style={{ padding: "20px 0 5px 10px" }} />
                            <div style={{ marginLeft:"57px" }}>
                                <p className="product">{product.product}</p>
                                <p data-category="Men" className="category"> {product.category}</p>
                                <div style={{margin:"10px 0"}}><i className="fa-solid fa-star" style={{color:"rgb(255, 208, 0)"}}></i><i className="fa-solid fa-star" style={{color:"rgb(255, 208, 0)"}}></i><i className="fa-solid fa-star" style={{color:"rgb(255, 208, 0)"}}></i></div>
                                <p style={{display:"inline",fontWeight: "bold"}}>$</p>
                                <p className="price_paragraph" style={{ fontWeight: "bold" , display:"inline-block" , marginRight:"100px" }}>{product.price} </p>
                                <div className="plusIcon" style={{display:"inline-block" ,width:"25px",height:"25px", border:"1px solid rgb(218, 206, 206)" , borderRadius:"50%" , textAlign:"center" , marginBottom:"10px"}}>
                                <NavLink to={`/pro${product.id}`}><i  className="fa-solid fa-plus " style={{color:"rgb(136, 136, 136)"}}></i></NavLink>
                                </div>

                            </div>
                            <p className="hoverP" style={{width:"250px"}}></p>
                        </div>
                    ))}


            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////// */}
            <div className=" products2 row" style={{ height: "100%", marginTop: "50px" }}>
                <h3 style={{ padding: "50px 0 0 570px" }} >New Arrivals</h3>
                <hr style={{ margin: "10px  150px 50px 150px" }}></hr>

                {
                    products2.map((product) => (
                        <div className="items col-xl-3 col-lg-3 col-md-3 col-sm-3 " style={{ margin: "20px 55px"  }} >
                            <img className="image" src={product.imageUrl} alt="no" style={{ padding: "20px 0 5px 50px" }} />
                            <div style={{ marginLeft:"57px" }}>
                                <p className="product">{product.product}</p>
                                <p data-category="Men" className="category"> {product.category}</p>
                                <div style={{margin:"10px 0"}}><i className="fa-solid fa-star" style={{color:"rgb(255, 208, 0)"}}></i><i className="fa-solid fa-star" style={{color:"rgb(255, 208, 0)"}}></i><i className="fa-solid fa-star" style={{color:"rgb(255, 208, 0)"}}></i></div>
                                <p style={{display:"inline",fontWeight: "bold"}}>$</p>
                                <p className="price_paragraph" style={{ fontWeight: "bold" , display:"inline-block" , marginRight:"180px" }}>{product.price} </p>
                                <div className="plusIcon" style={{display:"inline-block" ,width:"25px",height:"25px", border:"1px solid rgb(218, 206, 206)" , borderRadius:"50%" , textAlign:"center" , marginBottom:"10px"}}>
                                <NavLink to={`/pro${product.id}`}><i  className="fa-solid fa-plus " style={{color:"rgb(136, 136, 136)"}}></i></NavLink>
                                </div>

                            </div>
                            <p className="hoverP"></p>
                        </div>
                    ))}


            </div>
            {/* ////////////////////////////////////////////// */}
            <div className=" products row" style={{ height: "100%", marginTop: "50px" }}>
                <h3 style={{ padding: "50px 0 0 570px" }} >Best Sales</h3>
                <hr style={{ margin: "10px  150px 50px 150px" }}></hr>

                {
                    products3.map((product) => (
                        <div className="items col-xl-3 col-lg-3 col-md-3 col-sm-3 " style={{ margin: "20px 55px", borderRadius: "2%" , padding:"10px 0 0 10px" }} >
                            <div style={{backgroundColor:"rgb(6, 0, 85)" , color:"white" , borderRadius:"40%", width:"40px",height:"20px", textAlign:"center"}}><p style={{fontSize:"10px"}}>30% off</p></div>
                            <img className="image" src={product.imageUrl} alt="no" style={{ padding: "20px 0 5px 10px" ,width:"300px"}} />
                            <div style={{ marginLeft:"57px" }}>
                                <p className="product">{product.product}</p>
                                <p data-category="Men" className="category"> {product.category}</p>
                                <div style={{margin:"10px 0"}}><i className="fa-solid fa-star" style={{color:"rgb(255, 208, 0)"}}></i><i className="fa-solid fa-star" style={{color:"rgb(255, 208, 0)"}}></i><i className="fa-solid fa-star" style={{color:"rgb(255, 208, 0)"}}></i></div>
                                <p style={{display:"inline",fontWeight: "bold"}}>$</p>
                                <p className="price_paragraph" style={{ fontWeight: "bold" , display:"inline-block" , marginRight:"180px" }}>{product.price} </p>
                                <div className="plusIcon" style={{display:"inline-block" ,width:"25px",height:"25px", border:"1px solid rgb(218, 206, 206)" , borderRadius:"50%" , textAlign:"center" , marginBottom:"10px"}}>
                                <NavLink to={`/pro${product.id}`}><i  className="fa-solid fa-plus " style={{color:"rgb(136, 136, 136)"}}></i></NavLink>
                                </div>

                            </div>
                            <p className="hoverP"></p>
                        </div>
                    ))}


            </div>
        </div >


    )
    
}

export default Home;

