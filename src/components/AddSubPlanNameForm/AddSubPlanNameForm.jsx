import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function AddSubPlanNameForm({
  setActiveModule,
  setPopulatedModules,
  populatedModules,
}) {
  const [name, setName] = useState({
    name: "",
  });

  const [error, setError] = useState("");

  function handleChange(evt) {
    setName({ ...name, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function addName(evt) {
    evt.preventDefault();
    const populatedModulesCopy = populatedModules;
    populatedModulesCopy.splice(0, 1, name);
    setPopulatedModules(populatedModulesCopy);
    setActiveModule(null);
  }

  return (
    <>
      <style type="text/css">
        {`
        .new-name-container{
          background: rgba(241, 241, 241, 1);
          box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        }
        .new-name-card {
          background: rgba(0, 0, 0, 0)
        }
        `}
      </style>

      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }}>
            <Card bsPrefix="new-name-container">
              <Card.Body className="p-3">
                <h1>What do you want to name this Sub Plan?</h1>
                <Form autoComplete="off" onSubmit={addName}>
                  <Form.Group className="mb-3" controlId={name.name}>
                    <Form.Control
                      type="text"
                      placeholder="What do you want to call this Sub Plan?"
                      name="name"
                      onChange={handleChange}
                      value={name.name}
                      required
                    />
                  </Form.Group>
                  <br />
                  <div className="d-grid gap-2">
                    <Button
                      variant="success"
                      type="submit"
                      disabled={!name.name}
                    >
                      Create
                    </Button>
                  </div>
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
