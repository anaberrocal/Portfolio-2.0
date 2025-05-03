import React, { useEffect } from "react";
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
import GestureLifeIcon from "./assets/GestureLife.png";
import DistancewareIcon from "./assets/Distanceware.png";
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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UnitedAirlines from "./Components/Experience/UnitedAirlines";
import StackPath from "./Components/Experience/StackPath";
import Feature23 from "./Components/Experience/Feature23";
import GestureLife from "./Components/Experience/GestureLife";
import Distanceware from "./Components/Experience/Distanceware";
import { BiSolidRightArrow } from "react-icons/bi";

function App() {
  const devIconStyle = {
    width: "24px",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="navbar-space"></div>
        <Routes>
          <Route 
            path="/experience/united-airlines" 
            element={
              <div onLoad={() => window.scrollTo(0, 0)}>
                <UnitedAirlines />
              </div>
            } 
          />
          <Route 
            path="/experience/stackpath" 
            element={
              <div onLoad={() => window.scrollTo(0, 0)}>
                <StackPath />
              </div>
            } 
          />
          <Route 
            path="/experience/feature23" 
            element={
              <div onLoad={() => window.scrollTo(0, 0)}>
                <Feature23 />
              </div>
            } 
          />
          <Route path="/" element={
            <>
              {/* Landing Page */}
              <header className="App-header">
                <div className="intro">
                    <span className="intro-title">
                      Ana Berrocal is a NYC based <span className="design">Product Designer</span> and <span className="dev">Developer</span> currently working at <a>United Airlines</a>.
                    </span>
                    <a href="#experience">
                      <button
                        type="button"
                        className="btn btn-primary mt-5 learn-more"
                      >
                        View my recent work
                      </button>
                    </a>
                </div>
              </header>
              {/* Experience */}
              <section id="experience">
                <div className="navbar-space navbar-space-black"></div>
                <div className="experience">
                  <h1 className="mb-5">Work experience</h1>
                  <div className="container-fluid mt-5">
                    <div className="col">
                      <div className="row mb-3">
                        <Link to="/experience/united-airlines" className="text-decoration-none">
                          <div className="card text-dark h-100">
                            <div className="card-body">
                            <div>
                                <h3>United Airlines</h3>
                                <h5 className="card-title">Airlines and Aviation</h5>
                                <h6 className="card-subtitle text-muted">
                                  My role: UI/UX Developer/Designer
                                </h6>
                            </div>
                            <img className="project-img" src={united} alt="Card image" />
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="row mb-3">
                        <Link to="/experience/stackpath" className="text-decoration-none">
                          <div className="card text-dark h-100">
                            <div className="card-body">
                            <div>
                            <h3>StackPath</h3>
                              <h5 className="card-title">Cloud Computing Start-up</h5>
                              <h6 className="card-subtitle text-muted">
                                My role: UI/UX Developer
                              </h6>
                            </div>
                            <img className="project-img" src={sp} alt="Card image" />
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="row mb-3">
                        <Link to="/experience/feature23" className="text-decoration-none">
                          <div className="card text-dark h-100">
                            <div className="card-body">
                            <div>
                              <h3>Feature23</h3>
                              <h5 className="card-title">Software Engineering Firm</h5>
                              <h6 className="card-subtitle text-muted">
                                My role: Product Designer/Developer
                              </h6>
                            </div>
                            <img className="project-img" src={f23} alt="Card image" />
                            </div>
                            {/* <div className="card-body">
                              <p className="font-weight-normal">
                                At Feature[23], I worked with the Chief Product Designer to redesign and implement updates for a large application, collaborated with engineering teams on design improvements and new features, and participated in discovery calls to identify client needs and secure new business, including a national product distributor.
                              </p>
                            </div> */}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Skills */}
              {/* <section id="skills">
                <div className="skills">
                  <div className="container">
                    <h1>The Tech Stack</h1>
                    <div className="container-fluid p-3 skills-container">
                    <span class="badge rounded-pill bg-secondary border border-secondary"><img src={figma} style={devIconStyle} alt="Figma"/>Figma</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary">  <SiSketch size={24} className="text-primary" />Sketch</span>
                    <span  class="badge rounded-pill bg-secondary border border-secondary"><SiAdobexd size={24} className="text-primary"/>Adobe XD</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><VscAzureDevops size={24} className="text-primary"/>Azure DevOps</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><VscVscode size={24} className="text-primary"/>VS Code</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="react" />React</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><SiJavascript size={24} className="text-primary" />JavaScript</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="html5" />HTML</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="css3" />CSS</span>
                    <span  class="badge rounded-pill bg-secondary border border-secondary"><img src={angular} style={devIconStyle} />Angular</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><img src={typescript} style={devIconStyle} />TypeScript</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="nodejs_small" />NodeJS</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><img src={ResponsiveDesign} style={devIconStyle} />Responsive Design</span>
                    <span  class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="bootstrap"/>Bootstrap</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="sass" />Sass</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="npm" />npm</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="git" />git</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="terminal" />bash terminal</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="github_badge" />GitHub</span>
                    <span  class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="visualstudio" />Visual Studio</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><img src={typescript} style={devIconStyle} />TypeScript</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="apple" />Mac OS</span>
                    <span class="badge rounded-pill bg-secondary border border-secondary"><DevIcon style={devIconStyle} icon="windows" />Windows OS</span>            
                    </div>
                  </div>
                </div>
              </section> */}
              {/* About */}
              <section id="about">
                <div className="navbar-space"></div>
                <div className="about">
                  <h1>About Ana</h1>
                  <div className="container text-left pt-3">
                    <p className="font-weight-normal">
                    Ana is a Product Designer with a strong foundation in Frontend Development. I specialize in crafting thoughtful, scalable design systems and user-centered digital experiences. With hands-on experience designing and developing enterprise-grade applications at companies like United Airlines and StackPath, I bring a rare blend of creative vision and technical fluency to every project. I excel at turning complex workflows into elegant, intuitive interfaces—building reusable UI components in Angular, React, and TypeScript, while collaborating cross-functionally in agile environments.
                    </p>
                    <p className="font-weight-normal">
                    With an artistic background and formal training in computer science, I lead with empathy, curiosity, and a deep respect for the user. I’ve successfully contributed to high-impact tools used daily by internal teams, and I thrive in roles where design is both strategic and execution-focused. Whether wireframing, prototyping, coding, or mentoring peers, I take pride in bridging the gap between design and development to ship experiences that are both beautiful and performant.
                    </p>
                    <img src={Ana} alt="Ana Berrocal" className="mx-auto d-block w-25 h-100" />
                    {/* </div> */}
                    {/* <blockquote class="blockquote text-center">
                      <div className="container pb-0 mb-0 pt-0">
                        <p class="mb-0 mt-2 mr-5 ml-5">
                          "UX design shapes the experience, while frontend development brings it to life—together, they turn visions into intuitive, unforgettable interactions."
                        </p>
                        <footer class="blockquote-footer">
                          <cite title="Source Title">Ana Berrocal</cite>
                        </footer>
                      </div>
                    </blockquote> */}
                  </div>
                </div>
              </section>
              {/* Contact */}
                <div className="connect-link_container">
                  <a className="connect-link" href="https://www.linkedin.com/in/anaberrocal/"
                    target="_blank" rel="noreferrer">Let's Connect</a>
                </div>
                <div class="border border-top">
                  <h6 className="mt-2">
                    Made with <FaReact size={30} /> by Ana Berrocal.
                  </h6>
                </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
