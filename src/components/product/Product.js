import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Product1 from "../../image/product/Product1.png";
import QuickView from "../quickView/QuickView";
const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  const products = {
    id: 1,
    name: "Product 1",
    price: "9.99$",
    image: Product1,
  };

  return (
    <>
      {/* <Link to={`/products/${products.id}`}> */}

      <Card style={{ width: "18rem" }} className="text-center">
        <a href={`/products`}>
          <Card.Img
            variant="top"
            src={products.image}
            style={{ width: "300px", height: "300px" }}
            className="mx-auto my-3"
          />

          <Card.Body>
            <Card.ImgOverlay className="d-flex align-items-center ">
              <button
                variant="primary"
                className="w-100 tn btn btn-light text-secondary opacity-50"
                onClick={handleClick}
              >
                <QuickView product={products} show={isOpen} onHide={false} />
                Quick View
              </button>
            </Card.ImgOverlay>
            <Card.Title>{products.name}</Card.Title>
            <Card.Text>{products.price}</Card.Text>
          </Card.Body>
        </a>
        <button style={{ width: "100%" }} className=" btn  btn-outline-dark">
          View Detail
        </button>
      </Card>
    </>
  );
};

export default Product;
