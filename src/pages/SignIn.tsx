import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Reuse sign up styles

interface SignInProps {
  onNavigateToDashboard?: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onNavigateToDashboard }) => {
  const navigate = useNavigate();

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
          <h2 className="su-form-title">Sign in to your account</h2>
          <p className="su-form-subtitle">Enter your details to manage your digital profile.</p>
          
          <form onSubmit={(e) => { e.preventDefault(); if (onNavigateToDashboard) onNavigateToDashboard(); else navigate('/dashboard'); }}>
            <div className="su-form-group">
              <label>Email Address <span className="required">*</span></label>
              <input type="email" className="su-input" placeholder="your@email.com" required />
            </div>
            
            <div className="su-form-group">
              <label>Password <span className="required">*</span></label>
              <div className="su-input-wrapper">
                <input type="password" className="su-input" placeholder="Enter your password" required />
              </div>
            </div>
            
            <div className="su-signin-link" style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--su-text-grey)' }}>
              Don't have an account? <a href="/signup" style={{ color: 'var(--su-primary)', fontWeight: '600', textDecoration: 'none' }}>Sign Up</a>
            </div>
            
            <button type="submit" className="su-submit-btn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
