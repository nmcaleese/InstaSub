import { useState } from "react";
import * as ExitTicketAPI from "../../utilities/exitTicket-api";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function CreateNewExitTicketForm({ handleAdd }) {
  const [ticket, setTicket] = useState({
    title: "",
    question: "",
  });

  const [error, setError] = useState("");

  function handleChange(evt) {
    setTicket({ ...ticket, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newExitTicket = await ExitTicketAPI.createExitTicket(ticket);
      handleAdd(newExitTicket);
      setTicket({
        title: "",
        question: "",
      });
    } catch {
      setError("Failed to save Exit Ticket");
    }
  }

  return (
    <>
      <style type="text/css">
        {`
          .new-ExitTicket-container{
            background: rgba(241, 241, 241, 1);
            box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
          }
          .new-ExitTicket-card {
            background: rgba(0, 0, 0, 0)
          }
          `}
      </style>

      <Container bsPrefix="new-ExitTicket-container">
        <Card bsPrefix="new-ExitTicket-card">
          <Card.Body className="p-3">
            <h1>New Exit Ticket</h1>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId={ticket.title}>
                <Form.Control
                  type="text"
                  placeholder="What do you want to call this Exit Ticket?"
                  name="title"
                  onChange={handleChange}
                  value={ticket.title}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId={ticket.question}>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="What question should students respond to?"
                  name="question"
                  onChange={handleChange}
                  value={ticket.question}
                  required
                />
              </Form.Group>
              <br />
              <div className="d-grid gap-2">
                <Button
                  variant="success"
                  type="submit"
                  disabled={!(ticket.title && ticket.question)}
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
