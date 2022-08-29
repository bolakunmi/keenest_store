import React, { useState } from "react";
import Header from "./header.js";
import General from "./General.js";
import "./index.css";
import { Routes, Route} from "react-router-dom";
import Cart from "./cart.js";
import Product from "./Product.js";
import Search from "./search.js";
import Error from "./error.js";
import { cart } from "./site_data";
// import { Cart_Provider } from "./CartContext.js";

export const CART_CONTEXT = React.createContext();
export const SEARCH_CONTEXT = React.createContext();

// put a loader!!!
// you can further add a useContext for favourites also
function App() {
  const [mycart, setMycart] = useState(cart);
  const [mysearch, setMysearch] = useState('nosearch yet');
  return (
    <React.Fragment>
      <CART_CONTEXT.Provider value={{ mycart, setMycart }}>
        <SEARCH_CONTEXT.Provider value={{ mysearch, setMysearch }}>
          <Header />
          <Routes>
            <Route path="/" exact element={<General />} />
            {/* <Route path="about" exact element={<About />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            {/* the name has to be the same with the product.name */}

            <Route path="/search/:name" element={<Search />} />
            {/* the name has to be with the serach input */}

            <Route path="*" element={<Error />} />
          </Routes>
        </SEARCH_CONTEXT.Provider>
      </CART_CONTEXT.Provider>

      {/* <General />
      <Main /> */}
    </React.Fragment>
  );
}
export default App;
