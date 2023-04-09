import React, { useState, useEffect } from "react";
import SlideShow from "../slideShow/SlideShow";
import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import "./Detail.css";
import ReviewPage from "../reviewPage/ReviewPage";
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

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col">
            <a href="/shop-collection">
              <FontAwesomeIcon icon={faBackward} />
              {" Go Back"}
            </a>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="col-md-4  ">
              <img src={image} alt={name} />
            </div>
          </div>
          <div className="col">
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              {description && (
                <p className="card-text">
                  {description.replace(/\r\n/g, "<br>")}
                </p>
              )}
              <h5 className="">Price: {price}</h5>
              <p clas="text-black-50">stock: {stock}</p>
              <button className="btn btn-warning" onClick={handleClick}>
                Add To Cart
              </button>
              <p className="card-text">
                <small className="text-body-secondary">
                  {randomNumber} other people are viewing this product.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h4>Review</h4>
            <ReviewPage />
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h4>RELATED PRODUCTS</h4>
          </div>
        </div>
      </div>

      <SlideShow />
    </>
  );
};

export default Detail;
