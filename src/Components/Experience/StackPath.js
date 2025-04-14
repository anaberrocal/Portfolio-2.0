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
                <h1 className="display-4 mb-4">StackPath</h1>
                <h2 className="h4 text-muted mb-4">UI/UX Designer and Developer</h2>
                <p className="lead mb-4">
                  Cloud Computing start-up located in Dallas, TX.
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
            <div className="row">
              <div className="col-lg-8">
                <section className="mb-5">
                  <h3 className="h2 mb-4">Project Overview</h3>
                  <p>
                  StackPath is a cloud computing and services provider that puts its locations in densely populated markets. At StackPath, I helped design and build our very own Design System, "Cosmos". The intention behind Cosmos was to unify and expedite the software development process among all different engineering teams by creating custom, reusable, accesible and fully-functional React and web components.
                  </p>
                  <p>
                  I helped design, build, and maintain a reusable component design system to standardize the user and developer experience, enhancing UX consistency across applications with Figma. I also created user-focused documentation with StoryBook and ensured seamless integration of components into development workflows.
                  </p>
                </section>

                <section className="mb-5">
                  <h3 className="h2 mb-4">Key Responsibilities</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Developed responsive and accessible React components using Material-UI
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Implemented advanced search and filtering functionality
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Created interactive comparison tools for education programs
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Optimized application performance and load times
                    </li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h3 className="h2 mb-4">Skills and Tools</h3>
                  <p>
                  These are some of the tools and skills I utilize while working on this project:
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card bg-light mb-3">
                        <div className="card-body">
                          <h4 className="h5 mb-3">Design</h4>
                          <ul className="list-unstyled">
                            <li>• Figma</li>
                            <li>• Design Systems</li>
                            <li>• Prototyping</li>
                            <li>• Sketch</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card bg-light mb-3">
                        <div className="card-body">
                          <h4 className="h5 mb-3">Development</h4>
                          <ul className="list-unstyled">
                            <li>• Angular</li>
                            <li>• TypeScript</li>
                            <li>• HTML/CSS/SASS/SCSS</li>
                            <li>• NodeJS</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="col-lg-4">
                <div className="quick-facts">
                  <h4 className="h3 mb-4">Quick Facts</h4>
                  <div className="mb-3">
                    <h5 className="h6 text-muted">Duration</h5>
                    <p className="mb-0">November 2021 - February 2023</p>
                  </div>
                  <div className="mb-3">
                    <h5 className="h6 text-muted">Role</h5>
                    <p className="mb-0">UI/UX Designer and Developer</p>
                  </div>
                  <div>
                    <h5 className="h6 text-muted">Main skills</h5>
                    <p className="mb-0">Figma, Design Systems, StoryBook </p>
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