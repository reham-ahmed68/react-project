import { useState } from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("name");

    const productList = [
        { id: 1, product: "T-shirt Defacto", category: "Man fashion", price: 2000, imageUrl: "/1 (7).jpg" },
        { id: 2, product: "Hoodie Defacto", category: "Man fashion", price: 2499, imageUrl: "/1 (6).jpg" },
        { id: 3, product: "Woven Dress Defacto", category: "Women fashion", price: 1189, imageUrl: "/1 (1)2.jpg" },
        { id: 4, product: "Knitted T-Shirt", category: "Man fashion", price: 1299, imageUrl: "/1 (5).jpg" },
        { id: 5, product: "Skinny Trousers", category: "Women fashion", price: 380, imageUrl: "/1.jpg" },
        { id: 6, product: "knitted Dress Defacto", category: "Women fashion", price: 699, imageUrl: "/1 (2).jpg" },
        { id: 7, product: "Oppo Phone", category:"Phone" , price: 2000, imageUrl: "/oppo.png" },
        { id: 8, product: "Realme Phone", category:"Phone" ,  price: 2499, imageUrl: "/realme.png" },
        { id: 9, product: "Samsung Phone", category:"Phone" ,  price: 1189, imageUrl: "/samsung.png" },
        { id: 10, product: "Samsung Phone", category:"Phone" ,  price: 2000, imageUrl: "/samsung2.png" },
        { id: 11, product: "Nokia Phone", category:"Phone" ,  price: 2499, imageUrl: "/nokia.png" },
        { id: 12, product: "Realme", category:"Phone" ,  price: 3199, imageUrl: "/1 (13).jpg" },
        { id: 13, product: "SODO headphone", category:"headphone" ,  price: 1299, imageUrl: "/1 (8).jpg" },
        { id: 14, product: "P9 blue headphone", category:"headphone" , price: 380, imageUrl: "/1 (9).jpg" },
        { id: 15, product: "P9 gray headphone", category:"headphone" , price: 699, imageUrl: "/1 (14).jpg" },
        { id: 16, product: "Gray color sofa", category:"Sofa" , price: 2000, imageUrl: "/sofa1.png" },
        { id: 17, product: "Bage color sofa", category:"Sofa" , price: 2499, imageUrl: "/sofa2.png" },
        { id: 18, product: "Gray color sofa", category:"Sofa" , price: 1189, imageUrl: "/sofa3.png" },
        { id: 19, product: "Bage color sofa", category:"Sofa" , price: 2000, imageUrl: "/sofa4.png" },
        { id: 20, product: "olive color sofa", category:"Sofa" , price: 2499, imageUrl: "/sofa5.png" },
        { id: 21, product: "Black color Sofa", category:"Sofa" , price: 3199, imageUrl: "/sofa6.png" },
    ];

    const filteredProducts = productList.filter((product) => {
        let value = "";
        if (filterType === "name") value = product.product.toUpperCase(); 
        if (filterType === "category") value = product.category ? product.category.toUpperCase() : "";
        if (filterType === "price") value = product.price.toString();
        return value.includes(searchTerm.toUpperCase());
    });

    return (
        <div>
            <div className="header"><h2>Products</h2></div>
            
            <div style={{ height: "100px", marginBottom: "20px" }}>
                <select className="form-control col-5" style={{ display: "inline", width: "200px", marginRight: "10px" }} value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                    <option value="category">Search by Category</option>
                    <option value="name">Search by Name</option>
                    <option value="price">Search by Price</option>
                </select>

                <input className="form-control col-5" type="search" placeholder="Search"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ display: "inline-block", margin: "0px 10px", backgroundColor: "rgb(219, 222, 223)" }} />
            </div>

            <div className="product-list" style={{ display: "flex", flexWrap: "wrap" }}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="items" style={{  margin: "30px",width: "250px"}}>
                            <img src={product.imageUrl} alt={product.product} style={{ width: "250px", height: "250px" }} />
                            <h4 className="product">{product.product}</h4>
                            <p className="category">{product.category}</p>
                            <p className="price">${product.price}</p>
                        </div> 
                    ))
                ) : (
                    <h2>No products found</h2>
                )}
            </div>
        </div>
    );
};

export default Products;
