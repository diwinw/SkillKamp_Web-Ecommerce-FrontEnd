import React from "react";
import "./SlideShow.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../product/Product";
const SlideShow = () => {
  const items = [
    {
      id: 1,
      title: "Item 1",
      description: "Description for item 1",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Item 2",
      description: "Description for item 2",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Item 3",
      description: "Description for item 3",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      title: "Item 3",
      description: "Description for item 3",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      title: "Item 3",
      description: "Description for item 3",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      title: "Item 3",
      description: "Description for item 3",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 7,
      title: "Item 3",
      description: "Description for item 3",
      image: "https://via.placeholder.com/300x200",
    },
    // Add more items as needed
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {items.map((item) => (
        <Product />
      ))}
    </Carousel>
  );
};
export default SlideShow;
