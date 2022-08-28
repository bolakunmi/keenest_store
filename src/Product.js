import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { site_data } from "./site_data";
import { Cart_context } from "./App.js";

const Product = function () {
  const [sellingproducts, setSellingproducts] = useState(site_data);
  const { mycart, setMycart } = useContext(Cart_context);
  const [selected_product, setSelected_product] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id)
    const newProduct = site_data.find(
      (item) => item.id.toString() === id.toString()
    );
    setSelected_product(newProduct);
  }, []);

  const The_product = () => {
    return (
      <div className="selling_item" key={selected_product.id}>
        {/* import a default image for products that dont have images */}
        <img
          src={selected_product.img}
          alt={selected_product.category}
          className="selling_item_image"
        />

        <h2>{selected_product.brand || "others"}</h2>
        <h4>Price(each):&#36;{selected_product.price}</h4>
        <p>About:{selected_product.description}</p>
      </div>
    );
  };

  return (
    <div>
      <The_product />
    </div>
  );
};

export default Product;
