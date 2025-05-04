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
                <h1 className="display-5 mb-4">Feature23</h1>
                <div className="mb-4">
                    <h5 className="h6 text-muted">Role</h5>
                    <p className="mb-0">Product Designer & Developer</p>
                  </div>
                <div className="mb-4">
                    <h5 className="h6 text-muted">Duration</h5>
                    <p className="mb-0">July 2020 - November 2021</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="h6 text-muted">Tools</h5>
                    <p className="mb-0">Adobe XD, Angular, Reusable components</p>
                  </div>
                  <p className="font-semi-bold mb-4">
                Designing enterprise tools in fast-paced sprints, balancing usability and flexibility across multidisciplinary client-facing teams.
                </p>
                <a
                  href="https://www.feature23.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Visit Feature23
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
            <div className="row main-cont">
              <div className="col-lg-8">
                <section className="mb-5">
                  <h3 className="h2 mb-4">Project Overview</h3>
                  <p>
                  At Feature 23, I owned the design of digital products for enterprise clients across industries, working on rapid sprint cycles where iterative feedback and client collaboration were key. I translated stakeholder needs and technical requirements into intuitive, responsive user interfaces using Adobe XD and Figma, often collaborating directly with developers to bring concepts to life. In one high-stakes engagement, I built a full-stack prototype to help pitch a vision for a new application. This prototype played a critical role in winning a major account.
                  </p>
                  <p>
                  My work included wireframing, prototyping, and delivering high-fidelity UI designs, with a strong emphasis on scalability, usability, and system thinking. I became known for my ability to balance creativity with clarity, bringing a holistic product mindset that blends design thinking with hands-on implementation awareness.
                  </p>
                </section>

                <section className="mb-5">
                  <h3 className="h2 mb-4">Key Responsibilities</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                    ✔️ Owned the UX design of enterprise web applications, delivering responsive, user-centered designs in Adobe XD and Figma.
                    </li>
                    <li className="mb-3">
                    ✔️ Worked directly with developers and clients to translate business needs into functional UI patterns and workflows.
                    </li>
                    <li className="mb-3">
                    ✔️ Built a full-stack prototype that helped secure a major client win, demonstrating the value of rapid prototyping in product strategy.
                    </li>
                    <li className="mb-3">
                    ✔️ Created wireframes, interactive prototypes, and polished visual designs under tight deadlines and shifting requirements.
                    </li>
                    <li className="mb-3">
                    ✔️ Balanced creative exploration with technical feasibility, ensuring alignment between client expectations and dev capabilities.
                    </li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h3 className="h2 mb-4">Skills & Tools</h3>
                  <div className="row">
                    <div className="col-sm">
                        <div>
                          <h4 className="h5 mb-3">Design</h4>
                          <ul className="list-unstyled">
                            <li>• Adobe XD</li>
                            <li>• User Discovery Sessions</li>
                            <li>• Wireframing</li>
                            <li>• Rapid Prototyping</li>
                          </ul>
                      </div>
                    </div>
                    <div className="col-sm">
                        <div>
                          <h4 className="h5 mb-3">Development</h4>
                          <ul className="list-unstyled">
                            <li>• HTML/CSS</li>
                            <li>• JavaScript/Angular</li>
                            <li>• Angular Material</li>
                            <li>• Reusable components</li>
                          </ul>
                      </div>
                    </div>
                    <div className="col-sm">
                        <div>
                          <h4 className="h5 mb-3">Methods</h4>
                          <ul className="list-unstyled">
                            <li>• Agile design sprints</li>
                            <li>• Client collaboration</li>
                            <li>• Stakeholder presentations</li>
                            <li>• User testing</li>
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
                    <p className="mb-0">Clients needed intuitive, responsive interfaces for complex enterprise tools, often under tight timelines and evolving requirements.</p>
                  </div>
                  <div className="mb-3">
                    <h5 className="h6 text-muted">Outcome</h5>
                    <p className="mb-0">Delivered polished, user-centered designs and a full-stack prototype that secured a key client. Demonstrating the value of design-driven development.</p>
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