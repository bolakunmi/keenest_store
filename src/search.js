import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { site_data} from "./site_data";
import { SEARCH_CONTEXT} from "./App";

const Search = function () {
  const { mysearch} = useContext(SEARCH_CONTEXT);
  // const [list, setList] = useState([]);
  const [empty, setEmpty] = useState(true);
  console.log(empty);

  useEffect(() => {
    if (
      site_data.filter(
        (item) => item.brand.toLowerCase() === mysearch.toLowerCase()
      ).length > 1
    ) {
      return setEmpty(false);
    } else {
      return setEmpty(true);
    }
  },[mysearch]);

  const NO_RESULT = () => {
    return (
      <div className="no_result">
        <h1>We dont have the item, boss.</h1>
      </div>
    );
    // this was an option to find similars from your search, it has a problem of initite reredering
    // useMemo(() => {
    //   for (var i = 0; i < site_data.length; i++) {
    //     let newProduct = site_data[i];
    //     if (newProduct.brand.toLowerCase().includes(mysearch.toLowerCase())) {
    //        setList(() => {
    //         return [...list,{newProduct}];
    //       });

    //       console.log(newProduct);
    //     }
    //     console.log(list);
    //   }
    // });
  };

  const SEARCH_RESULT = () => {
    return site_data
      .filter((item) => item.brand.toLowerCase() === mysearch.toLowerCase())
      .map((item) => {
        const { category, brand, img, price, quantity, id } = item;

        console.log(empty);

        return (
          <div className="selling_item" key={id}>
            {/* import a default image for products that dont have images */}
            <img src={img} alt={category} className="selling_item_image" />
            <Link
              to={`/product/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <p style={{ float: "right" }}>see more...</p>
            </Link>
            <h2>{brand || "others"}</h2>
            <h4>Price(each):&#36;{price}</h4>
            <h4>Quantity:{quantity || 0}</h4>
          </div>
        );
      });
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
        Search
      </h1>
      <div className="showglass">
        {empty ? <NO_RESULT /> : <SEARCH_RESULT />}
      </div>
    </div>
  );
};

export default Search;
