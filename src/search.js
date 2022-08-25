import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search_product } from "./header.js";
import { site_data, cart, discounted_sales, liked } from "./site_data";
import General from "./General.js";

alert (Search_product)
const Search = function () {
//   const [sellingproducts, setSellingproducts] = useState(site_data);
//   const [mysearch, setMysearch] = useState(
//     'search_product'
//   );
//   const [mysearch2, setMysearch2] = useState(
//     document.querySelector(".search_input2").innerText
//   );

  // const [myliked, setMyliked] = useState(liked);
  //     let search_input = document.querySelector(".search_input").value;
  //     let search_input2 = document.querySelector(".search_input2").value;
  //     const The_product = () =>{
  // site_data.map((product)=>{
  //     if(product.name == search_input){
  //         return <p>found one</p>
  //     } else return <p>none found</p>
  // })
  //     }

  //REAL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   function filter_search(product) {
//     if (
//       mysearch.toLowercase() == product.name.toLowerCase() ||
//       mysearch.toLowercase() == product.category.toLowerCase()
//     ) {
//       return product;
//     }
//   }
//   const The_product = () => {
//     return sellingproducts.filter(filter_search).map((item) => {
//       const { category, brand, img, price, quantity, id, liked } = item;

//       return (
//         <div className="selling_item" key={id}>
//           <button
//             type="button"
//             onClick={() => {
//               General.favourite(id);
//             }}
//             className="favourite_button"
//           >
//             <img src={liked} alt="favourites" />
//           </button>
//           <img src={img} alt={category} className="selling_item_image" />
//           <Link
//             to={"Product"}
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <p>see more...</p>
//           </Link>
//           <h2>{brand}</h2>
//           <h4>Price(each):&#36;{price}</h4>
//           <h4>Quantity:{quantity}</h4>
//           <div className="button_functions">
//             <button
//               type="button"
//               onClick={() => {
//                 General.decreament(id);
//               }}
//             >
//               -1
//             </button>
//             <button
//               type="button"
//               onClick={() => {
//                 General.reset(id);
//               }}
//             >
//               reset
//             </button>
//             <button
//               type="button"
//               onClick={() => {
//                 General.increament(id);
//               }}
//             >
//               +1
//             </button>
//           </div>
//           <button
//             type="button"
//             className="add_to_cart"
//             onClick={() => {
//               General.add_to_cart(id);
//             }}
//           >
//             Add to cart
//           </button>
//         </div>
//       );
//     });
  //REAL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



    // return sellingproducts.map((item) => {
    //   const { category, brand, img, price, quantity, id, liked } = item;

    //   return (
    //     <div className="selling_item" key={id}>
    //       <button
    //         type="button"
    //         onClick={() => {
    //           General.favourite(id);
    //         }}
    //         className="favourite_button"
    //       >
    //         <img src={liked} alt="favourites" />
    //       </button>
    //       <img src={img} alt={category} className="selling_item_image" />
    //       <Link
    //         to={"Product"}
    //         style={{ textDecoration: "none", color: "black" }}
    //       >
    //         <p>see more...</p>
    //       </Link>
    //       <h2>{brand}</h2>
    //       <h4>Price(each):&#36;{price}</h4>
    //       <h4>Quantity:{quantity}</h4>
    //       <div className="button_functions">
    //         <button
    //           type="button"
    //           onClick={() => {
    //             General.decreament(id);
    //           }}
    //         >
    //           -1
    //         </button>
    //         <button
    //           type="button"
    //           onClick={() => {
    //             General.reset(id);
    //           }}
    //         >
    //           reset
    //         </button>
    //         <button
    //           type="button"
    //           onClick={() => {
    //             General.increament(id);
    //           }}
    //         >
    //           +1
    //         </button>
    //       </div>
    //       <button
    //         type="button"
    //         className="add_to_cart"
    //         onClick={() => {
    //           General.add_to_cart(id);
    //         }}
    //       >
    //         Add to cart
    //       </button>
    //     </div>
    //   );
    // });
//   };

  return (
    <div>
      <h1>Search</h1>
      {/* <The_product /> */}
      {/* <General_display/> */}
    </div>
  );
};

export default Search;
