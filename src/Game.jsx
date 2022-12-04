import { Header, Footer } from "./App.jsx";
import "./Game.css";
import Image from "react-bootstrap/Image";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <hr className="vertical-line"></hr>
      <hr/>
    </div>
  );
}

function UserInfo (pr) {

}

function GameInfo (pr) {
  
}

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
        </Container>

        <Footer />
      </header>
    </div>
  );
}

export default Game;
