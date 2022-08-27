import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import general from "./General.js";
import { Cart_context } from "./App.js";

const Cart = function () {
  const { mycart, setMycart } = useContext(Cart_context);
  const [totalprice, setTotalprice] = useState(0);

  function remove_item(index) {
    // fix the total sum
    setMycart(() => {
      return mycart.filter((product) => mycart.indexOf(product) !== index);
    });
  }

  useEffect(() => {
    setTotalprice(() => {
      return (
        mycart.map((product) => {
          return  product.price * product.quantity + ' '
        })
      );
    });
  },[]);

  const Cart_items = () => {
    return mycart.map((product) => {
      const { category, brand, img, price, quantity, id, liked } = product;
      const index = mycart.indexOf(product);
      return (
        <div className="cart_item">
          <h4>{brand}</h4>
          <image src={img} alt={category} />
          <h4>
            &#36;{price}({quantity})
          </h4>
          <h4>subtotal: &#36;{price * quantity}</h4>
          <button
            onClick={() => {
              remove_item(index);
            }}
          >
            delete
          </button>
        </div>
      );
    });
  };

  const Cart_basket = () => {
    return (
      <React.Fragment>
        <h1>here is my cart</h1>
        <div className="cart_basket">
          <Cart_items />
        </div>
        <h4>TOTAL:&#36;{totalprice}</h4>
        <button>cashout</button>
      </React.Fragment>
    );
  };

  return (
    <div>
      {mycart.length < 1 ? <h1>ADD ITEMS TO CART</h1> : <Cart_basket />}
    </div>
  );
};

export default Cart;
