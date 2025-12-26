import { motion as Motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpeg";

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
      <div style={{ position: "relative", zIndex: 1 }}>
        <Motion.div
          variants={itemUp}
          style={{ fontSize: "2rem", marginBottom: "1rem" }}
        >
          <h1>Full-Stack Developer</h1>
          <h4>Software • Web • Databases</h4>
        </Motion.div>

        <Motion.p
          variants={itemUp}
          style={{ marginBottom: "1.5rem", color: "#ffffffff" }}
        >
          I build and develop scalable, intelligent systems.
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
    </Motion.section>
  );
}
