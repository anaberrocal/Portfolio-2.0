import React from 'react';
import UnitedAirlinesIcon from '../../assets/united.png';
import Navbar from '../Navbar';
import './Experience.css';
import '../../App.css';
// import DevIcon from "devicon-react-svg";
// import { SiJavascript, SiSketch, SiSketchfab } from "react-icons/si";
// import materialui from "./assets/materialui.png";
// import RestAPI from "./assets/RestfulAPI.png";
// import ResponsiveDesign from "./assets/responsive-design.png";
import figma from "../../assets/figma.png";
// import angular from "./assets/angular.png";
// import stenciljs from "./assets/stencil-js.png";
// import storybook from "./assets/storybook.png";
// import typescript from "./assets/typescript.png";
// import { FaBitbucket } from "react-icons/fa";
// import { SiAdobexd } from "react-icons/si";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaRåact } from "react-icons/fa";
// import { VscAzureDevops } from "react-icons/vsc";
// import { VscVscode } from "react-icons/vsc";

function UnitedAirlines() {

  const devIconStyle = {
    width: "24px",
  };

  return (
    <div className="App">
      <Navbar />
      <div className="experience-detail">
        {/* Hero Section */}
        <div className="experience-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h1 className="display-5 mb-4">United Airlines</h1>
                <div className="mb-4">
                    <h5 className="h6 text-muted">Role</h5>
                    <p className="mb-0">Product Designer & Developer</p>
                  </div>
                <div className="mb-4">
                    <h5 className="h6 text-muted">Duration</h5>
                    <p className="mb-0">June 2023 - Ongoing</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="h6 text-muted">Tools</h5>
                    <p className="mb-0">Figma, Design Systems, Angular</p>
                  </div>
                <p className="font-semi-bold mb-4">
                Redesigning internal crew tools to improve efficiency, consistency, and user experience at scale within a large, cross-functional enterprise team.
                </p>
                <a
                  href="https://www.united.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Visit United
                </a>
              </div>
              <div className="col-lg-6">
                <img 
                  src={UnitedAirlinesIcon} 
                  alt="United Airlines" 
                  className="img-fluid rounded shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="experience-content">
          <div className="container">
            <div className="row main-cont">
              <div className="col-lg-8">
                <section className="mb-5">
                  <h3 className="h2 mb-4">Project Overview</h3>
                  <p>
                  At United Airlines, I design intuitive, component-based interfaces for high-visibility, employee-facing applications. My focus is on transforming complex internal workflows into clear, efficient user experiences that support day-to-day operations at scale. I collaborate closely with engineers and product stakeholders to ensure seamless alignment between design intent and technical implementation, using Figma and our in-house design system to drive visual consistency, accessibility, and scalability across platforms. Projects I've contributed to include a crew scheduling app, internal messaging system, and administrative dashboards.
                  </p>
                  <p>
                  I also co-led design initiatives, helping maintain momentum, uphold design standards, and provide continuity across ongoing deliverables. My role bridges thoughtful UX with practical front-end understanding, ensuring every design decision supports both the user and the engineering process.
                  </p>
                </section>

                <section className="mb-5">
                  <h3 className="h2 mb-4">Key Responsibilities</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                    ✔️  Designed scalable, component-based UIs using Figma and an internal design system for employee-facing tools.
                    </li>
                    <li className="mb-3">
                    ✔️  Collaborated with engineers to ensure seamless design-to-development handoff and UI consistency across Angular-based applications.
                    </li>
                    <li className="mb-3">
                    ✔️ Contributed to large-scale projects including scheduling and messaging systems, admin dashboards, and marketing portals.
                    </li>
                    <li className="mb-3">
                    ✔️ Co-led design planning and project coordination to maintain workflow and design standards.
                    </li>
                    <li className="mb-3">
                    ✔️ Created high-fidelity prototypes and supported front-end QA to validate interactions and usability before launch.
                    </li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h3 className="h2 mb-4">Skills and Tools</h3>
                  <div className="row">
                    <div className="col-sm">
                        <div>
                          <h4 className="h5 mb-3">Design</h4>
                          <ul className="list-unstyled">
                            <li>• Figma</li>
                            <li>• Design Systems</li>
                            <li>• Prototyping</li>
                            <li>• UI Architechture</li>
                          </ul>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div>
                          <h4 className="h5 mb-3">Development</h4>
                          <ul className="list-unstyled">
                            <li>• Angular</li>
                            <li>• HTML/CSS/SCSS</li>
                            <li>• TypeScript</li>
                            <li>• GitHub</li>
                          </ul>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div>
                          <h4 className="h5 mb-3">Methods</h4>
                          <ul className="list-unstyled">
                            <li>• Developer Handoff</li>
                            <li>• Agile Workflow</li>
                            <li>• System Thinking</li>
                            <li>• Cross-team Collaboration</li>
                          </ul>
                        </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="col-lg-4">
                <div className="quick-facts">
                  <h4 className="h3 mb-4">Problem + Outcome</h4>
                  <div className="mb-4">
                    <h5 className="h6 text-muted">Problem</h5>
                    <p className="mb-0">Crew workflows were split across three outdated legacy apps, each with inconsistent UX, dated visuals and limited integration, leading to inefficiencies and a disjointed user experience.</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="h6 text-muted">Outcome</h5>
                    <p className="mb-0">We unified them into one modern web app and a matching mobile version, streamlining workflows and delivering a consistent, scalable user experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnitedAirlines; 