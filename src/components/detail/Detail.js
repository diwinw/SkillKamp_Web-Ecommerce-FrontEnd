import React, { useState, useEffect } from "react";
import SlideShow from "../slideShow/SlideShow";
import "./Detail.css";

const Detail = () => {
  // const [product, setProduct] = useState({
  //   id: 1,
  //   name: "Product 1",
  //   price: "9.99$",
  //   image: Product1,
  // });
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [description, setDes] = useState();
  const [price, setprice] = useState();
  const [stock, setstock] = useState();
  const [category_id, setCategory] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    // const cookieName = localStorage.getItem("product");
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setDes(localStorage.getItem("description"));
    setprice(localStorage.getItem("price"));
    setstock(localStorage.getItem("stock"));
    setCategory(localStorage.getItem("category_id"));
    setImage(localStorage.getItem("image"));
    // localStorage.getItem("name");
    // localStorage.getItem("description");
    // localStorage.getItem("price");
    // localStorage.getItem("stock");
    // localStorage.getItem("category_id");
    // localStorage.getItem("image");
    // if (cookieName) {
    //   console.log(" cookieName =" + JSON.stringify(cookieName));
    //   setProduct(cookieName);
    //   console.log(" product =" + product);
    // } else {
    //   console.log("no product" + cookieName);
    // }
  });

  const handleClick = () => {
    const cookieName = localStorage.getItem("token");
    if (cookieName == null) {
      window.location.href = "/signin";
    }
    fetch("http://localhost:8844/api/cart/update", {
      method: "GET",
      headers: {
        accept: "*/*",
        token: cookieName,
        id: id,
        quantity: 1,
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
    <>
      {/* <div class="container text-center">
        <div class="row">
          <div className="product-list">
            <div key={id}>
              <img src={image} alt={name} />
              <h2>{name}</h2>
              <p>Price: {price}</p>
              <p>stock: {stock}</p>
              <p>{description}</p>
              <button onClick={handleClick}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div> */}
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={image} alt={name} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              {description && (
                <p class="card-text">{description.replace(/\r\n/g, "<br>")}</p>
              )}
              <p>Price: {price}</p>
              <p>stock: {stock}</p>
              <button onClick={handleClick}>Add To Cart</button>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h4>RELATED PRODUCTS</h4>
          </div>
        </div>
      </div>

      <SlideShow />
    </>
  );
};

export default Detail;
