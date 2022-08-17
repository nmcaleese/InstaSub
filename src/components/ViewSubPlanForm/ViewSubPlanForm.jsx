import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function ViewSubPlanForm({ SubPlan, deleteSubPlan }) {
  const [error, setError] = useState("");

  return (
    <>
      <style type="text/css">
        {`
      .new-SubPlan-container{
        background: rgba(241, 241, 241, 1);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }   
    .SubPlan-card{
      background: rgba(241, 241, 241, 1);
      border-color: rgba(59, 59, 59, 0);
      box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  }
  .SubPlan-card:hover{
      background: rgba(241, 241, 241, 1);
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  }

.SubPlan-card-text {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(59, 59, 59);
    font-size: 1rem;
}
.FirstFive-card{
  background: rgba(241, 241, 241, 1);
  border-color: rgba(59, 59, 59, 0);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
.FirstFive-card:hover{
  background: rgba(241, 241, 241, 1);
  transform: scale(1.05);
}
      `}
      </style>
      <Container bsPrefix="view-SubPlan-container" fluid>
        <Row>
          <Col md={{ span: 4, offset: 3 }} lg={{ span: 3, offset: 4 }}>
            <Card className="mt-3" style={{ cursor: "pointer" }}>
              <Card.Body bsPrefix="SubPlan-card">
                <h1>{SubPlan.name}</h1>
              </Card.Body>
            </Card>
            <Card className="mt-3" style={{ cursor: "pointer" }}>
              <Card.Body bsPrefix="SubPlan-card">
                <h2>
                  {SubPlan.CI.class} Period {SubPlan.CI.period}
                </h2>
                <Card.Text bsPrefix="SubPlan-card-text">
                  {SubPlan.CI.classroomInstructions}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3" style={{ cursor: "pointer" }}>
              <Card.Body bsPrefix="SubPlan-card">
                <h2>{SubPlan.firstFive.title}</h2>
                <Card.Text bsPrefix="SubPlan-card-text">
                  {SubPlan.firstFive.prompt}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3" style={{ cursor: "pointer" }}>
              <Card.Body bsPrefix="SubPlan-card">
                <h2>
                  {SubPlan.lessonPlan.title}: {SubPlan.lessonPlan.subject}
                </h2>
                <Card.Text bsPrefix="SubPlan-card-text">
                  {SubPlan.lessonPlan.content}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3" style={{ cursor: "pointer" }}>
              <Card.Body bsPrefix="SubPlan-card">
                <h2>{SubPlan.exitTicket.title}</h2>
                <Card.Text bsPrefix="SubPlan-card-text">
                  {SubPlan.exitTicket.question}
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Button variant="primary" href="/subplan/index">
              Back to Sub Plans
            </Button>
            <Button variant="secondary" onClick={() => deleteSubPlan(SubPlan)}>
              Delete
            </Button>
            <p className="error-message">&nbsp;{error}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
