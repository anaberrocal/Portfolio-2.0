import React from 'react';
import Feature23Icon from '../../assets/f23.png';
import Navbar from '../Navbar';
import './Experience.css';

function Feature23() {
  return (
    <div className="App">
      <Navbar />
      <div className="experience-detail">
        {/* Hero Section */}
        <div className="experience-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h1 className="display-4 mb-4">Feature23</h1>
                <h2 className="h4 text-muted mb-4">Product Designer and Developer</h2>
                <p className="lead mb-4">
                  A React-based web application connecting users with online degree programs from accredited institutions across the U.S.
                </p>
                <a
                  href="https://www.linkedin.com/company/feature23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Visit LinkedIn
                </a>
              </div>
              <div className="col-lg-6">
                <img 
                  src={Feature23Icon} 
                  alt="Feature23" 
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
                  As a product designer, I created and enhanced applications for national enterprise clients utilizing Adobe XD in a fast-paced environment, incorporating user feedback and managing high-visibility client interactions. I contributed to feature development across multiple applications and built a full-stack prototype that secured a major project with a key client.
                  </p>
                  <p>
                    Working closely with the design and backend teams, we created an intuitive interfaces for multiple clients accross different industries.
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
                  <h3 className="h2 mb-4">Technical Details</h3>
                  <p>
                    The application was built using modern web technologies and best practices, including:
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card bg-light mb-3">
                        <div className="card-body">
                          <h4 className="h5 mb-3">Frontend Stack</h4>
                          <ul className="list-unstyled">
                            <li>• React.js</li>
                            <li>• Material-UI</li>
                            <li>• Redux</li>
                            <li>• TypeScript</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card bg-light mb-3">
                        <div className="card-body">
                          <h4 className="h5 mb-3">Development Tools</h4>
                          <ul className="list-unstyled">
                            <li>• Git</li>
                            <li>• Jest</li>
                            <li>• Webpack</li>
                            <li>• ESLint</li>
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
                    <p className="mb-0">July 2020 - November 2021</p>
                  </div>
                  <div className="mb-3">
                    <h5 className="h6 text-muted">Role</h5>
                    <p className="mb-0">Product Designer and Developer</p>
                  </div>
                  <div>
                    <h5 className="h6 text-muted">Location</h5>
                    <p className="mb-0">Remote</p>
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

export default Feature23; 