import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Stack } from "react-bootstrap";


export const Header = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg={props.navBarBg} expand="lg">
      <Container fluid>
        <Offcanvas className={props.theme} show={show} onHide={handleClose}>
          <Offcanvas.Body>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
                <Nav.Link to="/Login">LOGIN</Nav.Link>
                <hr/>
                <Nav.Link href="#action2">SIGN UP</Nav.Link>
                <hr/>
                <Nav.Link href="#action1">DONATE</Nav.Link>
                <hr/>
                <Nav.Link href="#action2">TWITTER</Nav.Link>
                <hr/>
                <Nav.Link href="#action1">DISCORD</Nav.Link>
                <hr/>
                <Nav.Link href="#action2">GITHUB</Nav.Link>
                <hr/>
                <Nav.Link href="#action1">LEGAL</Nav.Link>
              <Icon src="spritegames.png" />
              <a> Sprite Games Copyright 2022 </a>
              <Icon src="monstersinc.png" />
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        <Navbar.Toggle aria-controls="footer" onClick={handleShow} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <FooterButton to="/Login" text="LOG IN" />
            <FooterButton to="/Login" text="SING UP" />
          </Nav>
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
    <div href="/game" className="btn game-thumbnail m-4">
      <img src={pr.src} className="img-fluid" alt={pr.alt} />
    </div>
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
        <FooterButton text="LEGAL" />
        <FooterButton text="TWITTER" />
        <FooterButton text="DISCORD" />
        <FooterButton text="GITHUB" />
      </div>
    </Navbar.Collapse>
  );
};

const FooterButton = (pr) => {
  return (
    <button className="btn btn-outline-custom m-2 rounded-3" type="button">
      {pr.text}
    </button>
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
