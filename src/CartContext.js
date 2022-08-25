import React, { useContext } from "react";
import { cart } from "./site_data";

const Cart_content = React.createContext();
const Cart_content_update = React.createContext();

export function use_cart_content(){
    return useContext(Cart_content)
}
export function use_cart_content_update(){
    return useContext(Cart_content_update)
}



export function Cart_Provider({ children }) {
  const [mycart, setMycart] = useState(cart);

  function cart_setmycart() {
    setMycart(mycart);
  }

  return (
    <Cart_content.Provider value={mycart}>
      <Cart_content_update.Provider value={cart_setmycart}>
        {children}
        </Cart_content_update.Provider>
    </Cart_content.Provider>
  );
}
