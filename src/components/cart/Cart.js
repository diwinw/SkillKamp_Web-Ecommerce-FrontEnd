import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = () => {
  const [noDataFlag, setNodataFlag] = useState(true);
  const [items, setItems] = useState({});
  const [cartInfos, setCartInfos] = useState([
    {
      id: 1,
      name: null,
      image: null,
      stock: null,
      price: null,
    },
  ]);

  useEffect(() => {
    const cookieName = localStorage.getItem("token");

    if (cookieName == null) {
      setNodataFlag(true);
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

          if (data.length > 5) {
            setNodataFlag(false);
            setCartInfos(JSON.parse(data));
            console.log(cartInfos);
            // setItems(JSON.parse(data));
            // console.log("cart=" + Object.keys(items));
          } else {
            setNodataFlag(true);
          }
        } catch (error) {
          setNodataFlag(true);
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

  // function handleQualityChange(e, id) {
  //   const newProducts = cartInfos.map((cartInfo) => {
  //     if (cartInfo.id === id) {
  //       return { ...cartInfo, quality: Number(e.target.value) };
  //     }
  //     return cartInfo;
  //   });
  //   setCartInfos(newProducts);
  // }

  const total = cartInfos.reduce(
    (accumulator, current) => accumulator + current.price * current.stock,
    0
  );

  return (
    <div>
      {noDataFlag ? (
        <div class="container text-center">
          <div class="row">
            <div class="col">
              {/* <h1>Cart</h1> */}
              <h2>No Product</h2>
            </div>
          </div>
        </div>
      ) : (
        cartInfos.map((product) => (
          <div class="container text-center">
            <div class="row">
              <div className="cart-product" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <h2>{product.name}</h2>
                  <p className="quantity" style={{ textAlign: "left" }}>
                    Quantity: {product.stock}
                  </p>
                  <p className="price" style={{ textAlign: "left" }}>
                    Price: ${product.price * product.stock}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;
