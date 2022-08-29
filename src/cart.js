import React, { useState, useEffect, useContext } from "react";
import {CART_CONTEXT} from "./App.js";

const Cart = function () {
  const { mycart, setMycart } = useContext(CART_CONTEXT);
  const [totalprice, setTotalprice] = useState(0);
  const [showimage, setShowimage] = useState(false);

  function remove_item(index) {
    // fix the total sum
    setMycart(() => {
      return mycart.filter((product) => mycart.indexOf(product) !== index);
    });
  }

  useEffect(() => {
    setTotalprice(() => {
      return mycart
        .map((product) => {
          return product.price * product.quantity;
        })
        .reduce((prev, current) => prev + current, 0);
    });
  },[mycart]);

  const CART_ITEMS = () => {
    return mycart.map((product) => {
      const { category, brand, img, price, quantity} = product;
      const index = mycart.indexOf(product);
      return (
        <div className="cart_item">
          <div>
            <h2 style={{fontSize: '18px', fontWeight: '900', fontFamily:'cursive'}}>{brand}</h2>
            <img
              src={img}
              alt={category}
              style={{ width: "100px", height: "auto" }}
            />
          </div>

          <div>
            <h4>
              &#36;{price}({quantity})
            </h4>
            <h4> &#36;{price * quantity}</h4>
          </div>

          <div>
            <img
              src={require("./images/delete.png")}
              alt="delete"
              onClick={() => {
                remove_item(index);
              }}
            />
          </div>
        </div>
      );
    });
  };

  const EMPTY_CART = () => {
    return (
      <div className="empty_cart">
        <h1>you haven't added anything</h1>
      </div>
    );
  };

  const CART_BASKET = () => {
    return (
      <React.Fragment>
        <div className="cart_basket">
          <CART_ITEMS />
        </div>
        <div>
          <div style={{ marginLeft: "50vw", marginRight: "20px" }}>
            <h4>subtotal:&#36;{totalprice}</h4>
            <h4>shipping:&#36;{Math.round(totalprice / 1000) * 100}</h4>
            <hr></hr>
            <h2>
              TOTAL:&#36;{totalprice + Math.round(totalprice / 1000) * 100}
            </h2>
          </div>

          <button className="cashout_button"
            onClick={() => {
              setShowimage(!showimage);
            }}
          >
            cashout
          </button>
          <br></br>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div>
      <h1
        style={{
          background: "#00a4bd",
          color: "white",
          marginTop: "10px",
          padding: "20px",
        }}
      >
        Cart
      </h1>
      {mycart.length < 1 ? <EMPTY_CART /> : <CART_BASKET />}
      <br></br>
      <div style={{ display: showimage ? "flex" : "none" }}>
        <div
          style={{
            alignItems: "center",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={require("./images/cashout.jpg")}
            alt="product"
            style={{ width: "60%", height: "auto", borderRadius: "20px" }}
          />

          <h1 style={{ padding: "10px" }}>so you get this much money?</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
