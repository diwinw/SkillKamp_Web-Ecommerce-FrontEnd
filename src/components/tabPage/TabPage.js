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
const TabPage = () => {
  const [token, setToken] = useState(null);
  const [BtUser, setBtUser] = useState(true);

  useEffect(() => {
    const cookieName = localStorage.getItem("token");
    if (cookieName == null) {
      setBtUser(true);
    } else {
      setBtUser(false);
    }
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
                {/* <FontAwesomeIcon icon={faUser} />{" "} */}
                <button
                  className="btn btn-outline-dark "
                  onClick={handleLogOut}
                >
                  LogOut
                </button>
              </span>
            }
          ></Tab>
        )}

        <Tab
          eventKey="cart"
          title={
            <span style={{ color: "black" }}>
              <Link to="/cart" onClick={handleClick}>
                <FontAwesomeIcon icon={faCartShopping} /> 0
              </Link>
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
