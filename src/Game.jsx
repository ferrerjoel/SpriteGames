import { Header, Footer } from "./App.jsx";
import "./Game.css";
import Image from "react-bootstrap/Image";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Stack } from "react-bootstrap";

function GameView() {
  
  return (
    <Container>
      <Row className="game-view px-5 py-4 my-4">
        <Image src="GameAssets\age-empires.jpg" />
      </Row>
    </Container>
  );
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
    <Container>
      <h3>ABOUT THE CREATOR</h3>
      <hr className="d-lg-none sub-line"/>
      <Stack direction="horizontal" gap={3}>
        <DeveloperImg />
        <p>
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
  return <img className="developer-img" src="GameThumbnails/outerwilds.jpg" />;
}

function GameInfo(pr) {
  return (
    <Container>
      <h3>ABOUT THE GAME</h3>
      <hr className="d-lg-none sub-line"/>
      <Stack direction="horizontal" gap={3}>
        <p>
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

const LikeCounter = (pr) => {
  const [like, addLike] = useState(0);
  const [notLiked, setNotLiked] = useState(1);

  function setLike() {
    if (notLiked) {
      addLike(like + 1);
      setNotLiked(false);
    } else {
      addLike(like - 1);
      setNotLiked(true);
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
        />
        <Container>
          <GameView />
          <InfoSection />
          <ChooseSkinSection />
        </Container>

        <Footer />
      </header>
    </div>
  );
}

export default Game;
