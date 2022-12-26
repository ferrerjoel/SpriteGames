import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Game from "./Game";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import SingUp from "./SignUp";

export default function AppGlobal() {
  
  return (
    // <FirebaseAppProvider firebaseConfig={firebaseConfig} >
    //   <Suspense fallback={<p>Loading...</p>}> {/*If firebase needs to load it will show this fallback*/}
        // <HashRouter basename={process.env.PUBLIC_URL}>
        // I'm using HashRouter since using BrowseRouter won't work when deploying to GitHub pages, besides that i made some changes to the URL's in order to work for the name of the repository on the URL of the deployed wen
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<App/>} />
            <Route exact path="/game" element={<Game/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/singup" element={<SingUp/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </HashRouter>
    //   </Suspense>
    // </FirebaseAppProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppGlobal />);

// reportWebVitals();

//   <React.StrictMode>
//     {/* <App />
//     <Game /> */}
//     <Login />
//   </React.StrictMode>
