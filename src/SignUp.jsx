import "./Login.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Stack } from "react-bootstrap";
import { auth, singOut } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

// Password & username policy
const MIN_USER_CHARS = 3;
// Contains the elements of the sign up elements
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
// Shows an error when some user input is not correct
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
// Sign up form
function SingUpForm() {
  const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState('');

  const [username, setUser] = useState('');

  const [pswd1, setPswd1] = useState('');

  const [pswd2, setPswd2] = useState('');

  const [terms, setTerms] = useState('');

  const navigate = useNavigate();
  //const [user, setCount] = useState(0);
  // const setEmail = (value) => {
  //   email = value;
  // };
  // const setUser = (value) => {
  //   username = value;
  // };
  // const setPswd1 = (value) => {
  //   pswd1 = value;
  // };
  // const setPswd2 = (value) => {
  //   pswd2 = value;
  // };
  // const setTerms = (value) => {
  //   // TODO: fix this workaround
  //   if (value && !terms) {
  //     terms = true;
  //   } else {
  //     terms = false;
  //   }
  // };

  // Creates an account on the FireBase server
  function SingUpFirebase(email, password, username) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        updateProfile(auth.currentUser, {
          displayName: username
        })
        sendEmailVerification(auth.currentUser)
        .then(() => {
          alert("We have sended a verification e-mail to your inbox")
          singOut();
          navigate(-1);
        });
        // const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(error.message);
      });
  }
  // Checks the user input
  const checkFormInput = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      let check = true;
      let errorMsg = "";
      // TODO: ADD REGEX OR CHANGE VALIDATION METHOD
      if (email == null) {
        // check = false;
        // errorMsg += "-You have to provide a mail!\n";
      } else if (email.cont) {
      }
      if (username == null) {
        // check = false;
        // errorMsg += "-You have to input a username!\n";
      } else if (username.length < MIN_USER_CHARS) {
        check = false;
        errorMsg += "-Username needs to have at least 6 characters\n";
      }
      if (pswd1 == null) {
        // check = false;
        // errorMsg += "-You have to input a password!\n";
      } else if (pswd1.length < 6) {
        check = false;
        errorMsg += "-Password needs to have at least 6 characters\n";
      }
      if (pswd1 != pswd2) {
        check = false;
        errorMsg += "-Passwords don't match\n";
      }
      // if (!terms) {
      //   check = false;
      //   errorMsg += "-You have to accept the terms to continue\n";
      // }
      if (check) {
        SingUpFirebase(email, pswd1, username);
      } else {
        ShowError(errorMsg);
      }
    }
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  };

  return (
    <Form
      className="form-input"
      noValidate
      validated={validated}
      onSubmit={checkFormInput}
    >
      <div id="checkll"></div>
      <Form.Label className="d-flex justify-content-center">Sing up</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/*   */}
        <Form.Label>E-mail:</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="manel@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          You need to provide a valid e-mail
        </Form.Control.Feedback>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          required
          type=""
          placeholder="Manel"
          value={username}
          onChange={(e) => setUser(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          You need to provide a valid username (3 length or more)
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter password:</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Good password"
          value={pswd1}
          onChange={(e) => setPswd1(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          You need to provide a valid password (6 chars or more)
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat password:</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Repeat good password"
          value={pswd2}
          onChange={(e) => setPswd2(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          The password needs to match the previous one
        </Form.Control.Feedback>
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
          // onClick={() => CheckFormInput()}
          className="login-btn"
          type="submit"
        >
          Register
        </Button>
      </Form.Group>
    </Form>
  );
}
// Terms of use label
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
