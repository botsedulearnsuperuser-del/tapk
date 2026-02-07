import React, { useState, useEffect, useRef } from 'react';
import './NGOLandingPage.css';

// SVG Icons
const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.54-4.46-10-10-10c-1.17 0-2.3.19-3.38.56l.7 1.94c.85-.34 1.74-.53 2.68-.53c4.41 0 8.03 3.62 8.03 8.03s-3.62 8.03-8.03 8.03S3.97 16.41 3.97 12c0-.94.19-1.88.53-2.72l-1.94-.66C2.19 9.7 2 10.83 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 3.97c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7c-.79 0-1.5-.68-1.5-1.53c0-.79.71-1.5 1.5-1.5M18 12c0-3.33-2.67-6-6-6s-6 2.67-6 6s2.67 6 6 6s6-2.67 6-6m-3 0l-5 3V9" /></svg>
);

const CheckIcon = () => (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4L3.5 6.5L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z" /></svg>
);
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647" /></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><path fill="currentColor" d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z" /></svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" /></svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M18.5 0h-13A5.51 5.51 0 0 0 0 5.5v13A5.51 5.51 0 0 0 5.5 24h13a5.51 5.51 0 0 0 5.5-5.5v-13A5.51 5.51 0 0 0 18.5 0M20 16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4Z" /><path fill="currentColor" d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8-5a1 1 0 1 0 2 0a1 1 0 1 0-2 0" /></svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" /><path fill="currentColor" fillRule="evenodd" d="M9 2H8V0H7v2H6a6 6 0 0 0 0 12h3q.195 0 .389-.013l3.99.998a.5.5 0 0 0 .606-.606l-.577-2.309A6 6 0 0 0 9 2M5 6.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M7.5 12a4.48 4.48 0 0 1-2.813-.987l.626-.78c.599.48 1.359.767 2.187.767s1.588-.287 2.187-.767l.626.78A4.48 4.48 0 0 1 7.5 12" clipRule="evenodd" /></svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 2.001a3.5 3.5 0 0 1 3.03 5.249l-7.5 12.99a3.5 3.5 0 0 1-6.411-.842l-1.5-5.595l8.77-5.064a1 1 0 0 0-1-1.732L6.12 12.07L2.026 7.975A3.5 3.5 0 0 1 4.5 2z" /></svg>
);

const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M23 12c0 3.345-1.493 6.342-3.85 8.36A10.96 10.96 0 0 1 12 23c-2.73 0-5.227-.994-7.15-2.64A10.98 10.98 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11m-7-3.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0m2.5 9.725V18a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4v.225q.31.323.65.615A8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 6.5-2.775" /></svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="12" d="M3 9l3 3l-3 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="12;0" /></path><path strokeDasharray="16" strokeDashoffset="16" d="M5 5h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.3s" to="0" /></path><path strokeDasharray="12" strokeDashoffset="12" d="M10 12h9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" to="0" /></path><path strokeDasharray="16" strokeDashoffset="16" d="M5 19h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" to="0" /></path></g></svg>
);

const MenuCloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m11.9 13.5l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1l-1.4-1.4L14 8.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1zM6 18V2h16v16zm-4 4V6h2v14h14v2z" /></svg>
);

const NGOLandingPage: React.FC = () => {
    // Using assets from the public folder directly
    const heroImage = '/assets/ngowebsite/unsplash_LjqARJaJotc.png';
    const aboutImage = '/assets/ngowebsite/ninthgrid-BsboLMESZg8-unsplash.jpg';
    const logo = '/assets/ngowebsite/BUPlogo.png';
    const servicesBg = '/assets/ngowebsite/unsplash_eMB60hNHFL8.png';

    // Chatbot State
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' | 'agent' }[]>([]);
    const [inputText, setInputText] = useState('');
    const [showNewsletter, setShowNewsletter] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [newsletterData, setNewsletterData] = useState({ name: '', email: '' });
    const [signInData, setSignInData] = useState({ email: '', password: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of chat
    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Initial Greeting
    useEffect(() => {
        if (isChatOpen && messages.length === 0) {
            setMessages([{ text: "Hello! How can we help you today?", sender: 'bot' }]);
        }
    }, [isChatOpen, messages.length]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (inputText.trim() === '') return;

        // Add user message
        const newMessages = [...messages, { text: inputText, sender: 'user' as const }];
        setMessages(newMessages);
        setInputText('');

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: "Thank you for your message. A representative will get back to you shortly.",
                sender: 'bot'
            }]);

            // Kgotso joining
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    text: "Hello! I'm Kgotso Ntshilane. At BUP, we partner with the government and UPenn to strengthen Botswana's healthcare system through clinical care, education, and research. How can I assist you further?",
                    sender: 'agent'
                }]);
            }, 3000);

        }, 1000);
    };

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5jIg3OTDWD_M4coa3_yWHBnu4agax00ck4gx84RIVonzR82OCA0uibrHsMsB_USG0/exec';

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'name': newsletterData.name,
                    'email': newsletterData.email,
                    'source': 'Marathon Fundraising Registration'
                }).toString()
            });

            setShowNewsletter(false);
            setNewsletterData({ name: '', email: '' });
            alert("Success! You've been registered for the marathon. Let's make a difference together!");

        } catch (error) {
            console.error('Error submitting newsletter:', error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSigningIn(true);

        try {
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5jIg3OTDWD_M4coa3_yWHBnu4agax00ck4gx84RIVonzR82OCA0uibrHsMsB_USG0/exec';

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'email': signInData.email,
                    'password': signInData.password,
                    'source': 'User Sign In'
                }).toString()
            });

            setIsSignInOpen(false);
            setSignInData({ email: '', password: '' });
            alert("Sign in successful! Welcome back.");

        } catch (error) {
            console.error('Error signing in:', error);
            alert("Sign in failed. Please try again.");
        } finally {
            setIsSigningIn(false);
        }
    };

    return (
        <div className="ngo-landing">
            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="HEA Logo" style={{ height: '70px', objectFit: 'contain' }} />
                </div>

                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
                </button>

                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
                        <li><a href="#what-we-do" onClick={() => setIsMenuOpen(false)}>What We Do</a></li>
                        <li><a href="#media" onClick={() => setIsMenuOpen(false)}>Media</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                        <li><button className="signin-nav-btn" onClick={() => { setIsSignInOpen(true); setIsMenuOpen(false); }}>Sign In</button></li>
                    </ul>
                    <button className="cta-btn mobile-cta">Support Us</button>
                </div>

                <button className="cta-btn desktop-cta">Support Us</button>
            </nav>

            {/* Hero Section */}
            <header className="hero-section" id="home">
                <img src={heroImage} alt="Hands together" className="hero-bg" />
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Transforming Healthcare Together
                    </h1>

                    <div className="hero-actions">
                        <button className="primary-btn">Our Pillars</button>
                        <button className="secondary-btn">
                            <div className="play-icon"><PlayIcon /></div>
                            Play Video
                        </button>
                    </div>
                </div>

            </header>

            {/* About Section */}
            <section className="about-section" id="about">
                <div className="about-content">
                    <div className="section-label">About BUP</div>
                    <h2 className="about-title">Build sustainable healthcare capacity in Botswana</h2>
                    <p className="about-text">
                        The Botswana-UPenn Partnership (BUP) is a long-term collaboration between the Government of Botswana, the University of Botswana, and the University of Pennsylvania. We aim to improve health care, medical education, and research in Botswana, especially related to HIV/AIDS and related diseases.
                    </p>
                    <button className="secondary-outline-btn">Learn More</button>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt="Community hands" className="about-img" />
                    <div className="play-overlay">
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
                            <path d="M14 9L1 16.5L1 1.5L14 9Z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="services-section" id="what-we-do">
                <img src={servicesBg} alt="Background" className="services-bg-overlay" />
                <div className="container services-container">
                    <div className="services-intro">
                        <div className="section-label" style={{ color: 'var(--gold-color)' }}>Strategic Pillars</div>
                        <h2 className="services-title">Core Mission & Goals</h2>
                        <p className="services-desc">
                            We aim to deliver high-quality healthcare services, train Botswana health professionals, and support research that directly impacts national health challenges.
                        </p>
                    </div>

                    <div className="services-list">
                        <div className="service-item">
                            <div className="check-icon"><CheckIcon /></div>
                            <div className="service-content">
                                <h4>Clinical Care</h4>
                                <p>Support healthcare delivery in hospitals and clinics across the country, focusing on HIV/AIDS, TB, cervical cancer, and women’s health.</p>
                            </div>
                        </div>

                        <div className="service-item">
                            <div className="check-icon"><CheckIcon /></div>
                            <div className="service-content">
                                <h4>Education & Training</h4>
                                <p>Providing training for Botswana health workers, joint teaching with the University of Botswana, and global health opportunities.</p>
                            </div>
                        </div>

                        <div className="service-item">
                            <div className="check-icon"><CheckIcon /></div>
                            <div className="service-content">
                                <h4>Research & Innovation</h4>
                                <p>Conducting research on infectious diseases and health systems, including grant writing and pilot research training.</p>
                            </div>
                        </div>

                        <div className="service-item">
                            <div className="check-icon"><CheckIcon /></div>
                            <div className="service-content">
                                <h4>Telemedicine & Technology</h4>
                                <p>Projects like Project Kgolagano bring specialist care to rural Botswana via direct tech partnerships.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-top">
                        <div className="logo">
                            <img src={logo} alt="HEA" style={{ height: '70px', filter: 'invert(1)' }} />
                            {/* Note: 'invert(1)' depends on original logo color. BUPlogo.png might be dark. */}
                        </div>

                        <div className="newsletter">
                            <h3>Subscribe to get latest updates</h3>
                            <div className="input-group">
                                <input type="email" placeholder="Your email" />
                                <button className="subscribe-btn">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="social-links">
                            <div className="social-icon"><TwitterIcon /></div>
                            <div className="social-icon"><LinkedinIcon /></div>
                            <div className="social-icon"><FacebookIcon /></div>
                            <div className="social-icon"><InstagramIcon /></div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Chatbot Toggle Button */}
            <button className="chatbot-toggle" onClick={() => setIsChatOpen(!isChatOpen)}>
                {isChatOpen ? (
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>×</span>
                ) : (
                    <ChatIcon />
                )}
            </button>

            {/* Chat Container */}
            {isChatOpen && (
                <div className="chat-container">
                    <div className="chat-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ position: 'relative', display: 'flex' }}>
                                <ProfileIcon />
                                <span style={{ position: 'absolute', bottom: 1, right: 1, width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%', border: '1.5px solid #011F5B' }}></span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ margin: 0, fontSize: '0.9rem' }}>Kgotso Ntshilane</h3>
                                <span style={{ fontSize: '0.7rem', opacity: 0.8, fontWeight: 400 }}>Support (Online)</span>
                            </div>
                        </div>
                        <button className="close-chat" onClick={() => setIsChatOpen(false)}>×</button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.sender === 'agent' && (
                                    <div style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', fontWeight: 'bold', color: '#555' }}>
                                        <ProfileIcon /> Kgotso
                                    </div>
                                )}
                                {msg.text}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                    <form className="chat-input-area" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <button type="submit">
                            <SendIcon />
                        </button>
                    </form>
                </div>
            )}

            {/* Newsletter Popup */}
            {showNewsletter && (
                <div className="newsletter-overlay">
                    <div className="newsletter-popup">
                        <button className="close-popup" onClick={() => setShowNewsletter(false)}>
                            <CloseIcon />
                        </button>
                        <div className="newsletter-content">
                            <div className="newsletter-left">
                                <h2 className="newsletter-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Join our Health Awareness & Fundraising Marathon!</h2>
                                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                                    <input
                                        type="text"
                                        className="newsletter-input"
                                        placeholder="email address"
                                        required
                                        value={newsletterData.name}
                                        onChange={(e) => setNewsletterData({ ...newsletterData, name: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        className="newsletter-input"
                                        placeholder="password"
                                        required
                                        value={newsletterData.email}
                                        onChange={(e) => setNewsletterData({ ...newsletterData, email: e.target.value })}
                                    />
                                    <button type="submit" className="newsletter-submit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Registering and sigining you up...' : 'Register for Marathon'}
                                    </button>
                                </form>
                            </div>
                            <div className="newsletter-right">
                                <h3 className="newsletter-info-title">Why Run?</h3>
                                <p className="newsletter-info-text">
                                    Join us in Gaborone to raise funds for improving healthcare facilities and spreading awareness. Every registration helps build a healthier future for Botswana. Let's run for a cause!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Sign In Overlay */}
            {isSignInOpen && (
                <div className="signin-overlay">
                    <div className="signin-container">
                        <button className="close-signin" onClick={() => setIsSignInOpen(false)}>
                            <MenuCloseIcon />
                        </button>
                        <div className="signin-content">
                            <div className="signin-box">
                                <div className="signin-logo">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <h2 className="signin-title">Welcome Back</h2>
                                <p className="signin-subtitle">Please sign in to your account</p>
                                <form className="signin-form" onSubmit={handleSignIn}>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                            value={signInData.email}
                                            onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            required
                                            value={signInData.password}
                                            onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                                        />
                                    </div>
                                    <button type="submit" className="signin-submit-btn" disabled={isSigningIn}>
                                        {isSigningIn ? 'Signing in...' : 'Sign In'}
                                    </button>
                                </form>
                                <div className="signin-footer">
                                    <p>Don't have an account? <a href="#">Contact Support</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default NGOLandingPage;
