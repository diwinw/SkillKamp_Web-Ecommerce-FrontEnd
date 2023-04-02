import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import HomePage from "../homePage/HomePage";
import StoryPage from "../storyPage/StoryPage";
import ShopAll from "../shopAll/ShopAll";
const TabPage = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3  justify-content-center .text-dark"
      >
        <Tab
          eventKey="home"
          title={<span style={{ color: "black" }}>Home</span>}
        >
          <HomePage />
        </Tab>
        <Tab
          eventKey="shop"
          title={<span style={{ color: "black" }}>Shop Collection</span>}
        >
          <ShopAll />
        </Tab>
        <Tab
          eventKey="story"
          title={<span style={{ color: "black" }}>Our Story</span>}
        >
          <StoryPage />
        </Tab>
        <Tab
          eventKey="contract"
          title={<span style={{ color: "black" }}>Contract</span>}
        >
          Contact Us
        </Tab>

        <Tab
          eventKey="cart"
          title={
            <span style={{ color: "black" }}>
              <FontAwesomeIcon icon={faUser} /> Login
            </span>
          }
        ></Tab>
        <Tab
          eventKey="cart"
          title={
            <span style={{ color: "black" }}>
              <FontAwesomeIcon icon={faCartShopping} /> 0
            </span>
          }
        ></Tab>
      </Tabs>
    </>
  );
};
export default TabPage;
