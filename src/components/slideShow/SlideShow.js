import React, { useState, useEffect } from "react";
import "./SlideShow.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../product/Product";
const SlideShow = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8844/api/products");
      const data = await response.json();
      setProducts(data);
      console.log(products);
    };

    fetchProducts();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {products.map((product) => (
        <Product
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </Carousel>
  );
};
export default SlideShow;
