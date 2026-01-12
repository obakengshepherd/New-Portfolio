import { useState } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import profilePic from "../assets/pro pic.jpeg";
import placeholder from "../assets/placeholder.png";

/* =======================
   ICON IMPORTS
======================= */

/* Backend / Core */
import { FaNodeJs, FaPython, FaPhp, FaDocker, FaAws } from "react-icons/fa";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { SiLaravel } from "react-icons/si";

/* Frameworks / APIs */
import { SiExpress, SiDotnet, SiGraphql, SiNginx } from "react-icons/si";

/* Databases */
import { SiPostgresql, SiMysql, SiMongodb } from "react-icons/si";
import { SiPrisma, SiSequelize } from "react-icons/si";

/* Frontend / UI */
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiCss3, SiHtml5 } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

/* Analytics */
import { SiChartdotjs } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";

/* CMS */
import { FaWordpress } from "react-icons/fa";

/* AI */
import { SiOpenai } from "react-icons/si";

/* Automation / DevOps */
import { SiGithubactions } from "react-icons/si";

/* Design & Signage */
import { SiFigma, SiCanva, SiAdobeaftereffects } from "react-icons/si";

/* Social */
import { FaGithub, FaLinkedin } from "react-icons/fa";

/* Other */
import { SiNetlify, SiDigitalocean } from "react-icons/si";
import { FaGitlab } from "react-icons/fa";
import { SiBitbucket } from "react-icons/si";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [activeTab, setActiveTab] = useState("frontend");

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
            <h1>
              I help businesses run better through well-designeed, automated
              digital systems.
            </h1>

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
                <span aria-hidden></span>
                <FaLinkedin />
              </a>
              <a
                className="nav-link"
                href="https://github.com/obakengshepherd"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <span aria-hidden></span>
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* =======================
          SERVICES
      ======================= */}
      <Section id="services" title="Services">
        <div className="container">
          <div className="projects-grid">
            {[
              {
                title: "Database Cleanup & Optimization",
                desc: "Schema refactoring, performance tuning, indexing strategies, backups and data integrity improvements.",
                action: "Optimize My Database",
                icons: [
                  <TbSql />,
                  <SiPostgresql />,
                  <SiMysql />,
                  <SiMongodb />,
                ],
              },
              {
                title: "Custom API & Backend Systems",
                desc: "Secure REST & GraphQL APIs, authentication, rate limiting and scalable backend architectures.",
                action: "Design My Backend",
                icons: [
                  <FaNodeJs />,
                  <SiExpress />,
                  <SiDotnet />,
                  <SiGraphql />,
                  <TbBrandCSharp />,
                ],
              },
              {
                title: "Reporting & Analytics Dashboards",
                desc: "Data-driven dashboards with automated pipelines, real-time insights and clean UI presentation.",
                action: "Visualize My Data",
                icons: [
                  <FaReact />,
                  <VscGraph />,
                  <SiChartdotjs />,
                  <SiPostgresql />,
                ],
              },
              {
                title: "Automation & Workflow Engineering",
                desc: "Custom scripts, schedulers and AI-assisted processes to eliminate manual work and improve efficiency.",
                action: "Automate My Processes",
                icons: [<FaNodeJs />, <FaPython />, <SiGithubactions />],
              },
              {
                title: "Product-Focused UI & Digital Design",
                desc: "Clean UI/UX for web apps, dashboards and product-driven interfaces.",
                action: "Design My Product Interface",
                icons: [
                  <SiFigma />,
                  <FaReact />,
                  <SiTailwindcss />,
                  <SiCss3 />,
                ],
              },
              {
                title: "Digital Menu Boards & Signage Systems",
                desc: "Static and animated digital menus, signage visuals and screen-ready content.",
                action: "Create My Digital Menu",
                icons: [
                  <SiCanva />,
                  <SiAdobeaftereffects />,
                  <SiFigma />,
                  <SiHtml5 />,
                ],
              },
              {
                title: "CMS Development & Content Systems",
                desc: "Custom WordPress builds and admin-friendly content platforms.",
                action: "Launch My Content System",
                icons: [<FaWordpress />, <FaPhp />, <SiMysql />],
              },
              {
                title: "Basic AI Integrations",
                desc: "Chatbots, summarization, intelligent endpoints and AI-enhanced system features.",
                action: "Add Intelligence to My System",
                icons: [<SiOpenai />, <FaNodeJs />, <FaPython />],
              },
              {
                title: "Full System Setup & Deployment",
                desc: "CI/CD pipelines, cloud deployment and production-ready systems.",
                action: "Take My System Live",
                icons: [
                  <FaAws />,
                  <FaDocker />,
                  <SiGithubactions />,
                  <SiNginx />,
                ],
              },
            ].map((s, i) => (
              <div className="project-card" key={i}>
                <img
                  src={placeholder}
                  alt={s.title}
                  className="project-image"
                />

                <div className="project-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>

                  {/* ICON ROW */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      fontSize: "1.5rem",
                      opacity: 0.85,
                      margin: "1.5rem 0",
                    }}
                  >
                    {s.icons.map((Icon, idx) => (
                      <span key={idx}>{Icon}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button className="btn">{s.action}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2
            style={{
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            I am open to working with and using any appropriate tool or
            technology within my scope of services to deliver the best results
            and get the job done effectively.
          </h2>
        </div>
      </Section>

      {/* =======================
          SKILLS SECTION
      ======================= */}
      <Section id="skills" title="Skills">
        {/* Tabs */}
        <div className="skills-tabs">
          <button className="btn" onClick={() => setActiveTab("frontend")}>
            Frontend
          </button>
          <button className="btn" onClick={() => setActiveTab("backend")}>
            Backend
          </button>
          <button className="btn" onClick={() => setActiveTab("databases")}>
            Databases
          </button>
          <button className="btn" onClick={() => setActiveTab("tools")}>
            Tools & Platforms
          </button>
        </div>

        {/* Grid Wrapper */}
        <div className="skills-grid-wrapper">
          {activeTab === "frontend" && (
            <div className="logo-grid">
              <FaHtml5 style={{ fontSize: "100px" }} />
              <FaCss3Alt style={{ fontSize: "100px" }} />
              <FaJs style={{ fontSize: "100px" }} />
              <SiTypescript style={{ fontSize: "100px" }} />
              <FaReact style={{ fontSize: "100px" }} />
              <SiTailwindcss style={{ fontSize: "100px" }} />
              <FaBootstrap style={{ fontSize: "100px" }} />
            </div>
          )}

          {activeTab === "backend" && (
            <div className="logo-grid">
              <FaNodeJs style={{ fontSize: "100px" }} />
              <SiExpress style={{ fontSize: "100px" }} />
              <SiDotnet style={{ fontSize: "100px" }} />
              <TbBrandCSharp style={{ fontSize: "100px" }} />
              <FaPython style={{ fontSize: "100px" }} />
              <FaPhp style={{ fontSize: "100px" }} />
              <SiLaravel style={{ fontSize: "100px" }} />
              <SiGithubactions style={{ fontSize: "100px" }} />
            </div>
          )}

          {activeTab === "databases" && (
            <div className="logo-grid">
              <TbSql style={{ fontSize: "100px" }} />
              <SiMongodb style={{ fontSize: "100px" }} />
              <SiPostgresql style={{ fontSize: "100px" }} />
              <SiMysql style={{ fontSize: "100px" }} />
              <SiPrisma style={{ fontSize: "100px" }} />
              <SiSequelize style={{ fontSize: "100px" }} />
              <VscGraph style={{ fontSize: "100px" }} />
              <SiChartdotjs style={{ fontSize: "100px" }} />
            </div>
          )}

          {activeTab === "tools" && (
            <div className="logo-grid">
              <FaGithub style={{ fontSize: "100px" }} />
              <FaGitlab style={{ fontSize: "100px" }} />
              <SiBitbucket style={{ fontSize: "100px" }} />
              <SiOpenai style={{ fontSize: "100px" }} />
              <FaAws style={{ fontSize: "100px" }} />
              <SiNetlify style={{ fontSize: "100px" }} />
              <SiDigitalocean style={{ fontSize: "100px" }} />
              <SiGraphql style={{ fontSize: "100px" }} />
            </div>
          )}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="container">
          <div className="projects-grid">
            {[
              {
                title: "Project One",
                desc: "Short description of project one.",
                live: "#",
                repo: "#",
                link: "#",
              },
              {
                title: "Project Two",
                desc: "Short description of project two.",
                live: "#",
                repo: "#",
                link: "#",
              },
              {
                title: "Project Three",
                desc: "Short description of project three.",
                live: "#",
                repo: "#",
                link: "#",
              },
            ].map((p, i) => (
              <div className="project-card" key={i}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-image-link"
                >
                  <img
                    src={placeholder}
                    alt={p.title}
                    className="project-image"
                  />
                </a>

                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>

                  <div className="project-actions">
                    <a className="btn" href={p.live} target="_blank">
                      Live
                    </a>
                    <a className="btn" href={p.repo} target="_blank">
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showMoreProjects && (
            <div className="projects-grid" style={{ marginTop: "1rem" }}>
              {[
                {
                  title: "Project Four",
                  desc: "Hidden project one.",
                  live: "#",
                  repo: "#",
                  link: "#",
                },
                {
                  title: "Project Five",
                  desc: "Hidden project two.",
                  live: "#",
                  repo: "#",
                  link: "#",
                },
                {
                  title: "Project Six",
                  desc: "Hidden project three.",
                  live: "#",
                  repo: "#",
                  link: "#",
                },
              ].map((p, i) => (
                <div className="project-card" key={i}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-image-link"
                  >
                    <img
                      src={placeholder}
                      alt={p.title}
                      className="project-image"
                    />
                  </a>

                  <div className="project-content">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>

                    <div className="project-actions">
                      <a className="btn" href={p.live} target="_blank">
                        Live
                      </a>
                      <a className="btn" href={p.repo} target="_blank">
                        Repo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="project-actions" style={{ marginTop: "1rem" }}>
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
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
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
