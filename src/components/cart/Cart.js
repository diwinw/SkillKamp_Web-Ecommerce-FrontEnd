import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
const Cart = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const cookieName = Cookies.get("token");
    if (cookieName) {
      setToken(cookieName);
    }
  }, []);
  return (
    <div>
      <h1>{token}</h1>
    </div>
  );
};

export default Cart;
