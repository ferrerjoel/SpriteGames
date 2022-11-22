import logo from './logo.svg';
import './App.css';

const Header = (props) => {

  return (
    <nav className="navbar navbar-expand-lg header-bg-custom">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
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

const GameThumbnail = (pr) => {
  return(
    <div className="game-thumbnail">
      <img src={pr.src} class="img-fluid" alt={pr.alt}/>
    </div>
  )
}

const GameGrid = (pr) => {
  return(
    <div className="container">
      <GameThumbnail src="https://i0.wp.com/con2bemolesradio.com/wp-content/uploads/2022/05/Prog-28.1.jpg?fit=1200%2C1200&ssl=1"/><GameThumbnail src="https://i0.wp.com/con2bemolesradio.com/wp-content/uploads/2022/05/Prog-28.1.jpg?fit=1200%2C1200&ssl=1"/><GameThumbnail src="https://i0.wp.com/con2bemolesradio.com/wp-content/uploads/2022/05/Prog-28.1.jpg?fit=1200%2C1200&ssl=1"/><GameThumbnail src="https://i0.wp.com/con2bemolesradio.com/wp-content/uploads/2022/05/Prog-28.1.jpg?fit=1200%2C1200&ssl=1"/><GameThumbnail src="https://i0.wp.com/con2bemolesradio.com/wp-content/uploads/2022/05/Prog-28.1.jpg?fit=1200%2C1200&ssl=1"/><GameThumbnail src="https://i0.wp.com/con2bemolesradio.com/wp-content/uploads/2022/05/Prog-28.1.jpg?fit=1200%2C1200&ssl=1"/>
    </div>
  )
}

const Footer = (pr) => {
  return (
    <nav class="navbar fixed-bottom navbar-expand-lg footer-bg-custom">
      <div class="container-fluid">
        <button class="btn btn-outline-success me-2" type="button">Main button</button>
        <button class="btn btn-outline-success me-2" type="button">Main button</button>
        <button class="btn btn-outline-success me-2" type="button">Main button</button>
        <button class="btn btn-outline-success me-2" type="button">Main button</button>
        <button class="btn btn-outline-success me-2" type="button">Main button</button>
        <button class="btn btn-outline-success me-2" type="button">Main button</button>
      </div>
    </nav>
  )
}

const HeaderTitle = (pr) => {
  return (
    <div className="header-title">
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
