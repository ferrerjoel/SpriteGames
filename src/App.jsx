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
import { Alert, Stack } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";

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

  const SingOutButton = (pr) => (
    <Stack
      direction="horizontal"
      className="d-flex align-items-center justify-content-center"
      gap={3}
    >
      <FooterButton onClick={() => singOut()} text="SIGN OUT" />
      <p style={{ marginBottom: 0 }}>Welcome back, {pr.displayName}</p>
    </Stack>
  );

  const OffcanvasLogInButton = (pr) => (
    <>
      <Nav.Link href="/login">LOGIN</Nav.Link>
      <hr />
      <Nav.Link href="/singup">SIGN UP</Nav.Link>
      <hr />
    </>
  );

  const OffcanvasSignOutButton = (pr) => (
    <>
      <Nav.Link href="/login">SING OUT</Nav.Link>
      <hr />
    </>
  );

  const OffcanvasDefaultContent = (pr) => {
    return (
      <>
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
      </>
    );
  };

  function loadHeaderButtons() {
    const header = ReactDOM.createRoot(document.getElementById("header-nav"));
    // const offcanvas = ReactDOM.createRoot(document.getElementById("offcanvas"));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const displayName = user.displayName;
        console.log("USER:" + uid);
        // ...
        header.render(<SingOutButton displayName={displayName} />);
        // offcanvas.render(
        //   <>
        //     <OffcanvasSignOutButton />
        //     <OffcanvasDefaultContent />
        //   </>
        // );
      } else {
        // User is signed out
        console.log("THERE IS NO USER");
        // ...
        header.render(LogInButton);
        // offcanvas.render(
        //   <>
        //     <OffcanvasLogInButton />
        //     <OffcanvasDefaultContent />
        //   </>
        // );
      }
    });
  }

  useEffect(() => {
    loadHeaderButtons();
  });

  return (
    <Navbar className={props.navBarClass} bg={props.navBarBg} expand="lg">
      <Container fluid>
        <Offcanvas className={props.theme} show={show} onHide={handleClose}>
          <Offcanvas.Body>
            {/* setTimeout(() => {window.location.href = "/Login"},5000) */}

            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              id="offcanvas"
            >
              <OffcanvasLogInButton />
              <OffcanvasDefaultContent />
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        <Navbar.Toggle aria-controls="footer" onClick={handleShow} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="header-nav"></Nav>
        </Navbar.Collapse>

        <DropdownButton
          className={props.dropDownTheme}
          id="dropdown-basic-button"
          title={<HeaderIcon src={props.searchIcon} />}
          align="end"
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "150px", marginLeft: "10px" }}
            />
            <Button
              className="btn-outline-custom"
              style={{ marginRight: "10px" }}
              variant="outline-success"
            >
              Search
            </Button>
          </Form>
        </DropdownButton>
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

export const FooterButton = (pr) => {
  return (
    <Button
      href={pr.href}
      className="btn btn-outline-custom m-2 rounded-3"
      type="button"
      onClick={pr.onClick}
      style={{ width: "150px" }}
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
          dropDownTheme="custom-dropdown dropdown-toggle::after search-btn-custom"
          navBarClass="navbar-icon"
        />
        <HeaderTitle title="SPRITE GAMES" />
        <GameGrid />
        <Footer />
      </header>
    </div>
  );
}
