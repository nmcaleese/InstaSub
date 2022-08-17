import { Component, useState } from "react";
import { signUp } from "../../utilities/users-service";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

// export default function SignUpForm() {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       password: '',
//       confirm: '',
//       error: ''
//     })

//     function handleChange(evt) {
//       setFormData({
//         ...formData,
//         [evt.target.name]: evt.target.value,
//         error: ''
//       })
//     }

//     function handleSubmit(evt) {
//       evt.preventDefault();
//       alert(JSON.stringify(formData));
//     }

//     const disable = formData.password !== formData.confirm;

//     return (
//       <div>
//         <div className="form-container">
//           <form autoComplete="off" onSubmit={handleSubmit}>
//             <label>Name</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//             <label>Email</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//             <label>Password</label>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//             <label>Confirm</label>
//             <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
//             <button type="submit" disabled={disable}>SIGN UP</button>
//           </form>
//         </div>
//         <p className="error-message">&nbsp;{formData.error}</p>
//       </div>
//     );
//   }

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;

      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <style type="text/css">
          {`
      .view-FirstFive-card {
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
                  <h1>Create an account</h1>
                  <Form autoComplete="off" onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId={this.state.name}>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId={this.state.email}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId={this.state.password}
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder=" Password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId={this.state.confirm}>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder=" Confirm password"
                        name="confirm"
                        onChange={this.handleChange}
                        value={this.state.confirm}
                        required
                      />
                    </Form.Group>
                    <Button variant="success" type="submit">
                      Sign Up
                    </Button>
                  </Form>
                  <p className="error-message">&nbsp;{this.state.error}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
