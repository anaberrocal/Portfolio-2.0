import React from 'react';
import UnitedAirlinesIcon from '../../assets/united.png';
import MarketingPage from '../../assets/marketing-page.png';
import ModalNew from '../../assets/modal-new.png';
import ModalOld from '../../assets/modal-old.png';
import PoolDisplayOld from '../../assets/pool-display-old.png';
import PoolDisplayNew from '../../assets/pool-display-new.png';
import RadOld from '../../assets/rad-old.png';
import RadNew from '../../assets/rad-new.png';
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
                Redesigning internal crew tools to improve efficiency, consistency and user experience at scale within a large, cross-functional enterprise team.
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
                  At United Airlines, I design intuitive, component-based interfaces for high-visibility, employee-facing applications. My focus is on transforming complex internal workflows into clear, efficient experiences that support daily operations at scale. I collaborate closely with engineers and product stakeholders to ensure alignment between design intent and technical implementation, leveraging Figma and our in-house design system to drive consistency, accessibility and scalability across platforms.
                  </p>
                  <p>Projects I’ve contributed to include an internal tool for pilots to view, bid on and manage schedule swaps; two messaging systems; and multiple administrative dashboards.
                  </p>
                  <p>
                  In addition to hands-on product work, I co-lead design initiatives, translating complex requirements into clear milestones and actionable feedback. I conduct design reviews and audits to uphold quality, ensure cohesion and identify areas for improvement. My role bridges thoughtful UX with practical front-end understanding, helping maintain momentum and continuity across teams while supporting both user needs and engineering feasibility.
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
                    ✔️ Contributed to large-scale projects including scheduling and messaging systems, admin dashboards and marketing portals.
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

                <section className="mb-5">
                <h3 className="h2 mb-5">Before & After: Key Redesigns</h3>
                  <div className="mb-5">
                    <h4 className="mb-4">1. Pool Display for Pilot Trade Board</h4>
                    <div className="row-sm">
                    <h4 className="h5 mb-2">Context</h4>
                    <p className="mb-4">The legacy Pool Display made it difficult for pilots to interpret availability and reserve data quickly, slowing down scheduling decisions and increasing reliance on manual oversight.</p>
                    <h4 className="h5 mb-2">Before</h4>
                    <img className="mb-1" src={PoolDisplayOld}/>
                    <p className="text-muted mb-5">Monochrome layout, unclear hierarchy, and hard-to-scan numbers.</p>
                    <h4 className="h5 mb-2 mt-2">After</h4>
                    <img className="mb-1" src={PoolDisplayNew}/>
                    <p className="text-muted mb-5">Refreshed layout with color-coded status indicators, streamlined filters, and improved legibility across all devices.</p>
                    <h4 className="h5 mb-2">Key Improvements</h4>
                    <ul className="list-unstyled">
                      <li>✔️ Introduced color and tyulographic hierarchy to highlight important data</li>
                      <li>✔️ Shifted from tabular format to calendar-style layout for spatial clarity </li>
                      <li>✔️ Added tooltips, filters, and real-time feedback for interactive use</li>
                    </ul>
                    </div>
                  </div>

                  <div className="mb-5 mt-5">
                    <h4 className="mb-4">2. Customize Trip Display</h4>
                    <div className="row-sm">
                    <h4 className="h5 mb-2">Context</h4>
                    <p className="mb-4">The legacy customization modal allowed pilots to select and reorder table columns for trip display, but the experience was cluttered, unintuitive, and difficult to scan. Visual inconsistencies and tight spacing made the interaction frustrating, especially on tablets or smaller screens.</p>
                    <h4 className="h5 mb-2">Before</h4>
                    <img className="mb-1" src={ModalOld}/>
                    <p className="text-muted mb-5">Overwhelming list of checkboxes with inconsistent spacing, unclear groupings, and no responsive layout support.</p>
                    <h4 className="h5 mb-2 mt-2">After</h4>
                    <img className="mb-1" src={ModalNew}/>
                    <p className="text-muted mb-5">Redesigned modal with grouped layout, drag-and-drop reordering, responsive tab views (desktop, tablet, mobile), and simplified controls for better clarity.</p>
                    <h4 className="h5 mb-2">Key Improvements</h4>
                    <ul className="list-unstyled">
                      <li>✔️ Organized column selection into visual drag-and-drop tiles</li>
                      <li>✔️ Introduced device-specific previews with tabbed views (desktop, tablet, mobile)</li>
                      <li>✔️ Improved usability through clean grouping, spacing, and inline tooltips</li>
                      <li>✔️ Added persistent save/cancel controls and reset-to-default option</li>
                    </ul>
                    </div>
                  </div>

                  <div className="mb-5 mt-5">
                    <h4 className="mb-4">3. Reserve Availability Display (RAD) for Pilot Trade Board</h4>
                    <div className="row-sm">
                    <h4 className="h5 mb-2">Context</h4>
                    <p className="mb-4">The original Reserve Availability Display was data-heavy and presented in dense tables with minimal styling or hierarchy. Pilots and schedulers had difficulty scanning for key availability indicators, leading to slower decisions and reliance on external spreadsheets.</p>
                    <h4 className="h5 mb-2">Before</h4>
                    <img className="mb-1" src={RadOld}/>
                    <p className="text-muted mb-5">Dense tabular data with no visual grouping, minimal filters, and no dynamic interaction feedback.</p>
                    <h4 className="h5 mb-2 mt-2">After</h4>
                    <img className="mb-1" src={RadNew}/>
                    <p className="text-muted mb-5">Modern card-based layout with collapsible sections, clearer groupings (LSR, SC, FSB), intuitive filters, and enhanced readability.</p>
                    <h4 className="h5 mb-2">Key Improvements</h4>
                    <ul className="list-unstyled">
                      <li>✔️ Added filter tools for base, aircraft, status, and date range</li>
                      <li>✔️ Introduced section-based grouping by reserve type (LSR, SC, FSB) </li>
                      <li>✔️ Streamlined table headers and improved whitespace for scanability</li>
                      <li>✔️ Added interactivity (expand/collapse, info tooltips) for better accessibility and clarity</li>
                    </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-5">
                <h3 className="h2 mb-5">Internal Launch Marketing Page - CCS+ App</h3>
                <h4 className="h5 mb-2">Context</h4>
                <p className="mb-4">As part of the internal rollout for CCS+, United Airlines’ new pilot-facing mobile platform, I designed this responsive marketing page to build awareness and encourage adoption. The design needed to clearly communicate the app’s key features while aligning with United’s branding and mobile-first standards.</p>
                <img className="mb-5" src={MarketingPage}/>
                <h4 className="h5 mb-2">Key Contributions</h4>
                    <ul className="list-unstyled">
                      <li>✔️ Created a full responsive layout from scratch</li>
                      <li>✔️ Wrote and refined copy content for clarity and conciseness</li>
                      <li>✔️ Designed all visual elements, including layout, iconography, and app mockups</li>
                      <li>✔️ Ensured brand alignment across internal and external references</li>
                    </ul>
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