import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../image/homePage/Banner1.png";
import Banner2 from "../../image/homePage/Banner2.png";
import Banner3 from "../../image/homePage/Banner3.png";
import Product1 from "../../image/productRmBg/Product1-removebg-preview.png";
import Product2 from "../../image/productRmBg/Product2-removebg-preview.png";
import Product3 from "../../image/productRmBg/Product3-removebg-preview.png";
import Product4 from "../../image/productRmBg/Product4-removebg-preview.png";
import Product5 from "../../image/productRmBg/Product5-removebg-preview.png";
import Product6 from "../../image/productRmBg/Product6-removebg-preview.png";
import Product7 from "../../image/productRmBg/Product7-removebg-preview.png";
import Product8 from "../../image/productRmBg/Product8-removebg-preview.png";
import Product9 from "../../image/productRmBg/Product9-removebg-preview.png";
import SlideShow from "../slideShow/SlideShow";
import "./HomePage.css";
const HomePage = () => {
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setShowImage(window.innerWidth > 1280);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // set initial value

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h1>New Collections</h1>

            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="image-container">
                    {showImage && <img src={Product1} alt="product1" />}
                  </div>
                  <div className="col">
                    <div className="image-container-down">
                      {showImage && <img src={Product2} alt="product2" />}
                    </div>
                  </div>
                  <div className="col">
                    <div className="image-container-right">
                      {showImage && <img src={Product3} alt="product3" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />
          <Carousel.Caption>
            <h1>New Collections</h1>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="image-container">
                    {showImage && <img src={Product4} alt="product1" />}
                  </div>
                  <div className="col">
                    <div className="image-container-down">
                      {showImage && <img src={Product5} alt="product2" />}
                    </div>
                  </div>
                  <div className="col">
                    <div className="image-container-right">
                      {showImage && <img src={Product6} alt="product3" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />
          <Carousel.Caption>
            <h1>New Collections</h1>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="image-container">
                    {showImage && <img src={Product7} alt="product1" />}
                  </div>
                  <div className="col">
                    <div className="image-container-down">
                      {showImage && <img src={Product8} alt="product2" />}
                    </div>
                  </div>
                  <div className="col">
                    <div className="image-container-right">
                      {showImage && <img src={Product9} alt="product3" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h2>New Arrivals</h2>
          </div>
        </div>
      </div>
      <SlideShow />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            {/* <button type="button" className ="btn btn-dark">
              Shop All
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
