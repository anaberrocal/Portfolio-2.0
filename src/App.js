import React from "react";
import DevIcon from "devicon-react-svg";
import Navbar from "./Components/Navbar";
import Ana from "./assets/Ana_B&W.png";
import materialui from "./assets/materialui.png";
import RestAPI from "./assets/RestfulAPI.png";
import ResponsiveDesign from "./assets/responsive-design.png";
import GestureLife from "./assets/GestureLife.png";
import Distanceware from "./assets/Distanceware.png";
import Eleven22 from "./assets/Eleven22.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
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
          <div className="container-fluid p-3">
            <p>
              I am a Frontend Developer specializing in React and JavaScript. I
              have professional work experience building web applications and
              user-interfaces from scratch to deployment utilizing React,
              JavaScript and other technologies. I am looking to join a team
              where I can utilize and grow my React development skills.
              <br />
              I am a Frontend Developer specializing in React and JavaScript. I
              have professional work experience building web applications and
              user-interfaces from scratch to deployment utilizing React,
              JavaScript and other technologies. I am looking to join a team
              where I can utilize and grow my React development skills.
              <br />I am a Frontend Developer specializing in React and
              JavaScript. I have professional work experience building web
              applications and user-interfaces from scratch to deployment
              utilizing React, JavaScript and other technologies. I am looking
              to join a team where I can utilize and grow my React development
              skills.
            </p>
          </div>
          <div className="container">
            <DevIcon style={devIconStyle} icon="react" />
            <DevIcon style={devIconStyle} icon="javascript" />
            <DevIcon style={devIconStyle} icon="css3" />
            <DevIcon style={devIconStyle} icon="html5" />
            <DevIcon style={devIconStyle} icon="nodejs_small" />
            <img src={RestAPI} style={devIconStyle} />
            <img src={ResponsiveDesign} style={devIconStyle} />
            <img src={materialui} style={devIconStyle} />
            <DevIcon style={devIconStyle} icon="bootstrap" />
            <DevIcon style={devIconStyle} icon="sass" />
            <DevIcon style={devIconStyle} icon="npm" />
            <DevIcon style={devIconStyle} icon="git" />
            <DevIcon style={devIconStyle} icon="terminal" />
            <DevIcon style={devIconStyle} icon="github_badge" />
            <DevIcon style={devIconStyle} icon="visualstudio" />
            <DevIcon style={devIconStyle} icon="bitbucket" />
            <DevIcon style={devIconStyle} icon="trello" />
            <DevIcon style={devIconStyle} icon="apple" />
            <DevIcon style={devIconStyle} icon="windows" />
            <DevIcon style={devIconStyle} icon="photoshop" />
          </div>
        </div>
      </section>
      {/* Experience */}
      <section id="experience">
        <div className="navbar-space"></div>
        <div className="experience">
          <h1>Work experience</h1>
          <p>Check out some of my latest work</p>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-3 text-dark h-100">
                  <h3 className="card-header">Gesture Life</h3>
                  <img
                    className="project-img"
                    src={GestureLife}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Web Application</h5>
                    <h6 class="card-subtitle text-muted">My role: React Developer</h6>
                  </div>
                  <div className="card-body">
                    <p>During my time at Gesture I was part of the team of engineers who built a React web application from design to deployment as an internal workflow tool for 75+
employees. Gesture Life is a dashboard for Gesture Employees to manage their "life" on Gesture. They have the ability to view orders that need to be delivered, add products to the app, add coupons, connect runners, and much much more.</p>
                  </div>
                  <div className="card-footer">
                    <a href="#" class="card-link">
                      Site
                    </a>
                    <a href="#" class="card-link">
                      Github Repo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3 text-dark h-100">
                  <h3 className="card-header">Distanceware</h3>
                  <img
                    className="project-img"
                    src={Distanceware}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Responsive Web Application</h5>
                    <h6 class="card-subtitle text-muted">My role: React Developer</h6>
                  </div>
                  <div className="card-body">
                    <p>Distanceware matches users to online degree programs from accredited institutions accross the U.S. During my time as a React Developer at Distanceware, I have heavily utilized and sharpened my skills in React, JavaScript, HTML, CSS, Material-UI and visual design.</p>
                  </div>
                  <div className="card-footer">
                    <a href="#" class="card-link">
                      Site
                    </a>
                    <a href="#" class="card-link">
                      Github Repo
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3 text-dark h-100">
                  <h3 className="card-header">Eleven22</h3>
                  <img
                    className="project-img"
                    src={Eleven22}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Web and mobile site</h5>
                    <h6 class="card-subtitle text-muted">My role: Frontend Developer</h6>
                  </div>
                  <div className="card-body">
                    <p>Aenean dignissim malesuada euismod. Maecenas eleifend lacus vitae arcu congue, a bibendum purus posuere. Quisque molestie nisi eget odio ullamcorper, quis faucibus orci euismod. Sed ultrices urna justo, ac mollis augue porta in. Fusce et faucibus metus, eu cursus tortor.</p>
                  </div>
                  <div className="card-footer">
                    <a href="#" class="card-link">
                      Site
                    </a>
                    <a href="#" class="card-link">
                      Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className="container-fluid">
          <h1>Contact</h1>
          <p className="p-3">
            Lorem ipsum dolor sit amet, sed id adhuc molestie adipisci, ut eam
            putent nusquam, te sea tale iuvaret dissentiet. Mel tamquam discere
            at, no doming noster eum. 
          </p>
          <div className="row p-3">
            <a className="col-md-3 p-3" href="https://www.linkedin.com/in/anaberrocal/" target="_blank"><FaLinkedin size={60} className="text-white"/></a>
            <a className="col-md-3 p-3" href="https://github.com/anaberrocal" target="_blank"><FaGithub size={60} className="text-white "/></a>
            <a className="col-md-3 p-3" href="mailto:anaberrocaldev@gmail.com"><MdEmail size={60} className="text-white"/></a>
            <a className="col-md-3 p-3" href="tel:9548512668"><FaPhoneAlt size={60} className="text-white"/></a>
          </div>
          <h5 className="text-white p-3">Want to learn more? Take a look at my resume <a className="text-white" href="https://drive.google.com/file/d/1PTg3hBRUX_cvq_92aMGR_tnR7ayht2gD/view?usp=sharing" target="_blank"><u>here</u></a>.</h5>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
