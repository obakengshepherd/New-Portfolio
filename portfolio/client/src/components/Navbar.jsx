import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav style={styles.nav}>
      <a
        className="nav-link"
        href="#top"
        style={{ fontWeight: 700, fontSize: "1rem" }}
        onClick={closeMenu}
      >
        Tsaagane Obakeng Shepherd
      </a>

      {/* Hamburger Icon */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        style={styles.hamburger}
      >
        <span
          style={{
            ...styles.line,
            transform: menuOpen ? "rotate(45deg) translateY(10px)" : "none",
          }}
        ></span>
        <span style={{ ...styles.line, opacity: menuOpen ? "0" : "1" }}></span>
        <span
          style={{
            ...styles.line,
            transform: menuOpen ? "rotate(-45deg) translateY(-10px)" : "none",
          }}
        ></span>
      </button>

      {/* Desktop Links */}
      <div style={styles.links} className="desktop-links">
        <a className="nav-link" href="#about" onClick={closeMenu}>
          About
        </a>
        <a className="nav-link" href="#services" onClick={closeMenu}>
          Services
        </a>
        <a className="nav-link" href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a className="nav-link" href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a className="nav-link" href="#blog" onClick={closeMenu}>
          Blog
        </a>
        <a className="nav-link" href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <a className="nav-link" href="#about" onClick={closeMenu}>
            About
          </a>
          <a className="nav-link" href="#services" onClick={closeMenu}>
            Services
          </a>
          <a className="nav-link" href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a className="nav-link" href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a className="nav-link" href="#blog" onClick={closeMenu}>
            Blog
          </a>
          <a className="nav-link" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "1rem 8%",
    background: "rgba(15,23,42,0.95)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "saturate(120%) blur(6px)",
    flexWrap: "wrap",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
    marginLeft: "auto",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "6px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0.5rem",
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: "24px",
    height: "3px",
    background: "#e5e7eb",
    borderRadius: "2px",
    transition: "all 0.3s ease",
  },
  mobileMenu: {
    position: "fixed",
    top: "70px",
    right: 0,
    width: "100%",
    maxWidth: "300px",
    background: "rgba(15,23,42,0.98)",
    backdropFilter: "blur(6px)",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "1.5rem 1rem",
    borderTop: "1px solid rgba(100,120,180,0.2)",
    boxShadow: "-2px 4px 12px rgba(0, 0, 0, 0.3)",
  },
};

// Media query styles for mobile - add to global CSS
if (typeof window !== "undefined") {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  const updateStyles = (e) => {
    if (e.matches || window.innerWidth <= 768) {
      // Mobile styles will be handled by CSS media query
    }
  };
  mediaQuery.addEventListener("change", updateStyles);
}
