import React, { useState } from "react";
import Header from "./header.js";
import General from "./General.js";
import "./index.css";
import Main from "./about.js";
import { Routes, Route, Link } from "react-router-dom";
import About from "./about.js";
import Cart from "./cart.js";
import Product from "./Product.js";
import Search from "./search.js";
import { site_data, cart, discounted_sales, liked } from "./site_data";
import { Cart_Provider } from "./CartContext.js";


// put a loader!!!
function App() {
  return (
    <React.Fragment>
      <Cart_Provider>
        <Header />
        <Routes>
          <Route path="/" element={<General />} />
          {/* <Route path="about" exact element={<About />} /> */}
          <Route path="cart" exact element={<Cart />} />
          <Route path="product" exact element={<Product />} />
          {/* the name has to be the same with the product.name */}
          <Route path="Search" exact element={<Search />} />
          {/* the name has to be with the serach input */}
        </Routes>
      </Cart_Provider>

      {/* <General />
      <Main /> */}
    </React.Fragment>
  );
}
export default App;
