import "./Login.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";

function SingUpContainer() {
  return (
    <Stack
      gap={3}
      className="d-flex justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="d-flex justify-content-center">SPRITE GAMES</div>
      <Container className="login-container">
        <SingUpForm />
      </Container>
    </Stack>
  );
}

function SingUpFirebase(email, password) {
  console.log("HOLA");
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function SingUpForm() {
  var test;
  const set = (value) =>{
    test = value;
  }
  return (
    <Form className="form-input">
      <Form.Label className="d-flex justify-content-center">Log in</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control type="email" placeholder=""  value={test} onChange={(e) => set(e.target.value)}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter password:</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat password:</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={<SingUpLabel />} />
        <a></a>
      </Form.Group>
      <Form.Group className="d-flex justify-content-center">
        <Button onClick={() => SingUpFirebase(test, "A")} className="login-btn">
          Register
        </Button>
      </Form.Group>
    </Form>
  );
}

function SingUpLabel() {
  const styleLink = {
    color: "#6e5480",
    textDecoration: "none",
  };
  return (
    <>
      I accept{" "}
      <a style={styleLink} href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ">
        {" "}
        the terms of use{" "}
      </a>{" "}
      of the page
    </>
  );
}

export default function SingUp() {
  return (
    <div className="login-body">
      <SingUpContainer />
    </div>
  );
}
