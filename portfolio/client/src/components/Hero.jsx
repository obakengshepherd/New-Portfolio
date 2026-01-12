import { motion as Motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpeg";
import { FaNodeJs, FaReact, FaWordpress, FaFigma, FaPhp } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <Motion.section
      className="hero"
      style={{
        "--hero-bg": `url(${heroBg})`,
      }}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Content Layer */}
      <div className="hero-inner">
        {/* LEFT: Text Content */}
        <div className="hero-content">
          <Motion.div
            variants={itemUp}
            style={{ fontSize: "2rem", marginBottom: "1rem" }}
          >
            <h1>Digital Systems & Product Engineer</h1>
            <h4>Software • Web • Databases</h4>
          </Motion.div>

          <Motion.p
            variants={itemUp}
            style={{ marginBottom: "1.5rem", color: "#ffffffff" }}
          >
            <h3>
              Full-Stack Developer specializing in backend systems, automation,
              and product focused design.
            </h3>
          </Motion.p>

          <div className="hero-cta">
            <a href="#projects" className="btn" aria-label="View Projects">
              View Projects
            </a>
            <a href="#skills" className="btn" aria-label="View Skills">
              Skills
            </a>
          </div>
        </div>

        {/* RIGHT: Icon Stack */}
        <Motion.div
          variants={itemUp}
          className="hero-icons hero-icons-right"
          aria-label="Technology stack"
        >
          <IoLogoJavascript title="JavaScript" />
          <SiMongodb title="MongoDB" />
          <SiExpress title="Express.js" />
          <FaReact title="React" />
          <FaNodeJs title="Node.js" />
          <FaFigma title="Figma" />
          <FaWordpress title="WordPress" />
          <FaPhp title="PHP" />
          <TbBrandCSharp title="C#" />
          <TbSql title="SQL" />
        </Motion.div>
      </div>
    </Motion.section>
  );
}
