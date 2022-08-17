import { useState } from "react";
import * as ExitTicketAPI from "../../utilities/exitTicket-api";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function ViewExitTicketForm({
  ExitTicket,
  handleUpdate,
  handleRemove,
}) {
  const [ticket, setTicket] = useState({
    title: ExitTicket.title,
    question: ExitTicket.question,
  });

  const [error, setError] = useState("");

  function handleChange(evt) {
    setTicket({ ...ticket, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      ticket.id = ExitTicket._id;
      const updatedExitTicket = await ExitTicketAPI.updateExitTicket(ticket);
      handleUpdate(updatedExitTicket);
    } catch {
      setError("Failed to update Exit Ticket");
    }
  }

  async function handleDelete() {
    try {
      const deletedExitTicketId = await ExitTicketAPI.deleteExitTicket(
        ExitTicket
      );
      handleRemove(deletedExitTicketId);
    } catch {
      setError("failed to delete");
    }
  }

  return (
    <>
      <style type="text/css">
        {`
      .view-ExitTicket-card {
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
                <h1>Update Exit Ticket</h1>
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
