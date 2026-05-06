import React from 'react';
import './SignUp.css';

interface SignUpProps {
  onNavigateToDashboard?: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onNavigateToDashboard }) => {
  return (
    <div className="su-container">
      {/* LEFT SIDE */}
      <div className="su-left">
        <div className="su-logo-wrapper">
          <div className="su-logo" style={{ color: 'var(--su-primary)', border: 'none', background: 'white', padding: '0.5rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.5rem' }}>
            TapK
          </div>
        </div>
        
        <div className="su-left-content">
          
          <p className="su-subtitle">Join thousands of professionals using TapK to share their contact info instantly with NFC technology.</p>
          
          <div className="su-feature-image-container">
            <img 
              src="/Gemini_Generated_Image_ebrfgsebrfgsebrf (3).png" 
              alt="TapK Professional Network" 
              className="su-feature-image" 
            />
          </div>
        </div>
      </div>
      
      {/* RIGHT SIDE */}
      <div className="su-right">
        <div className="su-form-container">
          <h2 className="su-form-title">Create your account</h2>
          <p className="su-form-subtitle">Register to start building your professional digital profile.</p>
          
          <form onSubmit={(e) => { e.preventDefault(); if (onNavigateToDashboard) onNavigateToDashboard(); }}>
            <div className="su-form-group">
              <label>Full Name <span className="required">*</span></label>
              <input type="text" className="su-input" placeholder="Enter full name" />
            </div>
            
            <div className="su-form-group">
              <label>Email Address <span className="required">*</span></label>
              <input type="email" className="su-input" placeholder="your@email.com" />
            </div>
            
            <div className="su-form-group">
              <label style={{ display: 'flex', alignItems: 'center' }}>
                Phone number <span className="required" style={{ marginLeft: '0.2rem' }}>*</span> 
                <button type="button" onClick={() => alert('We collect your phone number to coordinate shipping of your NFC hardware and for account security.')} className="why" style={{ background: 'none', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', cursor: 'pointer', color: 'var(--su-primary)', fontSize: '0.8rem', fontWeight: 'normal', marginLeft: '0.75rem', padding: 0 }}>
                  Why <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </button>
              </label>
              <div className="su-phone-input">
                <select className="su-country-code">
                  <option>+267</option>
                  <option>+27</option>
                  <option>+44</option>
                </select>
                <div style={{position: 'relative', flex: 1, display: 'flex', alignItems: 'center'}}>
                    <input type="tel" className="su-phone-number" placeholder="Enter phone number" />
                </div>
              </div>
            </div>
            

            <div className="su-checkbox-group">
              <input type="checkbox" className="su-checkbox" id="marketingOptOut" />
              <label htmlFor="marketingOptOut" className="su-checkbox-label">
                I agree to receive updates about new TapK features and hardware releases.
              </label>
            </div>
            
            <p className="su-terms-text">
              By signing up, you are consenting to our <a href="#">Terms of Service</a> and confirming that you have reviewed and accepted the <a href="#">TapK Privacy Policy</a>.
            </p>
            
            <div className="su-signin-link" style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--su-text-grey)' }}>
              Already have an account? <a href="/signin" style={{ color: 'var(--su-primary)', fontWeight: '600', textDecoration: 'none' }}>Sign In</a>
            </div>
            
            <button type="submit" className="su-submit-btn">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
