import { useState } from "react";
import * as FirstFiveAPI from "../../utilities/firstFive-api";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function CreateNewFirstFiveForm({ handleAdd }) {
  const [prompt, setPrompt] = useState({
    title: "",
    prompt: "",
  });

  const [error, setError] = useState("");

  function handleChange(evt) {
    setPrompt({ ...prompt, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newFirstFive = await FirstFiveAPI.createFirstFive(prompt);
      handleAdd(newFirstFive);
      setPrompt({
        title: "",
        prompt: "",
      });
    } catch {
      setError("Failed to save prompt");
    }
  }

  return (
    <>
      <style type="text/css">
        {`
        .new-FirstFive-container{
          background: rgba(241, 241, 241, 1);
          box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        }
        .new-FirstFive-card {
          background: rgba(0, 0, 0, 0)
        }
        `}
      </style>

      <Container bsPrefix="new-FirstFive-container">
        <Card bsPrefix="new-FirstFive-card">
          <Card.Body className="p-3">
            <h1>New First Five</h1>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId={prompt.title}>
                <Form.Control
                  type="text"
                  placeholder="What do you want to call this First Five?"
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
              <div className="d-grid gap-2">
                <Button
                  variant="success"
                  type="submit"
                  disabled={!(prompt.title && prompt.prompt)}
                >
                  Create
                </Button>
              </div>
            </Form>
            <p className="error-message">&nbsp;{error}</p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
