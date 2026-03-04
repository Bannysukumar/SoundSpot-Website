import { Link, Navigate, Route, Routes } from "react-router-dom";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

import appLogo from "../../assets/images/icon.png";
import shotDiscover from "../../Screenshot_20260304_205235_Expo Go.jpg.jpeg";
import shotHistory from "../../Screenshot_20260304_205242_Expo Go.jpg.jpeg";
import shotStats from "../../Screenshot_20260304_205246_Expo Go.jpg.jpeg";
import shotSettings from "../../Screenshot_20260304_205252_Expo Go.jpg.jpeg";
import shotPlaylists from "../../Screenshot_20260304_205324_Expo Go.jpg.jpeg";

const screenshots = [
  { src: shotDiscover, title: "Discover songs instantly" },
  { src: shotHistory, title: "View your recognition history" },
  { src: shotStats, title: "Track listening insights" },
  { src: shotSettings, title: "Control auto recognition" },
  { src: shotPlaylists, title: "Manage playlists quickly" },
];

function HomePage() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <img src={appLogo} alt="SoundSpot logo" />
            <span>SoundSpot</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <a href="#contact">Contact</a>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Identify Songs in Seconds</h1>
          <p>
            SoundSpot helps you recognize music around you, save favourites, and
            explore your listening history with a fast, elegant experience.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#contact">
              Contact Team
            </a>
            <a className="btn ghost" href="#screenshots">
              View Screenshots
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <h2>About SoundSpot</h2>
          <p className="section-note section-copy">
            SoundSpot is a modern music recognition app built for speed and
            clarity. You can detect songs, review past matches, monitor listening
            patterns, and manage recognition settings from one clean interface.
          </p>
        </section>

        <section id="features" className="section">
          <h2>Core Features</h2>
          <div className="feature-grid">
            <article>
              <h3>One-tap recognition</h3>
              <p>Detect songs quickly with a simple tap and instant results.</p>
            </article>
            <article>
              <h3>History and favourites</h3>
              <p>Keep a clear record of songs you identified and loved.</p>
            </article>
            <article>
              <h3>Smart auto mode</h3>
              <p>
                Enable auto recognition with interval and charging controls.
              </p>
            </article>
            <article>
              <h3>Useful music stats</h3>
              <p>
                Follow unique songs, top artists, and listening peaks over time.
              </p>
            </article>
            <article>
              <h3>Playlist management</h3>
              <p>Create and organize playlists to keep your tracks sorted.</p>
            </article>
            <article>
              <h3>Dark, focused interface</h3>
              <p>
                Enjoy a professional dark theme designed for daily use and
                readability.
              </p>
            </article>
          </div>
        </section>

        <section id="screenshots" className="section">
          <h2>App Screenshots</h2>
          <p className="section-note">
            Real screenshots from the current SoundSpot build.
          </p>
          <div className="shot-grid">
            {screenshots.map((shot) => (
              <figure key={shot.title} className="shot-card">
                <img src={shot.src} alt={shot.title} loading="lazy" />
                <figcaption>{shot.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact Details</h2>
          <p className="section-note section-copy">
            For support, business inquiries, app listing verification, or privacy
            queries, please use the details below.
          </p>
          <div className="contact-card">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:bannysukumar@gmail.com">
                bannysukumar@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+916301846681">6301846681</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} SoundSpot. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:bannysukumar@gmail.com">bannysukumar@gmail.com</a>
          <Link to="/privacy-policy">Read Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
