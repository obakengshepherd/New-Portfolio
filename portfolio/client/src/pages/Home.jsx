import { useState } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import profilePic from "../assets/pro pic.jpeg";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [activeTab, setActiveTab] = useState("languages");

  async function handleSubmit(e) {
    e.preventDefault();
    // simple client validation
    if (!email || !message || message.length < 10 || !firstName || !lastName) {
      alert(
        "Please provide your name, an email and a longer message (10+ chars)."
      );
      return;
    }

    setSending(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, message }),
      });
      const data = await res.json();
      if (data.success) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        alert("Message sent — thanks!");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Unable to send message");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Section id="about" title="About Me">
        <div className="about-grid container">
          <img className="profile-pic" src={profilePic} alt="Profile" />

          <div>
            <p>
              <h2>
                Full-Stack (MERN) developer with a backend and database
                specialisation.
              </h2>
            </p>

            <p
              style={{
                marginTop: "0.75rem",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <span aria-hidden>📍</span>
              <strong>Location:</strong> Pretoria, Gauteng, South Africa
            </p>

            <p
              style={{
                marginTop: "0.75rem",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <span aria-hidden>✉️</span>
              <strong>Contact:</strong> obakengtsaagane@gmail.com • 067 630 8354
            </p>

            <div
              style={{
                marginTop: "0.75rem",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <a className="btn resume-btn" href="/resume.pdf" download>
                Download Resume
              </a>

              <a
                className="nav-link"
                href="https://linkedin.com/in/obakeng-tsaagane-307544244"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span aria-hidden>🔗</span> LinkedIn
              </a>
              <a
                className="nav-link"
                href="https://github.com/obakengshepherd"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <span aria-hidden>🐙</span> GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="services" title="Services">
        <div className="container">
          <div className="projects-grid">
            <div className="project-card">
              <h3>Database Cleanup & Optimization</h3>
              <p>
                I clean and restructure messy data, normalise schemas where
                necessary, and tune queries for performance. I specialise in
                identifying slow indexes, refactoring costly joins, and
                integrating with Azure services for reliable backups and
                scaling. Typical work includes data deduplication, schema
                optimisation, and implementing monitoring to prevent
                regressions. Clients usually see faster queries and reduced
                operational overhead.
              </p>
              <p>
                <strong>Pricing:</strong> Starting R2,000 / $150
              </p>
              <div style={{ marginTop: "0.5rem" }}>
                <button className="btn">Get Quote</button>
              </div>
            </div>

            <div className="project-card">
              <h3>Custom API Development</h3>
              <p>
                I build secure, well-documented APIs for integrations, using
                best practices around authentication, rate limiting and error
                handling. Example work includes building payment/settlement
                integrations and partner APIs for fintech systems. I commonly
                use C# and Node, and can deliver RESTful or GraphQL interfaces
                depending on needs.
              </p>
              <p>
                <strong>Pricing:</strong> Custom — contact for details
              </p>
              <div style={{ marginTop: "0.5rem" }}>
                <button className="btn">Discuss</button>
              </div>
            </div>

            <div className="project-card">
              <h3>Reporting Dashboards</h3>
              <p>
                Interactive dashboards for business users, combining backend ETL
                and real-time updates (SignalR) where required. I design
                KPI-driven views and automate data pipelines so reports refresh
                reliably. This saves hours on manual reporting and simplifies
                decision-making for stakeholders.
              </p>
              <p>
                <strong>ROI:</strong> Save hours on reports and improve accuracy
              </p>
              <div style={{ marginTop: "0.5rem" }}>
                <button className="btn">See Examples</button>
              </div>
            </div>

            <div className="project-card">
              <h3>Automation Scripts</h3>
              <p>
                Automate repetitive workflows using scripts and lightweight
                services. Examples include data syncs, scheduled processing and
                AI-enhanced automation for logistics. These reduce manual effort
                and enable teams to focus on higher-value work.
              </p>
              <p>
                <strong>Pricing:</strong> Starting R5,000 / $300
              </p>
              <div style={{ marginTop: "0.5rem" }}>
                <button className="btn">Improve Workflow</button>
              </div>
            </div>

            <div className="project-card">
              <h3>Basic AI Integrations</h3>
              <p>
                Quick integrations to add intelligent features — chat
                assistants, summarisation, or simple prediction endpoints. I
                focus on pragmatic solutions that integrate with existing
                systems and deliver measurable value quickly.
              </p>
              <div style={{ marginTop: "0.5rem" }}>
                <button className="btn">Explore AI</button>
              </div>
            </div>

            <div className="project-card">
              <h3>Full Backend Setup</h3>
              <p>
                End-to-end backend architecture setup, including CI/CD,
                observability and deployment to Azure. Ideal when you want a
                production-ready stack built with reliability and scale in mind.
              </p>
              <div style={{ marginTop: "0.5rem" }}>
                <button className="btn">Start Project</button>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <h4>Why Me?</h4>
            <ul>
              <li>NDip in relevant field</li>
              <li>Internship experience and production work</li>
              <li>South Africa and international clients</li>
              <li>Focus on measurable ROI and maintainability</li>
            </ul>

            <h4>Testimonials</h4>
            <div className="project-card">
              "Placeholder testimonial — great work!"
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="container">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "languages" ? "active" : ""}`}
              onClick={() => setActiveTab("languages")}
            >
              Languages
            </div>

            <div
              className={`tab ${activeTab === "frameworks" ? "active" : ""}`}
              onClick={() => setActiveTab("frameworks")}
            >
              Frameworks
            </div>

            <div
              className={`tab ${activeTab === "tools" ? "active" : ""}`}
              onClick={() => setActiveTab("tools")}
            >
              Tools
            </div>

            <div
              className={`tab ${activeTab === "platforms" ? "active" : ""}`}
              onClick={() => setActiveTab("platforms")}
            >
              Platforms
            </div>
          </div>

          {/* CLICK RESULT AREA */}
          <div className="skills-grid-wrapper">
            {activeTab === "languages" && (
              <div className="logo-grid">
                <div className="logo-placeholder">JS</div>
                <div className="logo-placeholder">C#</div>
                <div className="logo-placeholder">Python</div>
                <div className="logo-placeholder">SQL</div>
                <div className="logo-placeholder">Java</div>
              </div>
            )}

            {activeTab === "frameworks" && (
              <div className="logo-grid">
                <div className="logo-placeholder">React</div>
                <div className="logo-placeholder">Node</div>
                <div className="logo-placeholder">Express</div>
                <div className="logo-placeholder">.NET</div>
                <div className="logo-placeholder">Next</div>
              </div>
            )}

            {activeTab === "tools" && (
              <div className="logo-grid">
                <div className="logo-placeholder">Git</div>
                <div className="logo-placeholder">Docker</div>
                <div className="logo-placeholder">Postgres</div>
                <div className="logo-placeholder">VS Code</div>
                <div className="logo-placeholder">Azure</div>
              </div>
            )}

            {activeTab === "platforms" && (
              <div className="logo-grid">
                <div className="logo-placeholder">AWS</div>
                <div className="logo-placeholder">Azure</div>
                <div className="logo-placeholder">GCP</div>
                <div className="logo-placeholder">Linux</div>
                <div className="logo-placeholder">Windows</div>
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="container">
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project One</h3>
              <p>Short description of project one.</p>
              <div className="project-actions">
                <a className="btn" href="#">
                  Live
                </a>
                <a className="btn" href="#">
                  Repo
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>Project Two</h3>
              <p>Short description of project two.</p>
              <div className="project-actions">
                <a className="btn" href="#">
                  Live
                </a>
                <a className="btn" href="#">
                  Repo
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>Project Three</h3>
              <p>Short description of project three.</p>
              <div className="project-actions">
                <a className="btn" href="#">
                  Live
                </a>
                <a className="btn" href="#">
                  Repo
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>Project Four</h3>
              <p>Short description of project four.</p>
              <div className="project-actions">
                <a className="btn" href="#">
                  Live
                </a>
                <a className="btn" href="#">
                  Repo
                </a>
              </div>
            </div>
          </div>

          {showMoreProjects && (
            <div style={{ marginTop: "1rem" }} className="projects-grid">
              <div className="project-card">
                <h3>Project Five</h3>
                <p>More Project A (placeholder)</p>
                <div className="project-actions">
                  <a className="btn" href="#">
                    Live
                  </a>
                  <a className="btn" href="#">
                    Repo
                  </a>
                </div>
              </div>
              <div className="project-card">
                <h3>Project Six</h3>
                <p>More Project B (placeholder)</p>
                <div className="project-actions">
                  <a className="btn" href="#">
                    Live
                  </a>
                  <a className="btn" href="#">
                    Repo
                  </a>
                </div>
              </div>
              <div className="project-card">
                <h3>Project Seven</h3>
                <p>More Project C (placeholder)</p>
                <div className="project-actions">
                  <a className="btn" href="#">
                    Live
                  </a>
                  <a className="btn" href="#">
                    Repo
                  </a>
                </div>
              </div>
              <div className="project-card">
                <h3>Project Eight</h3>
                <p>More Project D (placeholder)</p>
                <div className="project-actions">
                  <a className="btn" href="#">
                    Live
                  </a>
                  <a className="btn" href="#">
                    Repo
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="project-actions">
            <button
              className="btn"
              onClick={() => setShowMoreProjects((s) => !s)}
            >
              {showMoreProjects ? "Show Less" : "View More"}
            </button>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              <input
                placeholder="First Name"
                name="first"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                placeholder="Last Name"
                name="last"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <input
              placeholder="Your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Phone (optional)"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              placeholder="Your message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="contact-actions">
              <button className="btn" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
              <small style={{ color: "#94a3b8" }}>
                I reply within 48 hours.
              </small>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
