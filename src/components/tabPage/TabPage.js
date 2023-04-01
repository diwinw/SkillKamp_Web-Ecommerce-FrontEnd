import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import HomePage from "../homePage/HomePage";
import StoryPage from "../storyPage/StoryPage";
const TabPage = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <HomePage />
        </Tab>
        <Tab eventKey="shop" title="Shop Collection">
          test2
        </Tab>
        <Tab eventKey="story" title="Our Story">
          <StoryPage />
        </Tab>

        <Tab eventKey="login" title="Login">
          <FontAwesomeIcon icon={faUser} />
        </Tab>
        <Tab eventKey="cart" title="Cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Tab>
      </Tabs>
    </>
  );
};
export default TabPage;
