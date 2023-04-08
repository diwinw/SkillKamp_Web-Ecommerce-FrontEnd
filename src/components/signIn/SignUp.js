import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    try {
      const response = await axios.post(
        "http://localhost:8844/api/auth/signup",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
        }
      );
      if (response.data == "create user success") {
        window.location.href = "/";
      } else {
        window.alert("Signup failed Please try again");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <Form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

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
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
