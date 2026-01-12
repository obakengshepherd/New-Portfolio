import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Particles from "./components/Particles";
import TopInfoBar from "./components/TopInfoBar";

export default function App() {
  return (
    <BrowserRouter>
      <TopInfoBar />
      {/* top anchor for `home` links */}
      <div id="top" />
      <Navbar />

      {/* Global Background */}
      <Particles />

      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
      </div>
      <Home />
      <Footer />
    </BrowserRouter>
  );
}
