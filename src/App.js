import React from "react";
import DevIcon from "devicon-react-svg";
import Navbar from "./Components/Navbar";
import Ana from "./assets/Ana_B&W.png";
import { SiJavascript } from "react-icons/si";
import materialui from "./assets/materialui.png";
import RestAPI from "./assets/RestfulAPI.png";
import ResponsiveDesign from "./assets/responsive-design.png";
import figma from "./assets/figma.png";
import angular from "./assets/angular.png";
import stenciljs from "./assets/stencil-js.png";
import storybook from "./assets/storybook.png";
import typescript from "./assets/typescript.png";
import { FaBitbucket } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import sp from "./assets/sp.png";
import f23 from "./assets/f23.png";
import f23dev from "./assets/f23-dev.png";
import GestureLife from "./assets/GestureLife.png";
import Distanceware from "./assets/Distanceware.png";
import Eleven22 from "./assets/Eleven22.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import aboutImg from "./assets/computerDraw.png";
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
            Hello, my name is Ana Berrocal and I am a Frontend Developer.
          </h1>
          <img src={Ana} className="profile-picture" alt="Profile picture" />
          <div>
            <a href="#about">
              <button
                type="button"
                className="btn btn-primary border border-secondary m-5"
              >
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
          <div className="container text-left pt-3">
            <p className="font-weight-normal">
              I am a <b class="font-weight-bold">Frontend Developer</b>{" "}that has experience designing and developing{" "}
              <b class="font-weight-bold">web applications, user-interfaces</b>{" "}
              and websites from scratch to deployment utilizing
              <b class="font-weight-bold">
                {" "}
                React, JavaScript ES6+, HTML5, CSS3, Angular, TypeScript, RESTful APIs, Material-UI,
                Responsive Design, Bootstrap, StencilJS
              </b>{" "}
              and other technologies. I also have experience designing and developing <b class="font-weight-bold">design systems</b>.
            </p>
            <p className="font-weight-normal">
              I not only have Frontend Engineering knowledge but I also have created user interfaces and experiences during my time as a product designer. I have a great
              set of soft skills and an arts background that allow me
              to create functional and visually pleasing interfaces that empathize with and 
              prioritize the user experience. I am eager to join a team where I can
              put both my technical, design and people skills to work.
            </p>
            <p className="font-weight-normal">
              I was born and raised in Peru and moved to the U.S. in 2012 with
              my family.
            </p>
            <p className="font-weight-normal">
              I first started coding after taking an intro to HTML and CSS class
              at General Assembly, and I fell in love immediately.
            </p>
            <p className="font-weight-normal">
              Fast forward to today, I am so grateful that I get to do
              what I love everyday and get beyond excited at the fact that
              people from all over the world get to see and utilize the tools I
              build.
            </p>
            <p className="font-weight-normal">
              I am looking forward to being part of a team where I can continue to grow my development and design skills.
            </p>
            {/* <div className="text-center"> */}
            <img src={aboutImg} className="mx-auto d-block w-25 h-100" />
            {/* </div> */}
            <blockquote class="blockquote text-center">
              <div className="container pb-0 mb-0 pt-0">
                <p class="mb-0 mt-2 mr-5 ml-5">
                  “What I love about both programming and music is that they
                  enable you to build incredibly creative, complex, and
                  beneficial things seemingly from thin air -- no additional
                  materials required, just your brain and a keyboard in front of
                  you.”
                </p>
                <footer class="blockquote-footer">
                  <cite title="Source Title">Peter Borum</cite>
                </footer>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section id="experience">
        <div className="navbar-space"></div>
        <div className="experience">
          <h1>Work experience</h1>
          <p className="font-weight-normal">Check out some of my latest work</p>
          <div className="container-fluid">
            <div className="row">
            <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">StackPath</h3>
                  <img
                    className="project-img"
                    src={sp}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Cloud Computing Start-up</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: UI Developer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    StackPath is a cloud computing and services provider that puts its locations in densely populated markets. At StackPath, I helped design and build our very own Design System, "Cosmos". The intention behind Cosmos was to unify and expedite the software development process among all different engineering teams by creating custom, reusable, accesible and fully-functional React and web components.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://www.stackpath.com/"
                      target="_blank"
                      class="card-link"
                    >
                      StackPath
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">Feature 23</h3>
                  <img
                    className="project-img"
                    src={f23dev}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Software Engineering Firm</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: Frontend Developer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    Feature[23] is a full-service product development firm. During my time there, I worked alongside several different engineering teams, implementing changes and features that ranged from compelte redesigns to creating full-fledged applications from scratch in order to obtain and maintain new business from an existing customer (large national product distributor).
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://www.feature23.com/"
                      target="_blank"
                      class="card-link"
                    >
                      Feature23
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">Feature23 (Design Work)</h3>
                  <img
                    className="project-img"
                    src={f23}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Software Engineering Firm</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: Jr. Product Designer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    Additonally, during my time at Feature[23], I worked under the Chief Product Designer and redesigned a large existing application from scratch and implemented those updates in code. I also assisted all other engineering teams with design improves and updates to components as well participated in disciovery calls with potential new clients in order to pinpoint their software needs and gain their business.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://coe22.com/"
                      target="_blank"
                      class="card-link"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                    <p className="font-weight-normal">
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
                    <p className="font-weight-normal">
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
                    <p className="font-weight-normal">
                      The Church of Eleven22 is one of the fastest growing in
                      the country. Across its six (soon to be 7) campuses, close
                      to 12,000 people attend Sunday services and thousands more
                      attend online. My role at CoE22 consisted of maintaining
                      and refactoring an existing 50+ page codebase as well as
                      participating in the full lifecycle of design, development
                      and deployment of new projects.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://coe22.com/"
                      target="_blank"
                      class="card-link"
                    >
                      Website
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
            <p className="font-weight-normal">
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
              <img src={angular} style={devIconStyle} />
              <img src={typescript} style={devIconStyle} />
              <DevIcon style={devIconStyle} icon="nodejs_small" />
              <img src={stenciljs} style={devIconStyle} />
              <img src={storybook} style={devIconStyle} />
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
              <img src={figma} style={devIconStyle} />
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
            <p className="font-weight-normal p-3 m-5">
              You have learned a bit more about me and seen my most relevant
              skills and work experience. Maybe you are wondering if I would be
              a good culture fit at your company or if I am a good team player. <br />
              Let's connect and find out!
            </p>
            <div className="row p-3">
              <a
                className="col-sm"
                href="https://www.linkedin.com/in/anaberrocal/"
                target="_blank"
              >
                <FaLinkedin size={60} className="text-white" />
              </a>
              <a
                className="col-sm"
                href="https://github.com/anaberrocal"
                target="_blank"
              >
                <FaGithub size={60} className="text-white " />
              </a>
              <a
                className="col-sm"
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
                href="https://drive.google.com/file/d/1vSt6st3F2CQ-JMyjLh_FEpY7qe27KdD6/view?usp=sharing"
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
