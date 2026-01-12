import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TopInfoBar() {
  return (
    <div className="top-info-bar">
      <div className="top-info-container">
        {/* Left side */}
        <div className="top-info-left">
          <span>
            <FaPhoneAlt /> 067 630 8354
          </span>
          <span>
            <FaEnvelope /> obakengtsaagane@gmail.com
          </span>
        </div>

        {/* Right side */}
        <div className="top-info-right">
          <span>
            <FaMapMarkerAlt /> Gauteng, Pretoria | South Africa
          </span>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="XTwitter"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
