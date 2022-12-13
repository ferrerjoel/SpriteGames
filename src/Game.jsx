import { Header, Footer } from "./App.jsx";
import "./Game.css";
import Image from "react-bootstrap/Image";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Stack } from "react-bootstrap";
import { auth } from "./firebaseConfig.js";
import ReactDOM from "react-dom/client";
import { Alert } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';


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

function EmbeddedGame(){
  return (
    <iframe seamless="seamless" allowtransparency="true" allowFullScreen={true} frameBorder="0" style={{width: "100%",height: "100%",border: "0px"}} src="https://zv1y2i8p.play.gamezop.com/g/rkWfy2pXq0r"> </iframe>
  )
}

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

function DeveloperImg(pr) {
  return <img className="developer-img" src="https://firebasestorage.googleapis.com/v0/b/spritegames-77777.appspot.com/o/GameThumbnails%2Fstanley.png?alt=media&token=6d381202-bbcb-47f8-aa6e-0acd7c60c9a4" />;
}

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

function ChooseSkinSection(pr) {
  return (
    <Stack className="d-flex align-items-center justify-content-center">
      <h3>CHOOSE YOUR SKIN</h3>
      <div className="container d-flex flex-wrap justify-content-center pb-5">
        <SkinThumbnail src="skinThumbnails/skin1.png" />
        <SkinThumbnail src="skinThumbnails/skin2.png" />
        <SkinThumbnail src="skinThumbnails/skin3.png" />
        <SkinThumbnail src="skinThumbnails/skin4.png" />
        <SkinThumbnail src="skinThumbnails/skin1.png" />
        <SkinThumbnail src="skinThumbnails/skin2.png" />
        <SkinThumbnail src="skinThumbnails/skin3.png" />
        <SkinThumbnail src="skinThumbnails/skin4.png" />
        <SkinThumbnail src="skinThumbnails/skin1.png" />
        <SkinThumbnail src="skinThumbnails/skin2.png" />
        <SkinThumbnail src="skinThumbnails/skin3.png" />
        <SkinThumbnail src="skinThumbnails/skin4.png" />
      </div>
    </Stack>
  );
}

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
      href="/game"
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

function ShowPopUp() {
  const root = ReactDOM.createRoot(
    document.getElementById("popup")
  ).render(<LogInModal />);
}

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
          <Button href="/signup" variant="primary">
            Sign up
          </Button>
          <Button href="/login" variant="primary">
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


const LikeCounter = (pr) => {
  const [like, addLike] = useState(0);
  const [notLiked, setNotLiked] = useState(1);

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
