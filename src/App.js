import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = (props) => {

  return (
    <Navbar bg="custom-header" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}

const CollapseMenu = (pr) => {
  return (
    <div style={{"minHeight": "120px"}}>
      <div className="collapse collapse-horizontal" id="collapseMenu">
        <div className="card card-body" style={{"width": "300px"}}>
          This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
        </div>
      </div>
    </div>
  )
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
    <nav className="navbar fixed-bottom navbar-expand-lg footer-bg-custom">
      <div className="container-fluid">
        <FooterButton text="DONATE" />
        <FooterButton text="ABOUT US" />
        <FooterButton text="LEGAL" />
        <FooterButton text="TWITTER" />
        <FooterButton text="DISCORD" />
        <FooterButton text="GITHUB" />
      </div>
    </nav>
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
        <CollapseMenu />
      </header>
      
    </div>
  );
}

export default App;
