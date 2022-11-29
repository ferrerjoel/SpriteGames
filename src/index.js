import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Game from './Game';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppGlobal() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="game" element={<Game />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppGlobal />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//   <React.StrictMode>
//     {/* <App />
//     <Game /> */}
//     <Login />
//   </React.StrictMode>
