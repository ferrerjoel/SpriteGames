import "./Login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
import { auth } from "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginContainer() {
  return (
    <Stack
      gap={3}
      className="d-flex justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="d-flex justify-content-center">SPRITE GAMES</div>
      <Container className="login-container">
        <LoginForm />
      </Container>
    </Stack>
  );
}

function LoginForm() {
  let email, pswd;
  const navigate = useNavigate();

  const setEmail = (value) => {
    email = value;
  };

  const setPswd = (value) => {
    pswd = value;
  };

  function LogInFireBase() {
    signInWithEmailAndPassword(auth, email, pswd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        alert("USER SIGNED IN");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <Form className="form-input">
      <Form.Label className="d-flex justify-content-center">Log in</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder=""
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="d-flex justify-content-center">
        <Button 
        className="login-btn" 
        // type="" 
        onClick={() => LogInFireBase()}>
          Accept
        </Button>
      </Form.Group>
    </Form>
  );
}

export default function Login() {
  return (
    <div className="login-body">
      <LoginContainer />
    </div>
  );
}