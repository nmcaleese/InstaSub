import { useState } from "react";
import * as FirstFiveAPI from "../../utilities/firstFive-api";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function ViewFirstFiveForm({
  FirstFive,
  handleUpdate,
  handleRemove,
}) {
  const [prompt, setPrompt] = useState({
    title: FirstFive.title,
    prompt: FirstFive.prompt,
  });

  const [error, setError] = useState("");

  function handleChange(evt) {
    setPrompt({ ...prompt, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      prompt.id = FirstFive._id;
      const updatedFirstFive = await FirstFiveAPI.updateFirstFive(prompt);
      handleUpdate(updatedFirstFive);
    } catch {
      setError("Failed to update prompt");
    }
  }

  async function handleDelete() {
    try {
      const deletedFirstFiveId = await FirstFiveAPI.deleteFirstFive(FirstFive);
      handleRemove(deletedFirstFiveId);
    } catch {
      setError("failed to delete");
    }
  }

  return (
    <>
      <style type="text/css">
        {`
      .view-FirstFive-card {
        background: rgba(241, 241, 241, 1);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
      }
      `}
      </style>
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Card bsPrefix="view-FirstFive-card">
              <Card.Body className="p-3">
                <h1>Update First Five</h1>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId={prompt.title}>
                    <Form.Control
                      type="text"
                      placeholder="What do you want to call this First 5ive?"
                      name="title"
                      onChange={handleChange}
                      value={prompt.title}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId={prompt.prompt}>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="What prompt should students respond to?"
                      name="prompt"
                      onChange={handleChange}
                      value={prompt.prompt}
                      required
                    />
                  </Form.Group>
                  <br />
                  <ButtonGroup className="mb-2">
                    <Button variant="secondary" onClick={handleDelete}>
                      Delete
                    </Button>
                    <Button variant="success" type="submit">
                      Update
                    </Button>
                  </ButtonGroup>
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
