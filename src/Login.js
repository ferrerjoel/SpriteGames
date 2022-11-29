import "./Login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";

function LoginContainer() {
  return (
    <Stack gap={3} className="d-flex justify-content-center" style={{height: '100vh'}}>
        <div className="d-flex justify-content-center">
            SPRITE GAMES
        </div>
        <Container className="login-container">
            <LoginForm />
        </Container>
    </Stack>
  );
}

function LoginForm() {
  return (
    <Form className="form-input">
    <Form.Label className="d-flex justify-content-center">Log in</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="email" placeholder="" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Form.Group className="d-flex justify-content-center">
        <Button className="login-btn" type="submit">
            Accept
        </Button>
      </Form.Group>

    </Form>
  );
}

export default function Login() {
  return (
    <div className="login-body">
        <LoginContainer  />
    </div>
  );
}
