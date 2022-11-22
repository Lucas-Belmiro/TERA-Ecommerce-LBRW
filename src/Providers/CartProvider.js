import React, { useState, useEffect } from "react";

export const CartContext = React.createContext({});

export const CartProvider = (props) => {
  const [numeroDeitems, setNumeroDeitems] = useState(0);

  return (
    <CartContext.Provider value={{ numeroDeitems, setNumeroDeitems }}>
      {props.children}
    </CartContext.Provider>
  );
};
