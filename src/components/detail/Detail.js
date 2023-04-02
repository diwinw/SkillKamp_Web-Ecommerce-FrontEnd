import React from "react";
import SlideShow from "../slideShow/SlideShow";
import Product1 from "../../image/product/Product1.png";
const Detail = () => {
  const product = {
    id: 1,
    name: "Product 1",
    price: "9.99$",
    image: Product1,
  };
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div className="product-list">
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
            </div>
          </div>
        </div>
      </div>
      <SlideShow />
    </>
  );
};

export default Detail;
