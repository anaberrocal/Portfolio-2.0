import React from "react";
import DevIcon from "devicon-react-svg";
import Navbar from "./Components/Navbar";
import Ana from "./assets/Ana_B&W.png";
import { SiJavascript } from "react-icons/si";
import materialui from "./assets/materialui.png";
import RestAPI from "./assets/RestfulAPI.png";
import ResponsiveDesign from "./assets/responsive-design.png";
import { FaBitbucket } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import GestureLife from "./assets/GestureLife.png";
import Distanceware from "./assets/Distanceware.png";
import Eleven22 from "./assets/Eleven22.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
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
          <div className="container p-3">
            <p>
              I am a <b class="font-weight-bold">Frontend Developer</b> specializing in{" "}
              <b class="font-weight-bold">React and JavaScript</b>. I have professional work experience
              building <b class="font-weight-bold">web applications, user-interfaces</b> and websites
              from scratch to deployment utilizing
              <b class="font-weight-bold">
                {" "}
                React, JavaScript ES6+, HTML5, CSS3, RESTful APIs, Bootstrap,
                Responsive Design
              </b>{" "}
              and other technologies.
              </p>
              <p>I am looking to join a team where I can heavily utilize and
              challenge my React development skills.</p>
            <br />
            <p>
              I was born and raised in Peru and moved to the U.S. in 2012 with
              my family. Shortly after moving here, I enrolled in school to
              learn Photography and worked in the hospitality and restaurant
              industry during my time as a student.
            </p>
            <p>
              I realized years later that I did not have the desire to become a
              professional photographer. Around that same time, I moved to NYC
              from Florida and was introduced to the amazing world of
              programming. I first started coding in 2018 after taking an intro
              to HTML and CSS class at General Assembly, and I fell in love
              immediately.
              <br />
              As someone who had spent most of her life assuming that I was only
              good at artistic endeavors, I never thought that I would have what
              it takes to be in a STEM field. Nevertheless, I found Frontend
              Development to be extremely fun and fullfilling.
            </p>
            <br />
            <p>
              Fast forward to two years later, I am so grateful that I get to do
              what I love everyday and get beyond excited at the fact that
              strangers from all over the world get to see and utilize the tools
              I build.
            </p>
            <p>
              I not only have Frontend Engineering knowledge but a outstanding
              set of soft skills that I acquired during my tenure in the
              hospitality industry. I am eager to join a team where I can put
              both my technical and people skills to work.
            </p>
            <blockquote class="blockquote text-center">
              <p class="mb-0 mt-5 mr-5 ml-5">
                "Every great developer you know got there by solving problems
                they were unqualified to solve until they actually did it."
              </p>
              <footer class="blockquote-footer">
                <cite title="Source Title">Patrick McKenzie</cite>
              </footer>
            </blockquote>
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
              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">Gesture Life</h3>
                  <img
                    className="project-img"
                    src={GestureLife}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Web Application</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: React Developer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p>
                      Gesture Life is a dashboard/internal workflow tool for
                      Gesture's 75+ employees to manage their "life" at Gesture.
                      They have the ability to view orders that need to be
                      delivered, add products to the app, add coupons, connect
                      runners and much more. During my time at Gesture I was
                      part of the team of engineers who built this React web
                      application from design to deployment.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://www.yourgesture.com/"
                      target="_blank"
                      class="card-link"
                    >
                      Gesture
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">Distanceware</h3>
                  <img
                    className="project-img"
                    src={Distanceware}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Responsive Web Application</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: React Developer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p>
                      Distanceware is a React web application that matches users
                      to online degree programs from accredited institutions
                      accross the U.S. During my time as a React Developer at
                      Distanceware, I have heavily utilized my skills in React,
                      JavaScript, HTML, CSS, Material-UI and visual design.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://www.linkedin.com/company/distanceware/"
                      target="_blank"
                      class="card-link"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">Eleven22</h3>
                  <img
                    className="project-img"
                    src={Eleven22}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Web and mobile site</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: Frontend Developer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p>
                      The Church of Eleven22 is one of the fastest growing in
                      the country. Across its six (soon to be 7) campuses, close
                      to 12,000 people attend Sunday services and thousands more
                      attend online. My role at CoE22 consisted of maintaining
                      an existing 50+ page codebase as well as participating in
                      the full lifecycle of design, development and deployment
                      of new projects.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://coe22.com/"
                      target="_blank"
                      class="card-link"
                    >
                      Webite
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id="skills">
        <div className="navbar-space"></div>
        <div className="skills">
          <div className="container">
            <h1>The Tech Stack</h1>
            <p>
              Being a programmer means being a life-long learner and that is one
              of the things that attracted me to it in the first place. If I
              join your team, I will bring not only the skills listed below but
              some pretty amazing people and communication skills as well (I've
              been called "the glue" that sticks a team together in the past).
              Additionally, you can count on me swiftly and eargerly picking up
              new technologies constantly.
            </p>
            <div className="container-fluid p-5">
              <DevIcon style={devIconStyle} icon="react" />
              <SiJavascript size={120} className="text-primary" />
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
              <FaBitbucket size={120} className="text-primary" />
              <DevIcon style={devIconStyle} icon="trello" />
              <DevIcon style={devIconStyle} icon="apple" />
              <DevIcon style={devIconStyle} icon="windows" />
              <SiAdobexd size={120} className="text-primary" />
              <DevIcon style={devIconStyle} icon="photoshop" />
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact">
        <div className="navbar-space"></div>
        <div className="contact">
          <div className="container-fluid">
            <h1>Are you interested in working with me?</h1>
            <p className="p-3 m-5">
              By now you have learned a bit more about me and seen my most
              relevant skills and work experience. Maybe you are wondering if I
              would be a good culture fit at your company or if I am a good team
              player (I am, by the way). <br />
              Let's connect and find out!
            </p>
            <div className="row p-3">
              <a
                className="col-md-3 p-3"
                href="https://www.linkedin.com/in/anaberrocal/"
                target="_blank"
              >
                <FaLinkedin size={60} className="text-white" />
              </a>
              <a
                className="col-md-3 p-3"
                href="https://github.com/anaberrocal"
                target="_blank"
              >
                <FaGithub size={60} className="text-white " />
              </a>
              <a
                className="col-md-3 p-3"
                href="mailto:anaberrocaldev@gmail.com"
              >
                <MdEmail size={60} className="text-white" />
              </a>
              <a className="col-md-3 p-3" href="tel:9548512668">
                <FaPhoneAlt size={60} className="text-white" />
              </a>
            </div>
            <h5 className="text-white p-3 m-5">
              Want to learn more? Take a look at my resume{" "}
              <a
                className="text-white"
                href="https://drive.google.com/file/d/1PTg3hBRUX_cvq_92aMGR_tnR7ayht2gD/view?usp=sharing"
                target="_blank"
              >
                <u>here</u>
              </a>
              .
            </h5>
          </div>
        </div>
        <div class="card-footer text-muted bg-primary">
          <h6 className="text-white">
            Made with <FaReact size={30} /> by Ana Berrocal.
          </h6>
        </div>
      </section>
    </div>
  );
}

export default App;
