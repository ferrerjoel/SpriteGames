import { Header, Footer } from "./App.jsx";
import "./Game.css";
import Image from "react-bootstrap/Image";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button, Stack } from "react-bootstrap";
import { auth } from "./firebaseConfig.js";
import ReactDOM from "react-dom/client";
import Modal from 'react-bootstrap/Modal';

// The container for the game
function GameView() {
  
  return (
    <Container className="px-0 px-sm-1">
      <Row className="game-view px-0 px-sm-5 py-0 py-sm-4 my-4" style={{height: "800px"}}>
        {/* <Image className="px-0 px-sm-1" src="GameAssets\age-empires.jpg" /> */}
        <EmbeddedGame/>
        <Image className="d-sm-none p-1 full-screen-icon" src="icons\full-screen.png"/>
      </Row>
    </Container>
  );
}
// The embedded game on the game page
function EmbeddedGame(){
  return (
    <iframe seamless="seamless" allowtransparency="true" allowFullScreen={true} style={{width: "100%",height: "100%",border: "0px", padding: "0"}} src="https://ferrerjoel.github.io/BaldManProjectWebGL/"> </iframe>
  )
}
// Shows the creator and the game info
function InfoSection(pr) {
  return (
    <div className="info-section">
      <hr/>
      {/* D-none hides the element on xs and d-lg-flex displays the element as a flex on lg breakpoint */}
      <Stack className="d-none d-lg-flex " direction="horizontal" gap={3}>
        <DeveloperInfo />
        <hr className="vertical-line"></hr>
        <GameInfo />
      </Stack>

      <Stack className="d-inline d-lg-none" gap={3}>
        <DeveloperInfo />
        <GameInfo />
      </Stack>

      <hr />
    </div>
  );
}
// Developer info container, contains the icon of the developer and it's info
function DeveloperInfo(pr) {
  return (
    <Container className="p-0 p-lg-2">
      <h3>ABOUT THE CREATOR</h3>
      <hr className="d-lg-none sub-line"/>
      <Stack direction="horizontal" gap={3}>
        <DeveloperImg />
        <p style={{textAlign : "justify", textJustify: "inner-word"}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
          magnam natus saepe ratione obcaecati nemo cum odio sapiente doloribus
          vero eligendi hic earum error harum blanditiis perferendis dignissimos
          eius nisi.
        </p>
      </Stack>
    </Container>
  );
}
// Img of the developer
function DeveloperImg(pr) {
  return <img className="developer-img" src="https://firebasestorage.googleapis.com/v0/b/spritegames-77777.appspot.com/o/GameThumbnails%2Fstanley.png?alt=media&token=6d381202-bbcb-47f8-aa6e-0acd7c60c9a4" />;
}
// Game info container, contains the info of the game
function GameInfo(pr) {
  return (
    <Container className="p-0 p-lg-2">
      <h3>ABOUT THE GAME</h3>
      <hr className="d-lg-none sub-line"/>
      <Stack direction="horizontal" gap={3}>
        <p style={{textAlign : "justify", textJustify: "inner-word"}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
          magnam natus saepe ratione obcaecati nemo cum odio sapiente doloribus
          vero eligendi hic earum error harum blanditiis perferendis dignissimos
          eius nisi.
        </p>
      </Stack>
    </Container>
  );
}
// Shows all the selectable skins
function ChooseSkinSection(pr) {
  return (
    <Stack className="d-flex align-items-center justify-content-center">
      <h3>CHOOSE YOUR SKIN</h3>
      <div className="container d-flex flex-wrap justify-content-center pb-5">
        <SkinThumbnail src="SkinThumbnails/skin1.png" />
        <SkinThumbnail src="SkinThumbnails/skin2.png" />
        <SkinThumbnail src="SkinThumbnails/skin3.png" />
        <SkinThumbnail src="SkinThumbnails/skin4.png" />
        <SkinThumbnail src="SkinThumbnails/skin1.png" />
        <SkinThumbnail src="SkinThumbnails/skin2.png" />
        <SkinThumbnail src="SkinThumbnails/skin3.png" />
        <SkinThumbnail src="SkinThumbnails/skin4.png" />
        <SkinThumbnail src="SkinThumbnails/skin1.png" />
        <SkinThumbnail src="SkinThumbnails/skin2.png" />
        <SkinThumbnail src="SkinThumbnails/skin3.png" />
        <SkinThumbnail src="SkinThumbnails/skin4.png" />
      </div>
    </Stack>
  );
}
// Skin thumbnail container, capable of being selected
const SkinThumbnail = (pr) => {
  const [isActive, setIsActive] = useState(false);

  const changeBorder = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  return (
    <div
      style={{
        borderColor: isActive ? "#f35054" : "#292033",
        outline: isActive ? 3 : 1,
      }}
      href="/SpriteGames/#/game"
      className="btn skin-thumbnail m-4"
    >
      <img
        src={pr.src}
        className="img-fluid"
        alt={pr.alt}
        onClick={changeBorder}
      />
      <LikeCounter />
    </div>
  );
};
// Shows a pop up saying that the user needs an account
function ShowPopUp() {
  const root = ReactDOM.createRoot(
    document.getElementById("popup")
  ).render(<LogInModal />);
}
// Log in popup
function LogInModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal className="custom-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in needed</Modal.Title>
        </Modal.Header>
        <Modal.Body>To use this function, log in or create an account!</Modal.Body>
        <Modal.Footer>
          <Button href="/SpriteGames/#/singup" variant="primary" onClick={handleClose}>
            Sign up
          </Button>
          <Button href="/SpriteGames/#/login" variant="primary" onClick={handleClose}>
            Log in
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// The like counter for the skin thumbnail
const LikeCounter = (pr) => {
  const [like, addLike] = useState(0);
  const [notLiked, setNotLiked] = useState(1);
  // Adds a like if it's not set already, otherwise it removes it
  function setLike() {
    if (auth.currentUser != null) {
      if (notLiked) {
        addLike(like + 1);
        setNotLiked(false);
      } else {
        addLike(like - 1);
        setNotLiked(true);
      }
    } else {
      ShowPopUp();
    }
  }
  return (
    <Stack
      onClick={() => setLike()}
      direction="horizontal"
      gap={3}
      className="like-container"
    >
      <p>{like}</p>
      <img className="" src="icons/like.png" />
    </Stack>
  );
};

function Game() {
  return (
    <div className="Game">
      <header className="App-body">
        <Header
          theme="offcanvas-custom-alt"
          navBarBg="custom-header-alt"
          searchIcon="icons/search-icon-red.png"
          dropDownTheme="custom-dropdown dropdown-toggle::after search-btn-custom-alt"
          navBarClass="navbar-icon-alt"
        />
        
        <Container>
          <GameView />
          <InfoSection />
          <ChooseSkinSection />
          <Container id="popup"></Container>
        </Container>
        <Footer />
      </header>
    </div>
  );
}

export default Game;
