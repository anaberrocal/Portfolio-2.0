import React from 'react';
import StackPathIcon from '../../assets/sp.png';
import Navbar from '../Navbar';
import './Experience.css';

function StackPath() {
  return (
    <div className="App">
      <Navbar />
      <div className="experience-detail">
        {/* Hero Section */}
        <div className="experience-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h1 className="display-5 mb-4">StackPath</h1>
                <div className="mb-4">
                    <h5 className="h6 text-muted">Role</h5>
                    <p className="mb-0">UI/UX Designer & Developer</p>
                  </div>
                  <div className="mb-4">
                  <h5 className="h6 text-muted">Duration</h5>
                    <p className="mb-0">November 2021 - February 2023</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="h6 text-muted">Tools</h5>
                    <p className="mb-0">Figma, Design Systems, StoryBook</p>
                  </div>
                  <p className="font-semi-bold mb-4">Standardized design across cloud interfaces through a reusable component system and collaborated closely with developers in a distributed product org.
                </p>
                <a
                  href="https://www.linkedin.com/company/stackpath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Visit LinkedIn
                </a>
              </div>
              <div className="col-lg-6">
                <img 
                  src={StackPathIcon} 
                  alt="StackPath" 
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
                  At StackPath, I played a key role in designing and maintaining a reusable component system that standardized UI across multiple web applications. I worked within a multidisciplinary team to identify inconsistencies, define design tokens, and build a unified visual language that scaled across platforms. Using Figma and Storybook, I created detailed documentation to support seamless implementation by front-end developers. This process required close collaboration and a deep understanding of both design principles and front-end frameworks, especially in aligning interaction patterns with development constraints.
                  </p>
                  <p>
                  My work contributed to a faster design-to-dev handoff process, fewer redundancies in the codebase, and a more cohesive user experience for customers. This experience deepened my skills in design systems thinking, cross-functional collaboration, and advocating for design consistency in a fast-paced, engineering-heavy environment.
                  </p>
                </section>

                <section className="mb-5">
                  <h3 className="h2 mb-4">Key Responsibilities</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                    ✔️ Contributed to the design and evolution of a reusable component library across multiple product teams.
                    </li>
                    <li className="mb-3">
                    ✔️  Developed UI documentation and interaction guidelines using Storybook to support consistent implementation.
                    </li>
                    <li className="mb-3">
                    ✔️ Partnered with front-end engineers to align design with technical constraints, improving efficiency in cross-functional delivery.
                    </li>
                    <li className="mb-3">
                    ✔️ Conducted UI audits to identify visual and UX inconsistencies, driving system-wide improvements in user interface quality.
                    </li>
                    <li className="mb-3">
                    ✔️ Helped refine UX workflows and component logic to ensure design system scalability across enterprise applications.
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
                            <li>• UI Testing</li>
                            <li>• UI Auditing</li>
                          </ul>
                      </div>
                    </div>
                    <div className="col-sm">
                        <div>
                          <h4 className="h5 mb-3">Development</h4>
                          <ul className="list-unstyled">
                            <li>• React</li>
                            <li>• Storybook</li>
                            <li>• HTML/CSS</li>
                            <li>• Components library</li>
                          </ul>
                      </div>
                    </div>
                    <div className="col-sm">
                        <div>
                          <h4 className="h5 mb-3">Methods</h4>
                          <ul className="list-unstyled">
                            <li>• Documentation</li>
                            <li>• Design QA</li>
                            <li>• Crossfunctional workflow</li>
                            <li>• Component testing</li>
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
                    <p className="mb-0">Lack of standardized UI components across applications led to visual inconsistencies and slower development cycles.</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="h6 text-muted">Outcome</h5>
                    <p className="mb-0">Contributed to a reusable design system and detailed Storybook documentation that improved visual cohesion and design-to-dev speed.</p>
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

export default StackPath; 