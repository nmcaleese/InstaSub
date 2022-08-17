import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function AuthPage({ setUser }) {
  return (
    
      <Container fluid>
        <h1>Welcome to InstaSub</h1>
        <Row>
          
          <Col>
            <SignUpForm setUser={setUser} />
            </Col>
            
            <Col>
            <LoginForm setUser={setUser} />
          </Col>
        </Row>
      </Container>
    
  );
}
