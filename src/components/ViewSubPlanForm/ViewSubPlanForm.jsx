import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'


export default function ViewSubPlanForm({SubPlan, deleteSubPlan}) {
 
  const [error, setError] = useState('');



  return (
    <>
    <style type="text/css">
      {`
      .view-SubPlan-card {
        background: rgba(241, 241, 241, 1);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
      }
      `}
    </style>
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Card bsPrefix='view-SubPlan-card'>
              <Card.Body className='p-3'>
                <h1>{SubPlan.name}</h1>
                  <h4>{SubPlan.CI.class}</h4>
                  <h4>{SubPlan.firstFive.title}</h4>
                  <h4>{SubPlan.lessonPlan.title}</h4>
                  <h4>{SubPlan.exitTicket.title}</h4>

              
                  <br />
                    <Button variant='secondary' onClick={()=> deleteSubPlan(SubPlan)} >Delete</Button>
                  <p className="error-message">&nbsp;{error}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}