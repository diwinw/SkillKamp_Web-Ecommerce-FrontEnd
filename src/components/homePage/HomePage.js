import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../image/homePage/Banner1.png";
import Banner2 from "../../image/homePage/Banner2.png";
import Banner3 from "../../image/homePage/Banner3.png";
import Product from "../product/Product";
const HomePage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default HomePage;
