import React from "react";
import Navbar from "./Components/Navbar";
import Ana from "./assets/Ana_B&W.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="intro">
          <h1 className="intro-title">
            Hello, my name is Ana Berrocal and I am a React Developer.
          </h1>
          <img src={Ana} className="profile-picture" />
          <div>
            <button type="button" className="btn btn-primary btn-lg m-5">
              Learn more
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
