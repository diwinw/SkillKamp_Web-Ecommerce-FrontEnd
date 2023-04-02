import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarPage.css";

const NavbarPage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg justify-content-center header-area font-heading2">
        <div id="headerLink" className="header-link">
          <a className="color-neutral11" href="/">
            Happy kids
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavbarPage;
