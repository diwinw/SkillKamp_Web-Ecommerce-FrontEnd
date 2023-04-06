import React, { useState } from "react";
import Card from "react-bootstrap/Card";
const Product = (props) => {
  const { id, name, price, image } = props;

  const handleClick = () => {
    // localStorage.clear();
    fetch("http://localhost:8844/api/products/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("id", data.id);
        localStorage.setItem("name", data.name);
        localStorage.setItem("description", data.description);
        localStorage.setItem("price", data.price);
        localStorage.setItem("stock", data.stock);
        localStorage.setItem("category_id", data.category_id);
        localStorage.setItem("image", data.image);
        // console.log(data[0]);
        window.location.href = "/products";
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {/* <Link to={`/products/${products.id}`}> */}

      <Card style={{ width: "18rem" }} className="text-center">
        <a href="#" onClick={handleClick}>
          <Card.Img
            variant="top"
            // src={props.image}
            src={image}
            style={{ width: "300px", height: "300px" }}
            className="mx-auto my-3"
          />

          <Card.Body>
            <Card.ImgOverlay className="d-flex align-items-center ">
              {/* <button
                variant="primary"
                className="w-100 tn btn btn-light text-secondary opacity-50"
                onClick={handleClick}
              >
                <QuickView product={products} show={isOpen} onHide={false} />
                Quick View
              </button> */}
            </Card.ImgOverlay>
            {/* <Card.Title>{props.name}</Card.Title> */}
            <Card.Title>{name}</Card.Title>
            {/* <Card.Text>{props.price}</Card.Text> */}
            <Card.Text>{price}</Card.Text>
          </Card.Body>
        </a>
        <button
          style={{ width: "100%" }}
          className=" btn  btn-outline-dark"
          onClick={handleClick}
        >
          View Detail
        </button>
      </Card>
    </>
  );
};

export default Product;
