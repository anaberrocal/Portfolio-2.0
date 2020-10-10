import React from "react";
import Navbar from "./Components/Navbar";
import Ana from "./assets/Ana_B&W.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="navbar-space"></div>
      {/* Landing Page */}
      <header className="App-header">
        <div className="intro">
          <h1 className="intro-title">
            Hello, my name is Ana Berrocal and I am a React Developer.
          </h1>
          <img src={Ana} className="profile-picture" />
          <div>
            <a href="#about">
              <button type="button" className="btn btn-primary btn-lg m-5">
                Learn more
              </button>
            </a>
          </div>
        </div>
      </header>
      {/* About */}
      <section id="about">
      <div className="navbar-space"></div>
        <div className="about">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, sed id adhuc molestie adipisci, ut eam
            putent nusquam, te sea tale iuvaret dissentiet. Mel tamquam discere
            at, no doming noster eum. Utamur eligendi nec ad, ius brute
            petentium quaerendum te. Cum iudico rationibus reprehendunt ei. No
            quo essent utroque assueverit, quando fabulas qualisque cu duo, ne
            nusquam similique ius.
          </p>
        </div>
      </section>
    {/* Experience */}
      <section id="experience">
      <div className="navbar-space"></div>
        <div className="experience">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, sed id adhuc molestie adipisci, ut eam
            putent nusquam, te sea tale iuvaret dissentiet. Mel tamquam discere
            at, no doming noster eum. Utamur eligendi nec ad, ius brute
            petentium quaerendum te. Cum iudico rationibus reprehendunt ei. No
            quo essent utroque assueverit, quando fabulas qualisque cu duo, ne
            nusquam similique ius.
          </p>
        </div>
      </section>
      {/* Skills */}
      <section id="skills">
      <div className="navbar-space"></div>
        <div className="skills">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, sed id adhuc molestie adipisci, ut eam
            putent nusquam, te sea tale iuvaret dissentiet. Mel tamquam discere
            at, no doming noster eum. Utamur eligendi nec ad, ius brute
            petentium quaerendum te. Cum iudico rationibus reprehendunt ei. No
            quo essent utroque assueverit, quando fabulas qualisque cu duo, ne
            nusquam similique ius.
          </p>
        </div>
      </section>
      {/* Contact */}
      <section id="contact">
      <div className="navbar-space"></div>
        <div className="contact">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, sed id adhuc molestie adipisci, ut eam
            putent nusquam, te sea tale iuvaret dissentiet. Mel tamquam discere
            at, no doming noster eum. Utamur eligendi nec ad, ius brute
            petentium quaerendum te. Cum iudico rationibus reprehendunt ei. No
            quo essent utroque assueverit, quando fabulas qualisque cu duo, ne
            nusquam similique ius.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
