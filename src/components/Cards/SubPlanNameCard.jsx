import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function SubPlanNameCard({ module, idx, removeCard }) {
  return (
    <>
      <style type="text/css">
        {`
            .new-SubPlan-container{
                background: rgba(241, 241, 241, 1);
                box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
            }
            .SubPlan-card{
                background: rgba(241, 241, 241, 0);
                border-color: rgba(59, 59, 59, 0);
            }
            .SubPlan-card:hover{
                background: rgba(241, 241, 241, 1);
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
            }
            `}
      </style>
      <Row>
        <Col md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }}>
          <Container bsPrefix="new-SubPlan-container">
            <OverlayTrigger
              trigger="click"
              key="top"
              placement="top"
              overlay={
                <Popover>
                  <Popover.Header as="h3">
                    Remove the name of this Sub Plan?
                  </Popover.Header>
                  <Popover.Body>
                    <div className="d-grid gap-2">
                      <Button
                        size="md"
                        variant="primary"
                        onClick={() => removeCard(idx)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Popover.Body>
                </Popover>
              }
            >
              <Card
                bsPrefix="SubPlan-card"
                className="mt-3"
                style={{ cursor: "pointer" }}
              >
                <h1>{module.name}</h1>
              </Card>
            </OverlayTrigger>
          </Container>
        </Col>
      </Row>
    </>
  );
}
