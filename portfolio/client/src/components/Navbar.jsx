export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <a
        className="nav-link"
        href="#top"
        style={{ fontWeight: 700, fontSize: "1rem" }}
      >
        Tsaagane Obakeng Shepherd
      </a>
      <div style={styles.links}>
        <a className="nav-link" href="#about">
          About
        </a>
        <a className="nav-link" href="#services">
          Services
        </a>
        <a className="nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-link" href="#skills">
          Skills
        </a>
        <a className="nav-link" href="#blog">
          Blog
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "1rem 8%",
    background: "rgba(15,23,42,0.85)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "saturate(120%) blur(6px)",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
  },
};
