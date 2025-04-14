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
                <h2 className="h4 text-muted mb-4">React Developer</h2>
                <p className="lead mb-4">
                  A React-based web application connecting users with online degree programs from accredited institutions across the U.S.
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
                    As a React Developer at StackPath, I leveraged my expertise in React, JavaScript, HTML, CSS, Material-UI, and visual design to deliver impactful solutions. The platform serves as a bridge between prospective students and educational institutions, making the process of finding and enrolling in online degree programs seamless and efficient.
                  </p>
                  <p>
                    Working closely with the design and backend teams, we created an intuitive interface that simplifies the complex process of searching, comparing, and applying to online education programs. The application features advanced filtering capabilities, detailed program comparisons, and streamlined application processes.
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
                    <p className="mb-0">2 years</p>
                  </div>
                  <div className="mb-3">
                    <h5 className="h6 text-muted">Team Size</h5>
                    <p className="mb-0">12 members</p>
                  </div>
                  <div className="mb-3">
                    <h5 className="h6 text-muted">Role</h5>
                    <p className="mb-0">React Developer</p>
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

export default StackPath; 