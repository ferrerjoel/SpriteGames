import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ReactDOM from "react-dom/client";
import { useEffect } from "react";
import { getSignedUser, getUid, signOut, singOut } from "./firebaseConfig";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const Header = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const LogInButton = (
    <>
      <FooterButton href="/login" text="LOG IN" />
      <FooterButton href="/singup" text="SING UP" />
    </>
  );

  const SingOutButton = (
    <FooterButton onClick={() => singOut()} text="SIGN OUT" />
  );

  function loadHeaderButtons() {
    const root = ReactDOM.createRoot(document.getElementById("header-nav"));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("USER:" + uid);
        // ...
        root.render(SingOutButton);
      } else {
        // User is signed out
        console.log("THERE IS NO USER");
        // ...
        root.render(LogInButton);
      }
    });
  }

  useEffect(() => {
    loadHeaderButtons();
  });

  return (
    <Navbar bg={props.navBarBg} expand="lg">
      <Container fluid>
        <Offcanvas className={props.theme} show={show} onHide={handleClose}>
          <Offcanvas.Body>
            {/* setTimeout(() => {window.location.href = "/Login"},5000) */}

            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="/login">LOGIN</Nav.Link>
              <hr />
              <Nav.Link href="/singup">SIGN UP</Nav.Link>
              <hr />
              <Nav.Link href="#action1">DONATE</Nav.Link>
              <hr />
              <Nav.Link href="#action2">TWITTER</Nav.Link>
              <hr />
              <Nav.Link href="#action1">DISCORD</Nav.Link>
              <hr />
              <Nav.Link href="https://github.com/ferrerjoel">GITHUB</Nav.Link>
              <hr />
              <Nav.Link href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ">
                LEGAL
              </Nav.Link>
              <Icon src="spritegames.png" />
              <a> Sprite Games Copyright 2022 </a>
              <Icon src="monstersinc.png" />
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        <Navbar.Toggle aria-controls="footer" onClick={handleShow} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="header-nav"></Nav>
        </Navbar.Collapse>

        <HeaderIcon src={props.searchIcon} />

        {/* <Navbar.Collapse>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

const GameThumbnail = (pr) => {
  return (
    <a href="/game">
      <div href="/game" className="btn game-thumbnail m-4">
        <img src={pr.src} className="img-fluid" alt={pr.alt} />
      </div>
    </a>
  );
};

const Icon = (pr) => {
  return (
    <div className="btn">
      <img src={pr.src} className="img-fluid" alt={pr.alt} />
    </div>
  );
};

const HeaderIcon = (pr) => {
  return (
    <div className="btn">
      <img
        style={{ width: "50px" }}
        src={pr.src}
        className="img-fluid"
        alt={pr.alt}
      />
    </div>
  );
};

const GameGrid = (pr) => {
  return (
    <div className="container d-flex flex-wrap justify-content-center pb-5">
      <GameThumbnail src="gameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="gameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="gameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="gameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="gameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="gameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="gameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="gameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="gameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="gameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="gameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="gameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="gameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="gameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="gameThumbnails/hollowknight.jpg" />
    </div>
  );
};

export const Footer = (pr) => {
  return (
    <Navbar.Collapse
      className="navbar fixed-bottom navbar-expand-lg footer-bg-custom show"
      id="footer"
    >
      <div className="container-fluid">
        <FooterButton text="DONATE" />
        <FooterButton text="ABOUT US" />
        <FooterButton
          text="LEGAL"
          href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ"
        />
        <FooterButton text="TWITTER" />
        <FooterButton text="DISCORD" />
        <FooterButton
          text="GITHUB"
          href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ"
        />
      </div>
    </Navbar.Collapse>
  );
};

const FooterButton = (pr) => {
  return (
    <Button
      href={pr.href}
      className="btn btn-outline-custom m-2 rounded-3"
      type="button"
      onClick={pr.onClick}
    >
      {pr.text}
    </Button>
  );
};

const HeaderTitle = (pr) => {
  return <div className="header-title mb-4">{pr.title}</div>;
};

export default function App() {
  return (
    <div className="App">
      <header className="App-body">
        <Header
          theme="offcanvas-custom"
          navBarBg="custom-header"
          searchIcon="icons/search-icon.png"
        />
        <HeaderTitle title="SPRITE GAMES" />
        <GameGrid />
        <Footer />
      </header>
    </div>
  );
}
