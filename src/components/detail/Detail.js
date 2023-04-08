import React, { useState, useEffect } from "react";
import SlideShow from "../slideShow/SlideShow";
import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
const Detail = () => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [description, setDes] = useState();
  const [price, setprice] = useState();
  const [stock, setstock] = useState();
  const [category_id, setCategory] = useState();
  const [image, setImage] = useState();
  const [randomNumber, setRandomNumber] = useState(null);
  useEffect(() => {
    const random = Math.floor(Math.random() * 15) + 1;
    setRandomNumber(random);
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setDes(localStorage.getItem("description"));
    setprice(localStorage.getItem("price"));
    setstock(localStorage.getItem("stock"));
    setCategory(localStorage.getItem("category_id"));
    setImage(localStorage.getItem("image"));
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

  const handleBack = () => {
    // localStorage.setItem("hompage", "shop");
    window.location.href = "/";
  };
  return (
    <>
      <a href="#" onClick={handleBack}>
        <FontAwesomeIcon icon={faBackward} />
        {" Go Back"}
      </a>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4 ">
            <img src={image} alt={name} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">{name}</h4>
              {description && (
                <p class="card-text">{description.replace(/\r\n/g, "<br>")}</p>
              )}
              <h5 className="">Price: {price}</h5>
              <p clas="text-black-50">stock: {stock}</p>
              <button className="btn btn-warning" onClick={handleClick}>
                Add To Cart
              </button>
              <p class="card-text">
                <small class="text-body-secondary">
                  {randomNumber} other people are viewing this product.
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
