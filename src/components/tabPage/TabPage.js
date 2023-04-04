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
import Cookies from "js-cookie";
const TabPage = () => {
  const [token, setToken] = useState(null);
  const [BtUser, setBtUser] = useState(true);

  useEffect(() => {
    const cookieName = Cookies.get("token");
    if (cookieName) {
      setToken(cookieName);
      setBtUser(false);
    }
  }, []);

  function handleLogin() {
    Cookies.set("token", null);
    setBtUser(true);
    // window.location.reload();
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
        <Tab
          eventKey="contract"
          title={<span style={{ color: "black" }}>Contract</span>}
        >
          Contact Us
        </Tab>
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
                <button className="btn btn-outline-dark " onClick={handleLogin}>
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
              <FontAwesomeIcon icon={faCartShopping} /> 0
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
