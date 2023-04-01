import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner4 from "../../image/homePage/Banner4.png";
const StoryPage = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Banner4} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default StoryPage;
