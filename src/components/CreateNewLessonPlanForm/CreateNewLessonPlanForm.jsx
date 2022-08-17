import { useState } from "react";
import * as LessonPlanAPI from "../../utilities/lessonPlan-api";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CreateNewLessonPlanForm({ handleAdd }) {
  const [lesson, setLesson] = useState({
    title: "",
    subject: "",
    content: "",
  });

  const [error, setError] = useState("");

  function handleChange(evt) {
    setLesson({ ...lesson, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newLessonPlan = await LessonPlanAPI.createLessonPlan(lesson);
      handleAdd(newLessonPlan);
      setLesson({
        title: "",
        subject: "",
        content: "",
      });
    } catch {
      setError("Failed to save lesson");
    }
  }

  return (
    <>
      <style type="text/css">
        {`
        .new-LessonPlan-container{
          background: rgba(241, 241, 241, 1);
          box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        }
        .new-LessonPlan-card {
          background: rgba(0, 0, 0, 0)
        }
        `}
      </style>

      <Container bsPrefix="new-LessonPlan-container">
        <Card bsPrefix="new-LessonPlan-card">
          <Card.Body className="p-3">
            <h1>New Lesson Plan</h1>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId={lesson.title}>
                    <Form.Control
                      type="text"
                      placeholder="Title of the lesson?"
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
                      type="subject"
                      placeholder="Subject?"
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
                  placeholder="What does the lesson entail?"
                  name="content"
                  onChange={handleChange}
                  value={lesson.content}
                  required
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  variant="success"
                  type="submit"
                  disabled={!(lesson.title && lesson.subject && lesson.content)}
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
