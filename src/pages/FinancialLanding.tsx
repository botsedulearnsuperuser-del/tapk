import React from 'react';
import { Mail, Search, MessageCircle, Settings, Play, CheckCircle2, ChevronDown, Facebook, Twitter, Instagram } from 'lucide-react';
import './FinancialLanding.css';

interface FinancialLandingProps {
  onNavigateToSignup: () => void;
}

const FinancialLanding: React.FC<FinancialLandingProps> = ({ onNavigateToSignup }) => {
  return (
    <div className="financial-landing">
      {/* HEADER */}
      <header className="financial-header">
        <div className="container header-container">
          <div className="brand-name">TapK</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#product">Product</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <a href="#login" className="login-link">Login</a>
            <button className="btn btn-primary btn-member" onClick={onNavigateToSignup}>Create business card &rarr;</button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Digital Business Cards<br />Reimagined by TapK
            </h1>
            <p className="hero-subtitle">
              Share your contact info instantly with a tap. Build your professional<br />presence in seconds.
            </p>
            <div className="hero-actions-btns">
              <button className="btn btn-primary btn-lg" onClick={onNavigateToSignup}>Get Started</button>
              <button className="btn btn-outline btn-lg">Learn More</button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="/tapk2.png" 
              alt="TapK NFC Business Card" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section" id="product">
        <div className="container text-center text-container">
          <h2>Better Networking With<br />Quality Connections</h2>
          <p className="section-desc">
            TapK simplifies how you share your professional identity.<br />
            No more paper cards, just seamless NFC technology.
          </p>
        </div>
        <div className="container stats-container">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 100 100" className="text-blue"><path fill="currentColor" d="M49.947 0C22.354.03 0 22.406 0 50a50 50 0 0 0 20.404 40.21c-.265-2.031-.213-4.128.117-6.202a45.2 45.2 0 0 1-8.511-9.877h12.445c1.182-1.845 2.4-3.67 4.525-5c-1.245-5.1-2.006-10.716-2.146-16.631h1.346a18.7 18.7 0 0 1 1.93-5h-3.243c.212-5.935 1.043-11.554 2.363-16.63H47.5v8.888a13.8 13.8 0 0 1 5 1.804V30.87h19.195c.26.997.495 2.02.715 3.057a19.8 19.8 0 0 1 5.084-.117a76 76 0 0 0-.639-2.94h13.89a44.8 44.8 0 0 1 3.965 14.028c.58 5.049.591 10.975-1.246 16.771a45 45 0 0 1-2.286 6.478c1.128 1.187 2.494 2.309 3.867 3.454A50 50 0 0 0 100 50c0-27.614-22.386-50-50-50ZM52.5 5.682c5.268.896 10.302 5.236 14.268 12.437c1.278 2.321 2.42 4.927 3.408 7.75H52.5Zm-5 .197v19.99H30.75c.988-2.823 2.13-5.429 3.408-7.75C37.89 11.341 42.571 7.102 47.5 5.88M35.98 7.232c-2.324 2.352-4.41 5.22-6.203 8.475c-1.68 3.05-3.125 6.467-4.312 10.162H12.01c5.535-8.706 13.975-15.37 23.97-18.637m29.41.463c9.398 3.413 17.32 9.868 22.6 18.174H75.455c-1.184-3.695-2.627-7.112-4.307-10.162c-1.676-3.045-3.613-5.749-5.757-8.012M9.257 30.87h14.808c-1.245 5.162-2.008 10.76-2.203 16.631H5.072a44.8 44.8 0 0 1 4.184-16.63M5.072 52.5h16.762c.129 5.856.82 11.454 1.994 16.63H9.256A44.8 44.8 0 0 1 5.072 52.5"/><path fill="currentColor" d="M76 37.769c-8.285 0-15 6.716-15 15s6.715 15 15 15c8.283 0 15-6.716 15-15s-6.717-15-15-15m0 32.223c-16.57 0-24 7.431-24 24v2c.075 3.94 1.817 4.056 5.5 4h37c4.695-.004 5.532.005 5.5-4v-2c0-16.569-7.432-24-24-24M44 43.39c-6.787 0-12.291 5.504-12.291 12.292c0 6.787 5.504 12.289 12.291 12.289s12.29-5.502 12.29-12.29s-5.503-12.29-12.29-12.29m0 26.401c-13.575 0-19.664 6.09-19.664 19.664v1.639c.062 3.228 1.489 3.323 4.506 3.277h19.123c-.488-8.088 1.901-16.678 7.851-22.139c-3.012-1.646-6.925-2.441-11.816-2.441"/></svg>
            </div>
            <h3 className="stat-number">972 +</h3>
            <p className="stat-label">Happy Users</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-blue"><path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M10 17l-3.5-3.5l1.41-1.41L10 14.17L15.18 9l1.41 1.41z"/></svg>
            </div>
            <h3 className="stat-number">181 +</h3>
            <p className="stat-label">Taps Per Day</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" className="text-blue"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.354 6.207L7.5 10.061L5.146 7.707L5.854 7L7.5 8.646L10.646 5.5z"/><path d="M8 2a6 6 0 0 0-5.324 8.769l-.887.462a7 7 0 0 1 10.52-8.749l.652.51L9 4.774v-2.69A6 6 0 0 0 8 2m5.383 3.346a6 6 0 0 0-.393-.679l.831-.556q.255.38.458.792A7 7 0 0 1 3.606 13.45l-.703-.567L7.5 11.3v2.68q.248.02.5.02a6 6 0 0 0 5.383-8.654"/></g></svg>
            </div>
            <h3 className="stat-number">0,98</h3>
            <p className="stat-label">Success Rate</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-blue"><path fill="currentColor" d="M9.71 11.71a.5.5 0 0 0-.5.5a2.94 2.94 0 1 1-2.94-2.93a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5a3.94 3.94 0 1 0 3.94 3.93a.5.5 0 0 0-.5-.5"/><path fill="currentColor" d="M5.77 10.86a.5.5 0 0 0 .5.5a.85.85 0 1 1-.84.85a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5a1.85 1.85 0 1 0 1.84-1.85a.51.51 0 0 0-.5.5"/><path fill="currentColor" d="M23.65 13.6a1.69 1.69 0 0 0-1.3-.64h-5.17a1.66 1.66 0 0 0-1.62 1.35a10.6 10.6 0 0 1-.51 1.57c-.11.28-.21.56-.31.84a.75.75 0 0 0 1.42.48c.09-.26.19-.52.29-.78a11.6 11.6 0 0 0 .55-1.83a.16.16 0 0 1 .15-.15h5.17a.15.15 0 0 1 .11.06a.18.18 0 0 1 0 .14a8.27 8.27 0 0 1-5.72 6.24a8.9 8.9 0 0 1-3-1.44A9.14 9.14 0 0 1 11 16.32a6.25 6.25 0 0 0 1.26-2.27h.32A1.44 1.44 0 0 0 14 12.62v-.82a1.44 1.44 0 0 0-1.43-1.43h-.32A6.2 6.2 0 0 0 10.87 8a9.26 9.26 0 0 1 2.87-3.41a8.9 8.9 0 0 1 3-1.44a7.3 7.3 0 0 1 2 .88a8.8 8.8 0 0 1 3.72 5.27a.16.16 0 0 1 0 .14a.14.14 0 0 1-.12.06l-4.77.08a14.7 14.7 0 0 0-2.91-3.48a.75.75 0 1 0-.94 1.17a14 14 0 0 1 2.63 3.22a1.27 1.27 0 0 0 1.06.59l4.94-.08a1.63 1.63 0 0 0 1.3-.67a1.68 1.68 0 0 0 .26-1.44a10.27 10.27 0 0 0-4.32-6.18a10 10 0 0 0-4.14-1.41h-3.56a9.2 9.2 0 0 0-2.22.25a9.37 9.37 0 0 0-6.41 5.16a6.27 6.27 0 0 0 .31 11.16a9.45 9.45 0 0 0 8.32 4.84h2.6A9.6 9.6 0 0 0 24 15a1.67 1.67 0 0 0-.35-1.4M1.5 12.21A4.78 4.78 0 1 1 6.27 17a4.78 4.78 0 0 1-4.77-4.79"/></svg>
            </div>
            <h3 className="stat-number">746 +</h3>
            <p className="stat-label">Devices Linked</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="container text-center text-container">
          <h2>What Clients Say</h2>
          <p className="section-desc">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="container testimonials-container">
          <div className="testimonial-card">
            <img src="/images/testimonial_1.png" alt="Thabo M." className="testimonial-img" />
            <div className="testimonial-content">
              <h4>Thabo M.</h4>
              <p className="testimonial-role">Founder, TechPulse</p>
              <div className="stars">
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
              </div>
              <p className="testimonial-text">
                "TapK has completely changed how I network at conferences. One tap and they have everything they need!"
              </p>
              <p className="testimonial-date">10:15 AM - Oct 12, 2025</p>
            </div>
          </div>
          <div className="testimonial-card">
            <img src="/images/testimonial_2.png" alt="Kopano S." className="testimonial-img" />
            <div className="testimonial-content">
              <h4>Kopano S.</h4>
              <p className="testimonial-role">Marketing Director</p>
              <div className="stars">
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
              </div>
              <p className="testimonial-text">
                "I love the analytics dashboard. Seeing who taps my card and when is a game changer for following up."
              </p>
              <p className="testimonial-date">2:45 PM - Nov 3, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="about-section">
        <div className="container text-center text-container">
          <h2>About Us</h2>
          <p className="section-desc">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="container about-container">
          <div className="about-video-wrapper">
            <img src="/images/about_team.png" alt="About Team" className="about-image" />
            <div className="play-button">
              <Play size={24} fill="currentColor" />
            </div>
          </div>
          <div className="about-content">
            <h3>Next Generation Networking</h3>
            <p className="about-desc">
              TapK is designed for professionals who want a modern way to share their contact information. Seamlessly connect your digital life with the physical world.
            </p>
            <div className="about-points">
              <div className="point">
                <div className="point-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="text-blue" style={{ color: '#1EA4CE' }}><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="44" d="M465 127L241 384l-92-92m-9 93l-93-93m316-165L236 273"/></svg>
                </div>
                <div className="point-text">
                  <h5>Professional digital profile with social links</h5>
                  <p>Consolidate all your contact info and social media in one place.</p>
                </div>
              </div>
              <div className="point">
                <div className="point-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="text-blue" style={{ color: '#1EA4CE' }}><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="44" d="M465 127L241 384l-92-92m-9 93l-93-93m316-165L236 273"/></svg>
                </div>
                <div className="point-text">
                  <h5>Link multiple NFC devices to your profile</h5>
                  <p>Use cards, stickers, or key fobs — all connected to one profile.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing-section" id="pricing">
        <div className="container text-center text-container">
          <h2>Pricing</h2>
          <p className="section-desc">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="container pricing-container">
          <div className="pricing-card">
            <h3>FREE</h3>
            <p className="pricing-subtitle">Elevate your professional presence</p>
            <div className="price">
              <h2>0</h2>
              <div className="price-details">
                <span className="currency">P</span>
                <span className="period">Per Month (BWP)</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li><CheckCircle2 color="#2DC071" /> Unlimited profile taps</li>
              <li><CheckCircle2 color="#2DC071" /> Personalized QR code</li>
              <li><CheckCircle2 color="#BDBDBD" /> Digital business card</li>
              <li><CheckCircle2 color="#BDBDBD" /> Email support</li>
            </ul>
            <button className="btn btn-primary pricing-btn" onClick={onNavigateToSignup}>Try for free</button>
          </div>
          <div className="pricing-card standard">
            <h3>STANDARD</h3>
            <p className="pricing-subtitle">Unlock premium networking features</p>
            <div className="price">
              <h2>199</h2>
              <div className="price-details">
                <span className="currency">P</span>
                <span className="period">Per Month (BWP)</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li><CheckCircle2 color="#2DC071" /> Unlimited profile taps</li>
              <li><CheckCircle2 color="#2DC071" /> Custom NFC Wood Card</li>
              <li><CheckCircle2 color="#2DC071" /> Analytics dashboard</li>
              <li><CheckCircle2 color="#2DC071" /> Priority support</li>
            </ul>
            <button className="btn btn-primary pricing-btn" onClick={onNavigateToSignup}>Buy Now</button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="container contact-container">
          <div className="contact-card">
            <h5>Contact Us</h5>
            <h2>Make an Appointment</h2>
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email *" />
              </div>
              <div className="form-row">
                <div className="select-wrapper">
                  <select defaultValue="">
                    <option value="" disabled>Please Select</option>
                    <option value="1">Option 1</option>
                  </select>
                  <ChevronDown className="select-icon" size={16} />
                </div>
                <div className="select-wrapper">
                  <select defaultValue="">
                    <option value="" disabled>Time frame</option>
                    <option value="1">Morning</option>
                  </select>
                  <ChevronDown className="select-icon" size={16} />
                </div>
              </div>
              <textarea placeholder="Message" rows={4}></textarea>
              <button type="button" className="btn btn-primary w-full">Book Appointment</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer-section">
        <div className="container footer-container">
          <div className="footer-col">
            <h3>Get In Touch</h3>
            <p className="footer-p">Share your digital identity with the world.</p>
            <div className="social-icons" style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <a href="#fb" title="Facebook" className="social-icon facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0"/></svg>
              </a>
              <a href="#ig" title="Instagram" className="social-icon instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256">
                  <g fill="none">
                    <rect width="256" height="256" fill="url(#SVGKdMMobCR)" rx="60"/><rect width="256" height="256" fill="url(#SVGqYUiQbXV)" rx="60"/>
                    <path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="SVGKdMMobCR" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="SVGqYUiQbXV" cx="0" cy="0" r="1" gradientTransform="rotate(78.68 -32.69 -16.937)scale(113.412 467.488)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></radialGradient></defs>
                  </g>
                </svg>
              </a>
              <a href="#tw" title="X (Twitter)" className="social-icon x-twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 14 14"><g fill="none"><g clip-path="url(#SVGG1Ot4cAD)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="SVGG1Ot4cAD"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Company info</h3>
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-col">
            <h3>Features</h3>
            <a href="#">Business Marketing</a>
            <a href="#">User Analytic</a>
            <a href="#">Live Chat</a>
            <a href="#">Unlimited Support</a>
          </div>
          <div className="footer-col">
            <h3>Resources</h3>
            <a href="#">IOS & Android</a>
            <a href="#">Watch a Demo</a>
            <a href="#">Customers</a>
            <a href="#">API</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="text-center">Made With Love By TapK All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinancialLanding;
