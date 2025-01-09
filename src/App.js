import React from "react";
import DevIcon from "devicon-react-svg";
import Navbar from "./Components/Navbar";
import Ana from "./assets/Ana_B&W.png";
import { SiJavascript, SiSketch, SiSketchfab } from "react-icons/si";
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
import united from "./assets/united.png";
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
import { VscAzureDevops } from "react-icons/vsc";
import { VscVscode } from "react-icons/vsc";
import "./App.css";

function App() {
  const devIconStyle = {
    width: "24px",
  };
  return (
    <div className="App">
      <Navbar />
      <div className="navbar-space"></div>
      {/* Landing Page */}
      <header className="App-header">
        <div className="intro">
           <div className="intro-left">
            <span className="intro-title">
              Hello. <br/>My name is Ana Berrocal and I am a UI/UX Designer &
              Developer based in NYC.
            </span>
            <a href="#about">
              <button
                type="button"
                className="btn btn-primary border border-secondary m-5 learn-more"
              >
                Learn more
              </button>
            </a>
          </div>
          {/* <img src={Ana} className="profile-picture" alt="Profile picture" /> */}
        </div>
      </header>
      {/* About */}
      <section id="about">
        <div className="navbar-space"></div>
        <div className="about">
          <h1>About me</h1>
          <div className="container text-left pt-3">
            <p className="font-weight-normal">
            I am a Product Designer with a passion for creating intuitive and visually compelling user interfaces and experiences. With expertise in design systems, UI/UX design, and front-end technologies like React, HTML5, CSS3, and TypeScript, I have successfully designed and developed websites, web applications, and interfaces from concept to deployment. My proficiency with tools such as Material-UI, Bootstrap, Angular Material, and Responsive Design enables me to craft solutions that are both functional and aesthetically pleasing across platforms.
            </p>
            <p className="font-weight-normal">
            With a background in both design and frontend development, I am adept at bridging the gap between technical and creative requirements, ensuring that every project I work on delivers a seamless, user-centered experience. My strong foundation in soft skills, combined with an artistic background, empowers me to empathize with users and translate their needs into elegant, high-impact designs.
            </p>
            <p className="font-weight-normal">
            Originally from Peru and having relocated to the United States in 2012, my journey into design began after taking an introductory HTML and CSS course at General Assembly. It was there that I discovered my passion for creating digital experiences that resonate with users. Today, I am thrilled to be doing work I love, where my designs are seen and used by people around the world.
            </p>
            <p className="font-weight-normal">
            I am eager to join a collaborative team where I can continue to grow my design skills, contribute creative insights, and help craft outstanding user experiences that prioritize both function and form.
            </p>
            {/* <div className="text-center"> */}
            <img src={Ana} className="mx-auto d-block w-25 h-100" />
            {/* </div> */}
            <blockquote class="blockquote text-center">
              <div className="container pb-0 mb-0 pt-0">
                <p class="mb-0 mt-2 mr-5 ml-5">
                  “UX design shapes the experience, while frontend development brings it to life—together, they turn visions into intuitive, unforgettable interactions.”
                </p>
                <footer class="blockquote-footer">
                  <cite title="Source Title">Ana Berrocal</cite>
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
          <p className="font-weight-normal">These are some of the projects and companies I have worked on as both a designer and developer.</p>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">United Airlines</h3>
                  <img className="project-img" src={united} alt="Card image" />
                  <div className="card-body">
                    <h5 class="card-title">Airlines and Aviation</h5>
                    <h6 class="card-subtitle text-muted">
                    My role: UI/UX Developer/Designer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    I collaborate with design and engineering teams to design and develop features for two high-visibility, employee-facing applications. Leveraging our in-house design system, I streamline design and development and ensure seamless handoffs, contributing to large-scale projects such as a scheduling app, messaging app, marketing pages, and an admin dashboard.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://www.united.com/"
                      target="_blank"
                      class="card-link"
                    >
                      United
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">StackPath</h3>
                  <img className="project-img" src={sp} alt="Card image" />
                  <div className="card-body">
                    <h5 class="card-title">Cloud Computing Start-up</h5>
                    <h6 class="card-subtitle text-muted">
                    My role: UI/UX Developer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    StackPath is a cloud computing and services provider that
                      puts its locations in densely populated markets. At
                      StackPath, I helped design and build our very own Design
                      System, "Cosmos". The intention behind Cosmos was to unify
                      and expedite the software development process among all
                      different engineering teams by creating custom, reusable,
                      accesible and fully-functional React and web components.
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
                  <h3 className="card-header">Feature23</h3>
                  <img className="project-img" src={f23} alt="Card image" />
                  <div className="card-body">
                    <h5 class="card-title">Software Engineering Firm</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: Product Designer/Developer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    At Feature[23], I worked with the Chief Product Designer to redesign and implement updates for a large application, collaborated with engineering teams on design improvements and new features, and participated in discovery calls to identify client needs and secure new business, including a national product distributor.
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
                    Gesture Life is an internal dashboard and workflow tool designed for Gesture's 75+ employees to manage tasks such as order tracking, product and coupon management, and runner coordination. As part of the engineering team, I contributed to building this React web application from design to deployment.
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
                    Distanceware is a React-based web application connecting users with online degree programs from accredited institutions across the U.S. As a React Developer, I leveraged my expertise in React, JavaScript, HTML, CSS, Material-UI, and visual design to deliver impactful solutions.
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
                      My role: Frontend Developer/Designer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    The Church of Eleven22, one of the fastest-growing churches in the nation, serves nearly 12,000 attendees across seven campuses and thousands more online. At CoE22, my role involved maintaining and optimizing a 50+ page codebase while contributing to the full lifecycle of design, development, and deployment for new projects.
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
            Below is an overview of the technical skills and tools I’ve utilized, paired with a commitment to continuous learning and growth. These skills reflect my ability to solve problems, collaborate effectively, and adapt quickly to new technologies.
            </p>
            <div className="container-fluid p-3 skills-container">
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><img src={figma} style={devIconStyle} alt="Figma"/>Figma</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary">  <SiSketch size={24} className="text-primary" />Sketch</span>
            <span  class="badge rounded-pill bg-secondary border border-primary text-primary"><SiAdobexd size={24} />Adobe XD</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><VscAzureDevops size={24} className="text-primary"/>Azure DevOps</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><VscVscode size={24} className="text-primary"/>VS Code</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="react" />React</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><SiJavascript size={24} className="text-primary" />JavaScript</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="html5" />HTML</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="css3" />CSS</span>
            <span  class="badge rounded-pill bg-secondary border border-primary text-primary"><img src={angular} style={devIconStyle} />Angular</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><img src={typescript} style={devIconStyle} />TypeScript</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="nodejs_small" />NodeJS</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><img src={ResponsiveDesign} style={devIconStyle} />Responsive Design</span>
            <span  class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="bootstrap"/>Bootstrap</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="sass" />Sass</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="npm" />npm</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="git" />git</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="terminal" />bash terminal</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="github_badge" />GitHub</span>
            <span  class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="visualstudio" />Visual Studio</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><img src={typescript} style={devIconStyle} />TypeScript</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="apple" />Mac OS</span>
            <span class="badge rounded-pill bg-secondary border border-primary text-primary"><DevIcon style={devIconStyle} icon="windows" />Windows OS</span>            
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
            Thank you for taking the time to learn more about me and review my skills and experience. I would be delighted to connect and discuss how I can contribute to your organization.
            </p>
            <div className="contact-icons">
              <a
                
                href="https://www.linkedin.com/in/anaberrocal/"
                target="_blank"
              >
                <FaLinkedin size={60} className="text-white" alt="LinkedIn"/>
              </a>
              <a
                
                href="https://github.com/anaberrocal"
                target="_blank"
              >
                <FaGithub size={60} className="text-white " />
              </a>
              <a  href="mailto:anaberrocaldev@gmail.com">
                <MdEmail size={60} className="text-white" />
              </a>
            </div>
            {/* <h5 className="text-white p-3 m-5">
            If you'd like to learn more, please feel free to review my resume{" "}
              <a
                className="text-white"
                href="https://drive.google.com/file/d/1yK_S8n7ugp28GkZ8i47vbED2_O0dDXhU/view?usp=sharing"
                target="_blank"
              >
                <u>here</u>
              </a>
              .
            </h5> */}
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
