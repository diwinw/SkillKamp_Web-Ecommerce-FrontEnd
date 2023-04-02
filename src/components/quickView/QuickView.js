import React from "react";
import { Button, Modal } from "react-bootstrap";

const QuickView = ({ product, show, onHide }) => {
  return (
    <Modal
      size="xl"
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={product.image}
          alt={product.name}
          style={{ maxWidth: "100%", maxHeight: "400px" }}
        />
        <p>Price: {product.price}</p>
        {/* <Form>
          <Form.Group controlId="size">
            <Form.Label>Size:</Form.Label>
            <Form.Control as="select">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="quantity">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control type="number" value="1" />
          </Form.Group>
        </Form> */}
        <div> Quantity: 15</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark">Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuickView;
