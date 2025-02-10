import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Cart from './pages/Cart.js';
import Products from './pages/Products.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Pro1 from './pages/Pro1.js';
import Pro2 from './pages/Pro2.js';
import Pro3 from './pages/Pro3.js';
import Pro4 from './pages/Pro4.js';
import Pro5 from './pages/Pro5.js';
import Pro6 from './pages/Pro6.js';
import Pro7 from './pages/Pro7.js';
import Pro8 from './pages/Pro8.js';
import Pro9 from './pages/Pro9.js';
import Pro10 from './pages/Pro10.js';
import Pro11 from './pages/Pro11.js';
import Pro12 from './pages/Pro12.js';
import Pro13 from './pages/Pro13.js';
import Pro14 from './pages/Pro14.js';
import Pro15 from './pages/Pro15.js';
import Pro16 from './pages/Pro16.js';
import Pro17 from './pages/Pro17.js';
import Pro18 from './pages/Pro18.js';
import Pro19 from './pages/Pro19.js';
import Pro20 from './pages/Pro20.js';
import Pro21 from './pages/Pro21.js';

// استيراد Provider و store من react-redux
import { Provider } from 'react-redux';
import store from './redux/store';  // تأكد من المسار الصحيح لـ store

const App = () => {
    return (
        <Provider store={store}>  {/* تغليف التطبيق بـ Provider */}
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/pro1" element={<Pro1 />} />
                    <Route path="/pro2" element={<Pro2 />} />
                    <Route path="/pro3" element={<Pro3 />} />
                    <Route path="/pro4" element={<Pro4 />} />
                    <Route path="/pro5" element={<Pro5 />} />
                    <Route path="/pro6" element={<Pro6 />} />
                    <Route path="/pro7" element={<Pro7 />} />
                    <Route path="/pro8" element={<Pro8 />} />
                    <Route path="/pro9" element={<Pro9 />} />
                    <Route path="/pro10" element={<Pro10 />} />
                    <Route path="/pro11" element={<Pro11 />} />
                    <Route path="/pro12" element={<Pro12 />} />
                    <Route path="/pro13" element={<Pro13 />} />
                    <Route path="/pro14" element={<Pro14 />} />
                    <Route path="/pro15" element={<Pro15 />} />
                    <Route path="/pro16" element={<Pro16 />} />
                    <Route path="/pro17" element={<Pro17 />} />
                    <Route path="/pro18" element={<Pro18 />} />
                    <Route path="/pro19" element={<Pro19 />} />
                    <Route path="/pro20" element={<Pro20 />} />
                    <Route path="/pro21" element={<Pro21 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
