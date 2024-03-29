import "./Login.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
import { auth, singOut } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// Container of the log in elements
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
// Log in form
function LoginForm() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const [pswd, setPswd] = useState('');

  function LogInFireBase() {
    signInWithEmailAndPassword(auth, email, pswd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.emailVerified){
          navigate(-1);
        } else {
          alert("You have to verify your account! Check your inbox, if you don't see the e-mail check the spam box.");
          singOut();
        }
        
        // alert("USER SIGNED IN");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(error.message);
      });
  }

  const checkFormInput = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      LogInFireBase();
    }
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  }

  return (
    <Form
      className="form-input"
      validated={validated}
      onSubmit={checkFormInput}
      noValidate
    >
      <Form.Label className="d-flex justify-content-center">Log in</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control
          type="email"
          placeholder="manel@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Account password"
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="d-flex justify-content-center">
        <Button
          className="login-btn"
          type="submit"
          // onClick={() => LogInFireBase()}
        >
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
