import logo from './logo.svg';
import './App.css';

const Header = (props) => {

  return (
    <nav className="navbar navbar-expand-lg header-bg-custom">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu" aria-controls="collapseMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">Hidden brand</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>)
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
