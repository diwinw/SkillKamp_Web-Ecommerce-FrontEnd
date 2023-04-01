import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 text-center"
            style={{ marginBottom: 30, marginTop: 30 }}
          >
            <span style={{ letterSpacing: "0.1em" }}>happy kids</span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 text-center">
            <div className="row">
              <span style={{ letterSpacing: "normal" }}>Home</span>
              <span style={{ letterSpacing: "normal" }}>Shop Collection</span>
              <span style={{ letterSpacing: "normal" }}>Our Story</span>
              <span style={{ letterSpacing: "normal" }}>Contact</span>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="/facebook.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ marginRight: 30 }}
              alt="React Bootstrap logo"
            />
            <img
              src="/pinterest.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <img
              src="/instagram.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ marginLeft: 30 }}
              alt="React Bootstrap logo"
            />
          </div>
          <div className="col-md-4 text-center">
            <div className="row">
              <span style={{ letterSpacing: "normal" }}>
                Shipping & Returns
              </span>
              <span style={{ letterSpacing: "normal" }}>Store Policy</span>
              <span style={{ letterSpacing: "normal" }}>Payment Methods</span>
              <span style={{ letterSpacing: "normal" }}>FAQ</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-md-12 text-center"
            style={{ marginBottom: 30, marginTop: 30 }}
          >
            <span style={{ letterSpacing: "0.1em" }}>
              Join Our Mailing List
            </span>
            <form>
              <div
                classname="form-group"
                style={{ marginBottom: 20, marginTop: 20 }}
              >
                <input
                  type="email"
                  classname="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email hear*"
                  style={{ width: "30ch" }}
                />
                <button
                  type="submit"
                  classname="btn btn-primary"
                  style={{
                    marginLeft: 10,
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <p> &copy; 2035 by happy kids</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
