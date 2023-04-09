import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import HomePage from "../homePage/HomePage";
import StoryPage from "../storyPage/StoryPage";
import ShopAll from "../shopAll/ShopAll";
import SignIn from "../signIn/SignIn";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import Detail from "../detail/Detail";
const TabPage = (props) => {
  const [BtUser, setBtUser] = useState(true);

  const [activeKey, setActiveKey] = useState("home");
  useEffect(() => {
    // if (localStorage.getItem("homepage") != null) {
    //   setActiveKey(localStorage.getItem("homepage"));
    //   localStorage.removeItem("homepage");
    // }

    const cookieName = localStorage.getItem("token");
    if (cookieName == null) {
      setBtUser(true);
    } else {
      setBtUser(false);
    }
    setActiveKey(props.page);
  }, 3000);

  const handleClick = (event) => {
    const cookieName = localStorage.getItem("token");
    if (cookieName == null) {
      window.location.href = "/signin";
    } else {
      window.location.href = "/cart";
    }
  };

  function handleLogOut() {
    // Cookies.set("token", null);
    localStorage.clear();
    setBtUser(true);
    window.location.href = "/";
  }
  const handleSelect = (key) => {
    setActiveKey(key);
  };
  return (
    <>
      <Tabs
        defaultActiveKey={activeKey}
        activeKey={activeKey}
        onSelect={handleSelect}
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
          eventKey="detail"
          // hidden="false"
          // title={<span style={{ color: "black" }}>Detail</span>}
        >
          <Detail />
        </Tab>
        {/* <Tab
          eventKey="contract"
          title={<span style={{ color: "black" }}>Contract</span>}
        >
          Contact Us
        </Tab> */}
        {BtUser ? (
          <Tab
            eventKey="login"
            title={
              <span style={{ color: "black" }}>
                <FontAwesomeIcon icon={faUser} /> Log in
              </span>
            }
          >
            <SignIn />
          </Tab>
        ) : (
          // <button onClick={handleLogin}>LogOut</button>
          <Tab
            eventKey="logout"
            title={
              <span style={{ color: "black" }}>
                <FontAwesomeIcon icon={faUser} />
                {/* <FontAwesomeIcon icon={faUser} />{" "} */}
                <a style={{ decoration: "none" }} onClick={handleLogOut}>
                  LogOut
                </a>
              </span>
            }
          ></Tab>
        )}

        <Tab
          eventKey="cart"
          title={
            <span style={{ color: "black" }}>
              <a to="/cart" onClick={handleClick}>
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </span>
          }
        >
          <Cart />
        </Tab>
      </Tabs>
    </>
  );
};
export default TabPage;
