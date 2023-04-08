import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../image/homePage/Banner1.png";
import Banner2 from "../../image/homePage/Banner2.png";
import Banner3 from "../../image/homePage/Banner3.png";
// import Product from "../product/Product";
import SlideShow from "../slideShow/SlideShow";
const HomePage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h1>New Collections</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />
          <Carousel.Caption>
            <h1>New Collections</h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />
          <Carousel.Caption>
            <h1>New Collections</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h2>New Arrivals</h2>
          </div>
        </div>
      </div>
      <SlideShow />
      <div class="container text-center">
        <div class="row">
          <div class="col">
            {/* <button type="button" class="btn btn-dark">
              Shop All
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
