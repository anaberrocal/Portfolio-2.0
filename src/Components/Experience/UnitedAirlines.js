import React from 'react';
import UnitedAirlinesIcon from '../../assets/united.png';
import Navbar from '../Navbar';
import './Experience.css';

function UnitedAirlines() {
  return (
    <div className="App">
      <Navbar />
      <div className="experience-detail">
        {/* Hero Section */}
        <div className="experience-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h1 className="display-4 mb-4">United Airlines</h1>
                <h2 className="h4 text-muted mb-4">UI/UX Designer & Developer</h2>
                <p className="lead mb-4">
                Enhanced pilot operations by designing and implementing scalable UI components for high-impact internal tools, streamlining scheduling, messaging, and administrative tasks.
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
            <div className="row">
              <div className="col-lg-8">
                <section className="mb-5">
                  <h3 className="h2 mb-4">Project Overview</h3>
                  <p>
                  I work on two high-visibility, employee-facing
applications, collaborating with design and
engineering teams to deliver and implement

reusable Angular components. Leveraging my in-
house design experience and expertise in

creating detailed mockups in Figma and Sketch, I
use our in-house design system to streamline
development and ensure smooth handoffs. I’ve
contributed to large-scale projects, from design
to code, including a scheduling app, messaging
app, marketing pages, and an admin dashboard.
                  </p>
                  {/* <p>
                    Working closely with the design and backend teams, we created an intuitive interface that simplifies the complex process of searching, comparing, and applying to online education programs. The application features advanced filtering capabilities, detailed program comparisons, and streamlined application processes.
                  </p> */}
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
                    <p className="mb-0">June 2023 - Ongoing</p>
                  </div>
                  {/* <div className="mb-3">
                    <h5 className="h6 text-muted">Team Size</h5>
                    <p className="mb-0">12 members</p>
                  </div> */}
                  <div className="mb-3">
                    <h5 className="h6 text-muted">Role</h5>
                    <p className="mb-0">UI/UX Designer & Developer</p>
                  </div>
                  <div>
                    <h5 className="h6 text-muted">Main skills</h5>
                    <p className="mb-0">Figma, Design Systems, Angular</p>
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