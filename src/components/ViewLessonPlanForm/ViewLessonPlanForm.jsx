import { useState } from "react";
import * as LessonPlanAPI from "../../utilities/lessonPlan-api";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function ViewLessonPlanForm({
  LessonPlan,
  handleUpdate,
  handleRemove,
}) {
  const [lesson, setLesson] = useState({
    title: LessonPlan.title,
    subject: LessonPlan.subject,
    content: LessonPlan.content,
  });

  const [error, setError] = useState("");

  function handleChange(evt) {
    setLesson({ ...lesson, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      lesson.id = LessonPlan._id;
      const updatedLessonPlan = await LessonPlanAPI.updateLessonPlan(lesson);
      handleUpdate(updatedLessonPlan);
    } catch {
      setError("Failed to update Lesson");
    }
  }

  async function handleDelete() {
    try {
      const deletedLessonPlanId = await LessonPlanAPI.deleteLessonPlan(
        LessonPlan
      );
      handleRemove(deletedLessonPlanId);
    } catch {
      setError("failed to delete");
    }
  }

  return (
    <>
      <style type="text/css">
        {`
      .view-LessonPlan-card {
        background: rgba(241, 241, 241, 1);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
      }
      `}
      </style>
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Card bsPrefix="view-LessonPlan-card">
              <Card.Body className="p-3">
                <h1>Update Lesson Plan</h1>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId={lesson.title}>
                        <Form.Control
                          type="text"
                          placeholder="What do you want to call the lesson?"
                          name="title"
                          onChange={handleChange}
                          value={lesson.title}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId={lesson.subject}>
                        <Form.Control
                          type="text"
                          placeholder="What is the subject of this lesson"
                          name="subject"
                          onChange={handleChange}
                          value={lesson.subject}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId={lesson.content}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="What is in the lesson?"
                      name="content"
                      onChange={handleChange}
                      value={lesson.content}
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
