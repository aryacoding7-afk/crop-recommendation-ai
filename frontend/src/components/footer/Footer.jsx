import "./Footer.css";
import { Link } from "react-router-dom";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        {/* Project Info */}

        <div className="footer-section">

          <h2>🌾 FarmCare AI</h2>

          <p>
            AI powered agriculture assistant that helps farmers
            choose the best crop and track mandi prices.
          </p>

        </div>


        {/* Navigation */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/recommendation">Crop AI</Link>
          <Link to="/library">Crop Library</Link>
          <Link to="/mandi">Mandi Prices</Link>

        </div>


        {/* Team */}

        <div className="footer-section">

          <h3>Project</h3>

          <p>Hackathon Project</p>
          <p>Team Aryacoding7</p>
          <p>Built using React + Flask+AI</p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>© 2026 FarmCare AI | All Rights Reserved</p>

      </div>

    </footer>

  );
}

export default Footer;