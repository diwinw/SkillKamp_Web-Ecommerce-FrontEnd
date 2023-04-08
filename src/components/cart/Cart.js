import React, { useState, useEffect } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove, faBackward } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const [noDataFlag, setNodataFlag] = useState(true);
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
          if (data.length > 5) {
            setNodataFlag(false);
            setCartInfos(JSON.parse(data));
            console.log(cartInfos);
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

  const handleRemove = (id) => {
    const cookieName = localStorage.getItem("token");
    fetch("http://localhost:8844/api/cart/remove", {
      method: "GET",
      headers: {
        accept: "*/*",
        token: cookieName,
        id: id,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        window.location.href = "/cart";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const total = cartInfos.reduce(
    (accumulator, current) => accumulator + current.price * current.stock,
    0
  );

  const handleAddStock = (stock, productId) => {
    const cookieName = localStorage.getItem("token");
    fetch("http://localhost:8844/api/cart/update", {
      method: "GET",
      headers: {
        accept: "*/*",
        token: cookieName,
        id: productId,
        quantity: stock,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/cart";
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="container text-left">
        <div class="row">
          <a href="/shop-collection">
            <FontAwesomeIcon icon={faBackward} />
            {" Go Back"}
          </a>
        </div>
      </div>
      {noDataFlag ? (
        <div className="container text-center">
          <div className="row">
            <h2>No Product</h2>
          </div>
        </div>
      ) : (
        cartInfos.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="container ">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="col">
                      <h5>{product.name}</h5>
                      {/* <p className="quantity" style={{ textAlign: "left" }}>
                        Quantity: {product.stock}
                      </p> */}
                      <h5 className="price" style={{ textAlign: "left" }}>
                        Price: ${product.price * product.stock}
                      </h5>
                    </div>
                  </div>
                </div>
                {/* <div className="col ml-auto mt-auto"> */}

                {/* <div className ="container">
                  <div className ="row"> */}
                <div className="col">
                  <div className="col ml-auto mt-auto">
                    <button
                      className="btn btn-light"
                      disabled={product.stock === 1}
                      onClick={() =>
                        handleAddStock(product.stock - 1, product.id)
                      }
                    >
                      -
                    </button>
                    {product.stock}
                    <button
                      className="btn btn-light"
                      onClick={() =>
                        handleAddStock(product.stock + 1, product.id)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* </div>
                </div> */}

                <div className="col ml-auto">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faRemove}
                      onClick={() => handleRemove(product.id)}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h6> Order summary</h6>
            <hr />
            <h6>Subtotal : ${total}</h6>
            <h6>Shiping : Free</h6>
            <h5 style={{ textAlign: "center" }}>Total: ${total}</h5>

            {/* <button class="btn btn-success">Check Out</button> */}
            <button
              className="btn btn-primary"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                We can't accept online orders right now
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Please contact us to complete your purchase.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
