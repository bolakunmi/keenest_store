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
import Error from "./error.js";
import { site_data, cart, discounted_sales, liked } from "./site_data";
// import { Cart_Provider } from "./CartContext.js";

export const Cart_context = React.createContext();

// put a loader!!!
function App() {
const [mycart, setMycart] = useState(cart)
  return (
    <React.Fragment>
      <Cart_context.Provider value={{ mycart, setMycart }}>
        <Header />
        <Routes>
          <Route path="/" exact element={<General />} />
          {/* <Route path="about" exact element={<About />} /> */}
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<Product />} />
          {/* the name has to be the same with the product.name */}
          <Route path="Search" element={<Search />} />
          {/* the name has to be with the serach input */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Cart_context.Provider>

      {/* <General />
      <Main /> */}
    </React.Fragment>
  );
}
export default App;
