import { Link } from "react-router-dom";

export default function PrivacyPolicyPage() {
  return (
    <div className="policy-page">
      <header className="policy-header">
        <Link to="/" className="back-link">
          ← Back to website
        </Link>
        <h1>SoundSpot Privacy Policy</h1>
        <p>Effective date: March 4, 2026</p>
      </header>

      <main className="policy-content">
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            SoundSpot may collect information needed to provide core features,
            such as app settings, song recognition history, and diagnostic
            information for crash and performance improvement.
          </p>
        </section>

        <section>
          <h2>2. Microphone Permission</h2>
          <p>
            SoundSpot uses microphone access only to identify music. Audio is
            processed for song recognition functionality and is not used for
            unrelated tracking.
          </p>
        </section>

        <section>
          <h2>3. How We Use Data</h2>
          <p>We use collected data to:</p>
          <ul>
            <li>Provide and improve song recognition features</li>
            <li>Save your app preferences and history</li>
            <li>Maintain app security and performance</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Sharing</h2>
          <p>
            We do not sell your personal data. Data may be shared with service
            providers only when needed to operate core app functionality and in
            compliance with applicable laws.
          </p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We apply reasonable technical and organizational safeguards to
            protect data from unauthorized access, misuse, and disclosure.
          </p>
        </section>

        <section>
          <h2>6. Your Choices</h2>
          <p>
            You can control permissions through device settings and may
            discontinue app use at any time. You can also clear local app data
            by uninstalling the app.
          </p>
        </section>

        <section>
          <h2>7. Children&apos;s Privacy</h2>
          <p>
            SoundSpot is not designed to knowingly collect personal information
            from children without required legal consent.
          </p>
        </section>

        <section>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be reflected by updating the effective date on this
            page.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>
            For privacy questions, contact us at:
            <br />
            <a href="mailto:support@soundspot.app">support@soundspot.app</a>
          </p>
        </section>
      </main>
    </div>
  );
}
