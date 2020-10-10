import React from "react";
import DevIcon from "devicon-react-svg";
import Navbar from "./Components/Navbar";
import Ana from "./assets/Ana_B&W.png";
import materialui from "./assets/materialui.png";
import RestAPI from "./assets/RestfulAPI.png";
import ResponsiveDesign from "./assets/responsive-design.png";
import "./App.css";

function App() {

  const devIconStyle = {
    width: "150px",
};
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
          <img src={Ana} className="profile-picture" alt="Profile picture" />
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
            I am a Frontend Developer specializing in React and JavaScript. I
            have professional work experience building web applications and
            user-interfaces from scratch to deployment utilizing React,
            JavaScript and other technologies. I am looking to join a team where
            I can utilize and grow my React development skills.
            <br/>
            I am a Frontend Developer specializing in React and JavaScript. I
            have professional work experience building web applications and
            user-interfaces from scratch to deployment utilizing React,
            JavaScript and other technologies. I am looking to join a team where
            I can utilize and grow my React development skills.
            <br/>
            I am a Frontend Developer specializing in React and JavaScript. I
            have professional work experience building web applications and
            user-interfaces from scratch to deployment utilizing React,
            JavaScript and other technologies. I am looking to join a team where
            I can utilize and grow my React development skills.
          </p>
          <div>
          <DevIcon style={devIconStyle} icon="react"/>
          <DevIcon style={devIconStyle} icon="javascript"/>
          <DevIcon style={devIconStyle} icon="css3"/>
          <DevIcon style={devIconStyle} icon="html5"/>
          <DevIcon style={devIconStyle} icon="nodejs_small"/>
          <img src={RestAPI} style={devIconStyle}/>
          <img src={ResponsiveDesign} style={devIconStyle}/>
          <img src={materialui} style={devIconStyle}/>
          <DevIcon style={devIconStyle} icon="bootstrap"/>
          <DevIcon style={devIconStyle} icon="sass"/>
          <DevIcon style={devIconStyle} icon="npm"/>
          <DevIcon style={devIconStyle} icon="git"/>
          <DevIcon style={devIconStyle} icon="terminal"/>
          <DevIcon style={devIconStyle} icon="github_badge"/>
          <DevIcon style={devIconStyle} icon="visualstudio"/>
          <DevIcon style={devIconStyle} icon="bitbucket"/>
          <DevIcon style={devIconStyle} icon="trello"/>
          <DevIcon style={devIconStyle} icon="apple"/>
          <DevIcon style={devIconStyle} icon="windows"/>
          <DevIcon style={devIconStyle} icon="photoshop"/>

          </div>
        </div>
      </section>
      {/* Experience */}
      <section id="experience">
        <div className="navbar-space"></div>
        <div className="experience">
          <h1>Work experience</h1>
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
      {/* Projects */}
      <section id="projects">
        <div className="navbar-space"></div>
        <div className="projects">
          <h1>Personal Projects</h1>
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
          <h1>Contact</h1>
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
