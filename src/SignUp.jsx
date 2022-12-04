import "./Login.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Password & username policy
const MIN_USER_CHARS = 4;

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

function ShowError(error) {
  const myElement = (
    <Form.Label style={{ whiteSpace: "pre-line", color: "red" }}>
      {error}
    </Form.Label>
  );
  const root = ReactDOM.createRoot(
    document.getElementById("errorGroup")
  ).render(myElement);
}

function SingUpForm() {
  let email, user, pswd1, pswd2, terms;
  const navigate = useNavigate();
  //const [user, setCount] = useState(0);
  const setEmail = (value) => {
    email = value;
  };
  const setUser = (value) => {
    user = value;
  };
  const setPswd1 = (value) => {
    pswd1 = value;
  };
  const setPswd2 = (value) => {
    pswd2 = value;
  };
  const setTerms = (value) => {
    // TODO: fix this workaround
    if (value && !terms) {
      terms = true;
    } else {
      terms = false;
    }
  };

  function SingUpFirebase(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  function CheckFormInput() {
    let check = true;
    let errorMsg = "";
    // TODO: ADD REGEX OR CHANGE VALIDATION METHOD
    if (email == null) {
      check = false;
      errorMsg += "-You have to provide a mail!\n";
    } else if (email.cont) {
    }
    if (user == null) {
      check = false;
      errorMsg += "-You have to input a username!\n";
    } else if (user.length < MIN_USER_CHARS) {
      check = false;
      errorMsg += "-Username needs to have at least 6 characters\n";
    }
    if (pswd1 == null) {
      check = false;
      errorMsg += "-You have to input a password!\n";
    } else if (pswd1.length < 6) {
      check = false;
      errorMsg += "-Password needs to have at least 6 characters\n";
    }
    if (pswd1 != pswd2) {
      check = false;
      errorMsg += "-Passwords don't match\n";
    }
    if (!terms) {
      check = false;
      errorMsg += "-You have to accept the terms to continue\n";
    }
    if (check) {
      SingUpFirebase(email, pswd1);
    } else {
      ShowError(errorMsg);
    }
  }

  return (
    <Form className="form-input">
      <div id="checkll"></div>
      <Form.Label className="d-flex justify-content-center">Sing up</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/*   */}
        <Form.Label>E-mail:</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          required
          type=""
          placeholder=""
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter password:</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder=""
          value={pswd1}
          onChange={(e) => setPswd1(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat password:</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder=""
          value={pswd2}
          onChange={(e) => setPswd2(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={<SingUpLabel />}
          required
          onChange={(e) => setTerms(e.target.value)}
          checked={terms}
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
        <a></a>
      </Form.Group>
      <Form.Group className="mb-3" controlId="" id="errorGroup"></Form.Group>
      <Form.Group className="d-flex justify-content-center">
        <Button
          onClick={() => CheckFormInput()}
          className="login-btn"
          // type="submit"
        >
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
