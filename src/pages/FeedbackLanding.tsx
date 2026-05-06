import React, { useState } from 'react';
import './FeedbackLanding.css';

interface FeedbackLandingProps {
  onNavigateToSignUp?: () => void;
}

const FeedbackLanding: React.FC<FeedbackLandingProps> = ({ onNavigateToSignUp }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fb-page-container">
      {/* Navbar */}
      <nav className="fb-navbar">
        <div className="fb-logo" style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '0.5rem 1.5rem', borderRadius: '0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <img src="/images/image (63) (1).png" alt="Botho University" style={{ height: '45px', objectFit: 'contain' }} onError={(e) => e.currentTarget.style.display = 'none'} />
        </div>
        <div className="fb-nav-links">
          <a href="#" className="fb-nav-link">Contact</a>
          <a href="#" className="fb-nav-button" style={{ backgroundColor: 'var(--fb-dark-green)', color: 'white' }}>Staff Login</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="fb-hero-wrapper">
        <section className="fb-hero">
        <div className="fb-hero-content">
          <h1 className="fb-hero-title">Enhancing Excellence Through Your <span>Feedback</span></h1>
          <p className="fb-hero-subtitle">Help us improve the Finance Department’s services by sharing your experience. Your input helps us build a better Botho University.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button className="fb-cta-button" onClick={onNavigateToSignUp}>Give Feedback Now</button>
            <button className="fb-cta-button-secondary">Learn More</button>
          </div>
        </div>
        </section>
      </div>

      {/* Steps Section */}
      <section className="fb-steps-section">
        <h2 className="fb-section-title">How It Works</h2>
        <div className="fb-steps-grid">
          <div className="fb-step-card">
            <div className="fb-step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '24px', height: '24px', fill: 'currentColor', stroke: 'none' }}><path fill="currentColor" d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a8 8 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128m-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24M96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192z"/></svg>
            </div>
            <strong>1. Select Your Campus</strong>
            <p style={{ marginTop: '0.5rem', opacity: 0.8, fontSize: '0.85rem' }}>Identify which Botho University campus you are currently visiting to ensure your feedback reaches the right team.</p>
          </div>
          <div className="fb-step-card">
            <div className="fb-step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: 'currentColor', stroke: 'none' }}><path fill="currentColor" d="M18 14h-7.5l2-2H18M6 14v-2.5l6.88-6.86c.19-.19.51-.19.71 0l1.76 1.77c.2.2.2.51 0 .71L8.47 14M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"/></svg>
            </div>
            <strong>2. Rate Your Experience</strong>
            <p style={{ marginTop: '0.5rem', opacity: 0.8, fontSize: '0.85rem' }}>Answer a few brief questions regarding service clarity, efficiency, and professionalism.</p>
          </div>
          <div className="fb-step-card">
            <div className="fb-step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: 'currentColor', stroke: 'none' }}><path fill="currentColor" d="M19.291 6h.71a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2l-4.17-5.836a2 2 0 0 0-2.201-.753l-2.486.746a2 2 0 0 1-1.988-.502l-.293-.293a1 1 0 0 1 .152-1.539l5.401-3.6a2 2 0 0 1 2.183-.024l4.156 2.645A1 1 0 0 0 19.29 6M5.027 14.295l-1.616 1.414a1 1 0 0 0 .041 1.538l5.14 4.04a1 1 0 0 0 1.487-.29l.704-1.232a2 2 0 0 0-.257-2.338l-2.702-2.972a2 2 0 0 0-2.797-.16M7.046 5H3a1 1 0 0 0-1 1v7.516a2 2 0 0 0 .35 1.13l.074-.066l1.615-1.414a3.5 3.5 0 0 1 4.895.28l2.702 2.972a3.5 3.5 0 0 1 .45 4.09l-.655 1.146a2 2 0 0 0 1.738-.155l4.41-2.646a1 1 0 0 0 .299-1.438l-5.267-7.379a.5.5 0 0 0-.55-.188l-2.486.745a3.5 3.5 0 0 1-3.48-.877l-.293-.293a2.5 2.5 0 0 1 .38-3.848z"/></svg>
            </div>
            <strong>3. Direct Impact</strong>
            <p style={{ marginTop: '0.5rem', opacity: 0.8, fontSize: '0.85rem' }}>Your responses are sent directly to Finance Super Users to help us identify and fix service bottlenecks in real-time.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="fb-features-section">
        <div className="fb-features-content">
          <h2 className="fb-features-title">Why Your Feedback Matters</h2>
          <ul className="fb-features-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li style={{ alignItems: 'flex-start' }}>
              <svg style={{ marginTop: '4px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m16.35 19.175l4.25-4.25L22 16.35L16.375 22l-3.55-3.55l1.4-1.4zM4 13q0-3.225 2.163-6.125T12 2v3.3q0 .85.588 1.425t1.437.575q.45 0 .838-.187t.687-.563L16 6q1.8 1.025 2.863 2.813T20 12.7l-3.65 3.65l-2.125-2.125L10 18.45l2.525 2.525q-.125 0-.262.013T12 21q-3.35 0-5.675-2.325T4 13"/></svg>
              <div>
                <strong>Service Efficiency</strong>
                <p style={{ margin: '0.2rem 0 0 0', opacity: 0.8, fontSize: '0.85rem' }}>We monitor response times to ensure student inquiries are handled promptly and professionally.</p>
              </div>
            </li>
            <li style={{ alignItems: 'flex-start' }}>
               <svg style={{ marginTop: '4px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m16.35 19.175l4.25-4.25L22 16.35L16.375 22l-3.55-3.55l1.4-1.4zM4 13q0-3.225 2.163-6.125T12 2v3.3q0 .85.588 1.425t1.437.575q.45 0 .838-.187t.687-.563L16 6q1.8 1.025 2.863 2.813T20 12.7l-3.65 3.65l-2.125-2.125L10 18.45l2.525 2.525q-.125 0-.262.013T12 21q-3.35 0-5.675-2.325T4 13"/></svg>
              <div>
                <strong>Institutional Growth</strong>
                <p style={{ margin: '0.2rem 0 0 0', opacity: 0.8, fontSize: '0.85rem' }}>Your data helps the University align its financial services with national education standards and student needs.</p>
              </div>
            </li>
            <li style={{ alignItems: 'flex-start' }}>
               <svg style={{ marginTop: '4px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m16.35 19.175l4.25-4.25L22 16.35L16.375 22l-3.55-3.55l1.4-1.4zM4 13q0-3.225 2.163-6.125T12 2v3.3q0 .85.588 1.425t1.437.575q.45 0 .838-.187t.687-.563L16 6q1.8 1.025 2.863 2.813T20 12.7l-3.65 3.65l-2.125-2.125L10 18.45l2.525 2.525q-.125 0-.262.013T12 21q-3.35 0-5.675-2.325T4 13"/></svg>
              <div>
                <strong>Secure & Internal</strong>
                <p style={{ margin: '0.2rem 0 0 0', opacity: 0.8, fontSize: '0.85rem' }}>This system is hosted internally by the IS Department. Your data is protected and used strictly for service improvement.</p>
              </div>
            </li>
          </ul>
        </div>
        <img src="/images/undraw_anonymous-feedback_gug3.svg" alt="University Feedback System" className="fb-features-image" />
      </section>

      {/* FAQ Section */}
      <section className="fb-faq-section">
        <h2 className="fb-faq-title">Frequently Asked Questions</h2>
        
        <div className={`fb-faq-item ${activeFaq === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
          <div className="fb-faq-question">
            Is my feedback anonymous?
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div className="fb-faq-answer">
            While we require a login to verify campus location, your specific comments are used for internal service evaluation only.
          </div>
        </div>

        <div className={`fb-faq-item ${activeFaq === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
          <div className="fb-faq-question">
            Which departments can I rate?
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div className="fb-faq-answer">
            Currently, this portal is specifically for the Finance Department services across all campuses.
          </div>
        </div>

        <div className={`fb-faq-item ${activeFaq === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
          <div className="fb-faq-question">
            How do I contact technical support?
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div className="fb-faq-answer">
            If you experience issues with the web portal, please contact the IS Department directly or use the contact form below.
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="fb-footer">
        <div className="fb-footer-links">
          <a href="#" className="fb-footer-link">Privacy Policy</a>
          <a href="#" className="fb-footer-link">IS Department</a>
          <a href="#" className="fb-footer-link">Botho University Home</a>
        </div>
        <div className="fb-footer-copyright">
          © 2026 Botho University - Developed by FET Department in collaboration with ISD.
        </div>
        <button className="fb-scroll-top" onClick={scrollToTop}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      </footer>
    </div>
  );
};

export default FeedbackLanding;
