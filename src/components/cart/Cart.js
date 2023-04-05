import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartInfos, setCartInfos] = useState([
    {
      id: 1,
      name: null,
      image: null,
      quality: null,
      price: null,
    },
  ]);

  useEffect(() => {
    const cookieName = localStorage.getItem("token");

    if (cookieName == null) {
      // window.location.href = "/signin";
    } else {
      const fetchCart = async () => {
        try {
          const response = await fetch("http://localhost:8844/api/cart", {
            headers: {
              accept: "*/*",
              token: cookieName,
            },
          });
          const data = await response.text();
          // setCartInfos(data);
          console.error(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchCart();
    }
  }, []);

  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     image: "https://via.placeholder.com/150",
  //     quality: 1,
  //     price: 10,
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     image: "https://via.placeholder.com/150",
  //     quality: 2,
  //     price: 20,
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     image: "https://via.placeholder.com/150",
  //     quality: 3,
  //     price: 30,
  //   },
  // ]);

  function handleQualityChange(e, id) {
    const newProducts = cartInfos.map((cartInfo) => {
      if (cartInfo.id === id) {
        return { ...cartInfo, quality: Number(e.target.value) };
      }
      return cartInfo;
    });
    setCartInfos(newProducts);
  }

  const totalSum = cartInfos.reduce((acc, cartInfo) => {
    return acc + cartInfo.quality * cartInfo.price;
  }, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cartInfos.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>
            Quality:{" "}
            <input
              type="number"
              min="1"
              max="10"
              value={product.quality}
              onChange={(e) => handleQualityChange(e, product.id)}
            />
          </p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
      <p>Total: ${totalSum}</p>
    </div>
  );
};

export default Cart;
