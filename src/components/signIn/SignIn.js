import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    const data = { email, password };
    fetch("http://localhost:8844/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        // console.log(data)
        if (data == "login fail") {
          window.alert("User or password incorrect");
        } else {
          // Cookies.set("token", data);
          localStorage.setItem("token", data);
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div class="container text-center">
        <div class="row">
          <Form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                // type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
            <Link to="/signup">
              <Button variant="light" type="submit">
                Sign Up
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
