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
export const Search_context = React.createContext();

// put a loader!!!
// you can further add a useContext for favourites also
function App() {
  const [mycart, setMycart] = useState(cart);
  const [mysearch, setMysearch] = useState("");
  return (
    <React.Fragment>
      <Cart_context.Provider value={{ mycart, setMycart }}>
        <Search_context.Provider value={{ mysearch, setMycart }}>
          <Header />
          <Routes>
            <Route path="/" exact element={<General />} />
            {/* <Route path="about" exact element={<About />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            {/* the name has to be the same with the product.name */}

            <Route path="/search" element={<Search />} />
            {/* the name has to be with the serach input */}

            <Route path="*" element={<Error />} />
          </Routes>
        </Search_context.Provider>
      </Cart_context.Provider>

      {/* <General />
      <Main /> */}
    </React.Fragment>
  );
}
export default App;
