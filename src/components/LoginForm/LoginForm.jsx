// LoginForm.jsx

import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col >
            <Card bsPrefix="view-Auth-card">
              <Card.Body className="p-3">
                <h1>Already Have an Account?</h1>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId={credentials.email}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={credentials.email}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId={credentials.password}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      value={credentials.password}
                      required
                    />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Log In
                  </Button>
                </Form>
                <p className="error-message">&nbsp;{error}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
