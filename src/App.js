import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="custom-header" expand="lg">
      <Container fluid>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Body>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="#action1">LOGIN</Nav.Link>
            <Nav.Link href="#action2">SIGN UP</Nav.Link>
            <Nav.Link href="#action1">DONATE</Nav.Link>
            <Nav.Link href="#action2">TWITTER</Nav.Link>
            <Nav.Link href="#action1">DISCORD</Nav.Link>
            <Nav.Link href="#action2">GITHUB</Nav.Link>
            <Nav.Link href="#action1">LEGAL</Nav.Link>
          </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="footer" onClick={handleShow} />
        {/* <Navbar.Collapse id="navbarScroll">

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
    </Navbar>)
}


const GameThumbnail = (pr) => {
  return (
    <div className="btn game-thumbnail m-4">
      <img src={pr.src} className="img-fluid" alt={pr.alt} />
    </div>
  )
}

const GameGrid = (pr) => {

  return (
    <div className="container d-flex flex-wrap justify-content-center pb-5">
      <GameThumbnail src="GameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="GameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="GameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="GameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="GameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="GameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="GameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="GameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="GameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="GameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="GameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="GameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="GameThumbnails/hollowknight.jpg" />
      <GameThumbnail src="GameThumbnails/outerwilds.jpg" />
      <GameThumbnail src="GameThumbnails/hollowknight.jpg" />
    </div>
  )
}

const Footer = (pr) => {
  return (
    <Navbar.Collapse className="navbar fixed-bottom navbar-expand-lg footer-bg-custom show" id="footer">
      <div className="container-fluid">
        <FooterButton text="DONATE" />
        <FooterButton text="ABOUT US" />
        <FooterButton text="LEGAL" />
        <FooterButton text="TWITTER" />
        <FooterButton text="DISCORD" />
        <FooterButton text="GITHUB" />
      </div>
    </Navbar.Collapse>
  )
}

const FooterButton = (pr) => {
  return (
    <button className="btn btn-outline-custom m-2 rounded-3" type="button">{pr.text}</button>
  )
}

const HeaderTitle = (pr) => {
  return (
    <div className="header-title mb-4">
      {pr.title}
    </div>
  )
}

function App() {
  return (
    <div className="App">

      <header className="App-body">
        <Header />
        <HeaderTitle title="SPRITE GAMES" />
        <GameGrid />
        <Footer />
      </header>

    </div>
  );
}

export default App;
