import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Product1 from "../../image/product/Product1.png";
const Product = () => {
  return (
    <Card style={{ width: "18rem" }} className="text-center">
      <Card.Img
        variant="top"
        src={Product1}
        style={{ width: "300px", height: "300px" }}
        className="mx-auto my-3"
      />
      <Card.Body>
        <Card.Title>I'm Product</Card.Title>
        <Card.Text>9.99$</Card.Text>
        <Button variant="outline-secondary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
