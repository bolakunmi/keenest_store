import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { site_data } from "./site_data";

const Product = function () {
  const [selected_product, setSelected_product] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id)
    const newProduct = site_data.find(
      (item) => item.id.toString() === id.toString()
    );
    setSelected_product(newProduct);
  }, [id]);

  const THE_PRODUCT= () => {
    return (
      <div className="selling_item product" key={selected_product.id}>
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
      <THE_PRODUCT />
    </div>
  );
};

export default Product;
