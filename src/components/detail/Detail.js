import React, { useState, useEffect } from "react";
import SlideShow from "../slideShow/SlideShow";
import Product1 from "../../image/product/Product1.png";
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
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div class="container text-center">
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
      </div>
      <SlideShow />
    </>
  );
};

export default Detail;
