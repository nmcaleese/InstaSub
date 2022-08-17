import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    //delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <Navbar bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="/subplan/index">InstaSub</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/subplan/new">Create a new SubPlan</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{user.name} &nbsp;{" "}
            <Button onClick={handleLogOut}>Logout?</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
