import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { site_data, cart, discounted_sales, liked } from "./site_data";
import General from "./General.js";
import { Search_context } from "./App";

const Search = function () {
  const {mysearch, setMysearch} = useContext(Search_context)
  console.log(mysearch)
  return (
    <div>
      <h1>Search</h1>
      {/* <The_product /> */}
      {/* <General_display/> */}
    </div>
  );
};

export default Search;
