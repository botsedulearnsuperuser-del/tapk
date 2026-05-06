import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Share2,
  ArrowLeft,
  Menu,
  X
} from 'lucide-react';
import './Dashboard.css';

interface DashboardProps {
  onLogout?: () => void;
}

const feelingIcons = [
  { value: 'angry', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-5-5h2a3 3 0 1 1 6 0h2a5 5 0 0 0-10 0m1-6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" /></svg> },
  { value: 'sad', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a9.96 9.96 0 0 1-1.065 4.496a2 2 0 0 0-.398-.775l-.123-.135L19 14.172l-1.414 1.414l-.117.127a2 2 0 0 0 1.679 3.282A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 13c-1.38 0-2.63.56-3.534 1.463l-.166.174l.945.86C10.035 17.182 10.982 17 12 17c.905 0 1.754.144 2.486.396l.269.1l.945-.86A5 5 0 0 0 12 15m-3.5-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" /></svg> },
  { value: 'neutral', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-4-9a4 4 0 0 0 8 0zm0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" /></svg> },
  { value: 'happy', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5S7.67 8 8.5 8M12 18c-2.28 0-4.22-1.66-5-4h10c-.78 2.34-2.72 4-5 4m3.5-7c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5" /></svg> }
];

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeNav, setActiveNav] = useState<'dashboard' | 'why'>('dashboard');
  const [viewMode, setViewMode] = useState<'prompt' | 'started' | 'completed' | 'profile'>('prompt');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [portfolioType, setPortfolioType] = useState<string | null>(null);
  const [helper, setHelper] = useState('Classic Card');
  const [feeling, setFeeling] = useState<string | null>('happy');


  // Profile State
  const [profileData, setProfileData] = useState({
    name: 'Thabo M.',
    position: 'Founder, TechPulse',
    contacts: '+267 71 234 567',
    website: 'www.techpulse.co.bw',
    location: 'Gaborone, Botswana',
    companyDetail: 'TechPulse Solutions',
    summary: 'Helping businesses scale through innovation...',
    linkedin: '@thabo_tech',
    twitter: '@thabo_x',
    instagram: '@thabo_insta',
    tiktok: '',
    facebook: '',
    whatsapp: '',
    youtube: '',
    discord: ''
  });

  const handleStartNow = () => {
    setViewMode('started');
  };

  const handleSubmitLater = () => {
    setViewMode('prompt'); // Stays on prompt
  };

  const handleSubmit = () => {
    if (portfolioType && feeling) {
      setViewMode('completed');
    }
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${profileData.name}\nTITLE:${profileData.position}\nORG:${profileData.companyDetail}\nNOTE:${profileData.summary}\nURL:${profileData.website}\nX-SOCIALPROFILE;type=linkedin:${profileData.linkedin}\nX-SOCIALPROFILE;type=twitter:${profileData.twitter}\nX-SOCIALPROFILE;type=instagram:${profileData.instagram}\nEND:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profileData.name.replace(/\s+/g, '_')}_Contact.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="dash-container">
      {isSidebarOpen && <div className="dash-sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}
      {/* SIDEBAR */}
      <aside className={`dash-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="dash-logo" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--dash-primary)' }}>TapK</span>
          <button className="dash-mobile-close-btn" onClick={() => setIsSidebarOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--dash-primary)', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        <nav className="dash-nav">
          <a
            href="#"
            className={`dash-nav-item ${activeNav === 'dashboard' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveNav('dashboard'); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z" /></svg>
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className={`dash-nav-item ${activeNav === 'why' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveNav('why'); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048"><path fill="currentColor" d="M2048 128v1408H704l-448 448v-448H0V128zM1024 1280H896v128h128zm8-169q0-37 7-70t36-62q39-39 77-74t68-75t49-85t19-105q0-68-26-127t-70-104t-104-71t-128-26t-127 26t-104 70t-71 104t-26 128h144q0-38 14-71t40-59t58-39t72-15q38 0 71 14t59 40t39 58t15 72q0 41-19 73t-47 61t-62 60t-61 66t-48 81t-19 107v64h144z" /></svg>
            <span>Benefits</span>
          </a>
        </nav>

        <div className="dash-logout-wrapper">
          <button className="dash-logout-btn" onClick={onLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.393 4C4 4.617 4 5.413 4 7.004v9.994c0 1.591 0 2.387.393 3.002q.105.165.235.312c.483.546 1.249.765 2.78 1.202c1.533.438 2.3.657 2.856.329a1.5 1.5 0 0 0 .267-.202C11 21.196 11 20.4 11 18.803V5.197c0-1.596 0-2.393-.469-2.837a1.5 1.5 0 0 0-.267-.202c-.555-.328-1.323-.11-2.857.329c-1.53.437-2.296.656-2.78 1.202a2.5 2.5 0 0 0-.234.312M11 4h2.017c1.902 0 2.853 0 3.443.586c.33.326.476.764.54 1.414m-6 14h2.017c1.902 0 2.853 0 3.443-.586c.33-.326.476-.764.54-1.414m4-6h-7m5.5-2.5S22 11.34 22 12s-2.5 2.5-2.5 2.5" /></svg>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dash-main">
        {/* HEADER */}
        <header className="dash-header">
          <button className="dash-mobile-menu-btn" onClick={() => setIsSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <div className="dash-user-profile">
            <div className="dash-user-info" style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', marginRight: '0.5rem' }}>
              <span className="dash-user-name">Thabo M.</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--dash-accent)', fontWeight: 'bold' }}>Last tap recorded: 2 mins ago</span>
            </div>
            <img src="/images/testimonial_1.png" alt="User Avatar" className="dash-avatar" style={{ borderRadius: '50%' }} />
            <ChevronDown size={16} className="dash-chevron" />
          </div>
        </header>

        {/* CONTENT CANVAS */}
        <div className="dash-content" style={{ overflow: 'hidden' }}>
          {/* Canvas States */}

          {activeNav === 'dashboard' ? (
            <React.Fragment>

              {viewMode === 'prompt' && (
                <div className="dash-feedback-prompt">
                  <div className="dash-prompt-card">
                    <h2>Manage Digital Card</h2>
                    <p>Welcome to your TapK Dashboard. Update your professional profile and manage your linked NFC devices.</p>
                    <div className="dash-prompt-actions">
                      <button className="dash-btn dash-btn-outline" onClick={handleSubmitLater}>
                        View Stats
                      </button>
                      <button className="dash-btn dash-btn-outline" onClick={() => setViewMode('profile')}>
                        View Profile
                      </button>
                      <button className="dash-btn dash-btn-primary" onClick={handleStartNow}>
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {viewMode === 'started' && (
                <div className="dash-feedback-form">
                    <div className="dash-form-card" style={{ width: '100%', maxWidth: '1200px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '2px solid var(--dash-primary-light)', paddingBottom: '0.5rem' }}>
                        <h2 className="dash-form-title" style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>Edit Digital Profile</h2>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                          <button className="dash-btn dash-btn-outline" onClick={() => setPortfolioType(null)} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Cancel</button>
                          <button 
                            className="dash-btn dash-btn-primary" 
                            onClick={handleSubmit}
                            style={{ fontSize: '0.8rem', padding: '0.5rem 1.25rem' }}
                          >
                            Update & Save Profile
                          </button>
                        </div>
                      </div>

                    {portfolioType !== 'Personal' ? (
                      <div className="dash-form-grid">
                        <div className="dash-form-col">
                          <div className="dash-form-group">
                            <label>Which profile should be active when your card is tapped?</label>
                            <div className="dash-radio-group">
                              <button
                                className={`dash-radio-btn ${portfolioType === 'Personal' ? 'selected' : ''}`}
                                onClick={() => setPortfolioType('Personal')}
                              >
                                Personal Portfolio
                              </button>
                              <button
                                className={`dash-radio-btn ${portfolioType === 'Business' ? 'selected' : ''}`}
                                onClick={() => setPortfolioType('Business')}
                              >
                                Business Profile
                              </button>
                              <button
                                className={`dash-radio-btn ${portfolioType === 'Custom' ? 'selected' : ''}`}
                                onClick={() => setPortfolioType('Custom')}
                              >
                                Custom Landing Page
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <React.Fragment>
                        <div className="dash-form-grid">
                          {/* Left Column */}
                          <div className="dash-form-col">
                            <div className="dash-form-group">
                              <label>Profile Image</label>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <img src="/images/testimonial_1.png" alt="Profile" className="dash-avatar" style={{ width: '60px', height: '60px' }} />
                                <button className="dash-btn dash-btn-outline" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>Upload Image</button>
                              </div>
                            </div>

                            <div className="dash-form-group">
                              <label>Full Name</label>
                              <input
                                type="text"
                                className="dash-input"
                                value={profileData.name}
                                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                              />
                            </div>

                            <div className="dash-form-group">
                              <label>Position of Work</label>
                              <input
                                type="text"
                                className="dash-input"
                                value={profileData.position}
                                onChange={(e) => setProfileData({ ...profileData, position: e.target.value })}
                              />
                            </div>

                            <div className="dash-form-group">
                              <label>Location</label>
                              <input
                                type="text"
                                className="dash-input"
                                value={profileData.location}
                                onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                              />
                            </div>

                            <div className="dash-form-group">
                              <label>Company Details</label>
                              <input
                                type="text"
                                className="dash-input"
                                value={profileData.companyDetail}
                                onChange={(e) => setProfileData({ ...profileData, companyDetail: e.target.value })}
                              />
                            </div>

                            <div className="dash-form-group">
                              <label>Link a new NFC Device</label>
                              <select
                                className="dash-select"
                                value={helper}
                                onChange={(e) => setHelper(e.target.value)}
                              >
                                <option value="Classic Card">TapK Classic Card</option>
                                <option value="Wood Card">TapK Bamboo Card</option>
                                <option value="Metal Card">TapK Stainless Steel</option>
                                <option value="Key Fob">TapK Key Fob</option>
                              </select>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="dash-form-col">
                            <div className="dash-form-group">
                              <label>Contact Details</label>
                              <input
                                type="text"
                                className="dash-input"
                                value={profileData.contacts}
                                onChange={(e) => setProfileData({ ...profileData, contacts: e.target.value })}
                              />
                            </div>

                            <div className="dash-form-group">
                              <label>Website / Portfolio</label>
                              <input
                                type="text"
                                className="dash-input"
                                value={profileData.website}
                                onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                              />
                            </div>

                            <div className="dash-form-group">
                               <label>Social Media / Network (3x3 Grid)</label>
                               <div style={{ 
                                 display: 'grid', 
                                 gridTemplateColumns: 'repeat(3, 1fr)', 
                                 gap: '0.75rem',
                                 padding: '1rem', 
                                 border: '1px solid var(--dash-border)', 
                                 background: 'var(--dash-bg)',
                                 maxHeight: '250px',
                                 overflowY: 'auto'
                               }}>
                                 <div className="dash-form-group" style={{ marginBottom: '0' }}>
                                   <label style={{ fontSize: '0.7rem' }}>LinkedIn</label>
                                   <input
                                     type="text"
                                     className="dash-input"
                                     style={{ padding: '0.5rem', fontSize: '0.8rem' }}
                                     value={profileData.linkedin}
                                     onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
                                     placeholder="@user"
                                   />
                                 </div>
                                 <div className="dash-form-group" style={{ marginBottom: '0' }}>
                                   <label style={{ fontSize: '0.7rem' }}>Twitter / X</label>
                                   <input
                                     type="text"
                                     className="dash-input"
                                     style={{ padding: '0.5rem', fontSize: '0.8rem' }}
                                     value={profileData.twitter}
                                     onChange={(e) => setProfileData({ ...profileData, twitter: e.target.value })}
                                     placeholder="@user"
                                   />
                                 </div>
                                 <div className="dash-form-group" style={{ marginBottom: '0' }}>
                                   <label style={{ fontSize: '0.7rem' }}>Instagram</label>
                                   <input
                                     type="text"
                                     className="dash-input"
                                     style={{ padding: '0.5rem', fontSize: '0.8rem' }}
                                     value={profileData.instagram}
                                     onChange={(e) => setProfileData({ ...profileData, instagram: e.target.value })}
                                     placeholder="@user"
                                   />
                                 </div>
                                 <div className="dash-form-group" style={{ marginBottom: '0' }}>
                                   <label style={{ fontSize: '0.7rem' }}>TikTok</label>
                                   <input
                                     type="text"
                                     className="dash-input"
                                     style={{ padding: '0.5rem', fontSize: '0.8rem' }}
                                     value={profileData.tiktok}
                                     onChange={(e) => setProfileData({ ...profileData, tiktok: e.target.value })}
                                     placeholder="@user"
                                   />
                                 </div>
                                 <div className="dash-form-group" style={{ marginBottom: '0' }}>
                                   <label style={{ fontSize: '0.7rem' }}>Facebook</label>
                                   <input
                                     type="text"
                                     className="dash-input"
                                     style={{ padding: '0.5rem', fontSize: '0.8rem' }}
                                     value={profileData.facebook}
                                     onChange={(e) => setProfileData({ ...profileData, facebook: e.target.value })}
                                     placeholder="@user"
                                   />
                                 </div>
                                 <div className="dash-form-group" style={{ marginBottom: '0' }}>
                                   <label style={{ fontSize: '0.7rem' }}>WhatsApp</label>
                                   <input
                                     type="text"
                                     className="dash-input"
                                     style={{ padding: '0.5rem', fontSize: '0.8rem' }}
                                     placeholder="+267..."
                                   />
                                 </div>
                                 <div className="dash-form-group" style={{ marginBottom: '0' }}>
                                   <label style={{ fontSize: '0.7rem' }}>YouTube</label>
                                   <input
                                     type="text"
                                     className="dash-input"
                                     style={{ padding: '0.5rem', fontSize: '0.8rem' }}
                                     placeholder="@channel"
                                   />
                                 </div>
                                 <div className="dash-form-group" style={{ marginBottom: '0' }}>
                                   <label style={{ fontSize: '0.7rem' }}>Snapchat</label>
                                   <input
                                     type="text"
                                     className="dash-input"
                                     style={{ padding: '0.5rem', fontSize: '0.8rem' }}
                                     placeholder="@user"
                                   />
                                 </div>
                                 <div className="dash-form-group" style={{ marginBottom: '0' }}>
                                   <label style={{ fontSize: '0.7rem' }}>Discord</label>
                                   <input
                                     type="text"
                                     className="dash-input"
                                     style={{ padding: '0.5rem', fontSize: '0.8rem' }}
                                     placeholder="user#0000"
                                   />
                                 </div>
                               </div>
                             </div>

                            <div className="dash-form-group">
                              <label>Select Profile Theme Color</label>
                              <div className="dash-emoji-group" style={{ justifyContent: 'center', gap: '1rem' }}>
                                {feelingIcons.map((f, idx) => (
                                  <button
                                    key={idx}
                                    type="button"
                                    title={f.value}
                                    className={`dash-emoji-btn ${feeling === f.value ? 'selected' : ''}`}
                                    onClick={() => setFeeling(f.value)}
                                    style={{ width: '40px', height: '40px', color: feeling === f.value ? 'white' : 'var(--dash-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                  >
                                    {f.icon}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="dash-form-group" style={{ marginTop: '2rem' }}>
                          <label>Profile Summary</label>
                          <textarea
                            className="dash-textarea"
                            rows={2}
                            value={profileData.summary}
                            onChange={(e) => setProfileData({ ...profileData, summary: e.target.value })}
                            placeholder="Help people know you better..."
                          />
                        </div>


                      </React.Fragment>
                    )}
                  </div>
                </div>
              )}

              {viewMode === 'completed' && (
                <div className="dash-feedback-completed">
                  <div className="dash-completed-card">

                    <h2>Profile Updated Successfully!</h2>
                    <p>Your digital business card is now updated and ready to be shared.</p>
                    
                    <div style={{ margin: '1.5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ padding: '1.5rem', background: '#f9f9fb', borderRadius: '12px', border: '2px solid var(--dash-border)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 26 26">
                          <g fill="none">
                            <defs>
                              <mask id="SVGZXg9UbgH">
                                <path fill="#fff" d="M0 0h26v26H0z"/>
                                <g fill="#000">
                                  <path fill-rule="evenodd" d="M9 9v2h2V9zM8 7.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zM15 9v2h2V9zm-1-1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zM9 15v2h2v-2zm-1-1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"/>
                                  <path d="M13.5 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"/>
                                  <path fill-rule="evenodd" d="M5 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1" clip-rule="evenodd"/>
                                  <path fill-rule="evenodd" d="M6 5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1m0 16a1 1 0 0 1-1-1v-3.5a1 1 0 1 1 2 0V20a1 1 0 0 1-1 1" clip-rule="evenodd"/>
                                  <path fill-rule="evenodd" d="M5 20a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m16 0a1 1 0 0 1-1 1h-3.5a1 1 0 1 1 0-2H20a1 1 0 0 1 1 1" clip-rule="evenodd"/>
                                  <path fill-rule="evenodd" d="M20 21a1 1 0 0 1-1-1v-3.5a1 1 0 1 1 2 0V20a1 1 0 0 1-1 1m0-16a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1" clip-rule="evenodd"/>
                                  <path fill-rule="evenodd" d="M21 6a1 1 0 0 1-1 1h-3.5a1 1 0 1 1 0-2H20a1 1 0 0 1 1 1" clip-rule="evenodd"/>
                                </g>
                              </mask>
                            </defs>
                            <circle cx="13" cy="13" r="13" fill="var(--dash-primary)" mask="url(#SVGZXg9UbgH)"/>
                          </g>
                        </svg>
                      </div>
                      <span style={{ fontSize: '0.9rem', color: 'var(--dash-text-muted)', fontWeight: '600' }}>Your Unique QR Code</span>
                    </div>

                    <div className="dash-prompt-actions" style={{ flexDirection: 'column', width: '100%' }}>
                      <button 
                        className="dash-btn dash-btn-primary" 
                        style={{ width: '100%', justifyContent: 'center', gap: '0.75rem' }}
                        onClick={() => navigate('/profile')}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M4.76 10.59a1 1 0 0 0 .26-2l-1.76-.44a1 1 0 1 0-.52 1.93l1.76.47a.8.8 0 0 0 .26.04M8.62 5a1 1 0 0 0 1 .74a.8.8 0 0 0 .26 0a1 1 0 0 0 .7-1.22l-.47-1.76a1 1 0 1 0-1.93.52Zm4.83 10A1 1 0 0 0 12 15l-3.5 3.56a2.21 2.21 0 0 1-3.06 0a2.15 2.15 0 0 1 0-3.06L9 12a1 1 0 1 0-1.41-1.41L4 14.08A4.17 4.17 0 1 0 9.92 20l3.53-3.53a1 1 0 0 0 0-1.47M5.18 6.59a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41L5.3 3.89A1 1 0 0 0 3.89 5.3Zm16.08 7.33l-1.76-.47a1 1 0 1 0-.5 1.93l1.76.47h.26a1 1 0 0 0 .26-2ZM15.38 19a1 1 0 0 0-1.23-.7a1 1 0 0 0-.7 1.22l.47 1.76a1 1 0 0 0 1 .74a1.2 1.2 0 0 0 .26 0a1 1 0 0 0 .71-1.23Zm3.44-1.57a1 1 0 0 0-1.41 1.41l1.29 1.29a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM21.2 7a4.16 4.16 0 0 0-7.12-3l-3.53 3.56A1 1 0 1 0 12 9l3.5-3.56a2.21 2.21 0 0 1 3.06 0a2.15 2.15 0 0 1 0 3.06L15 12a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0L20 9.92A4.2 4.2 0 0 0 21.2 7"/></svg>
                        View Live Profile
                      </button>
                      <button 
                        className="dash-btn dash-btn-outline" 
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => setViewMode('prompt')}
                      >
                        Back to Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {viewMode === 'profile' && (
                <div className="dash-profile-preview" style={{ width: '100%', height: 'calc(100vh - 80px)', display: 'flex', justifyContent: 'center' }}>
                  <div className="dash-form-card" style={{ width: '100%', maxWidth: 'none', height: '100%', padding: '0', overflow: 'hidden', position: 'relative', borderRadius: '0', border: 'none' }}>
                    {/* Hero Cover */}
                    <div className="dash-profile-hero" style={{ height: '220px', background: 'linear-gradient(135deg, var(--dash-primary) 0%, #0c437a 100%)' }}></div>
                    
                    {/* Back Button */}
                    <button 
                      onClick={() => setViewMode('prompt')}
                      style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '8px', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}
                    >
                      <ArrowLeft size={20} />
                    </button>

                    <div className="dash-profile-content-container" style={{ padding: '1.5rem 3rem', marginTop: '-120px', textAlign: 'center' }}>
                      <div className="dash-profile-split" style={{ display: 'flex', alignItems: 'center', gap: '3rem', textAlign: 'left' }}>
                        {/* Left Side: Avatar & Basic Info */}
                        <div style={{ flexShrink: 0, textAlign: 'center', paddingLeft: '3rem' }}>
                          <img 
                            src="/images/testimonial_1.png" 
                            alt="Profile" 
                            className="dash-profile-avatar"
                            style={{ width: '140px', height: '140px', borderRadius: '50%', border: '6px solid white', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', objectFit: 'cover' }} 
                          />
                          <h2 style={{ marginTop: '1rem', marginBottom: '0.25rem', color: 'var(--dash-primary)', fontSize: '1.8rem', fontWeight: '800' }}>{profileData.name}</h2>
                          <p style={{ fontWeight: '700', color: 'var(--dash-accent)', marginBottom: '0.25rem' }}>{profileData.position}</p>
                              <p style={{ fontSize: '0.9rem', color: 'var(--dash-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" style={{ color: 'var(--dash-accent)' }}>
                                <path fill="currentColor" d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85s106.7 47.8 106.7 106.8S314.9 298.6 256 298.6"/>
                              </svg>
                            {profileData.location}
                          </p>
                          
                          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                            <button className="dash-btn dash-btn-primary" onClick={handleSaveContact} style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>Save Contact</button>
                            <button className="dash-btn dash-btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>
                              <Share2 size={16} /> Share
                            </button>
                          </div>
                        </div>

                        {/* Right Side: Bio & Social Grid */}
                        <div style={{ flex: 1, paddingTop: '2rem' }}>
                          <div className="dash-profile-summary" style={{ marginTop: '6rem', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: '1.6', color: 'var(--dash-text)', background: 'var(--dash-primary-light)', padding: '1rem', borderRadius: '12px' }}>
                            <p style={{ margin: 0 }}>{profileData.summary || "Helping businesses scale through innovation..."}</p>
                          </div>

                          <h3 style={{ fontSize: '1rem', textAlign: 'left', color: 'var(--dash-primary)', marginBottom: '1rem', fontWeight: '800', borderBottom: '2px solid var(--dash-primary-light)', paddingBottom: '0.25rem' }}>Professional Networks</h3>
                          
                          <div className="dash-social-grid" style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(3, 1fr)', 
                            gap: '0.75rem' 
                          }}>
                            {[
                              { label: 'LinkedIn', value: profileData.linkedin, icon: '🔗' },
                              { label: 'Twitter / X', value: profileData.twitter, icon: '🐦' },
                              { label: 'Instagram', value: profileData.instagram, icon: '📸' },
                              { label: 'Website', value: profileData.website, icon: '🌐' },
                              { label: 'TikTok', value: profileData.tiktok, icon: '🎵' },
                              { label: 'Facebook', value: profileData.facebook, icon: '👥' },
                              { label: 'WhatsApp', value: profileData.whatsapp, icon: '💬' },
                              { label: 'YouTube', value: profileData.youtube, icon: '📺' },
                              { label: 'Discord', value: profileData.discord, icon: '👾' }
                            ].filter(item => item.value).map((item, idx) => (
                              <div key={idx} style={{ 
                                padding: '0.75rem', 
                                background: 'var(--dash-bg)', 
                                border: '1px solid var(--dash-border)', 
                                borderRadius: '0', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center'
                              }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <span style={{ fontWeight: '700', color: 'var(--dash-text)', fontSize: '0.85rem' }}>{item.label}</span>
                                </div>
                                <span style={{ color: 'var(--dash-primary)', fontSize: '0.75rem', fontWeight: '600', paddingLeft: '1rem', textAlign: 'right' }}>{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ) : (
            <div className="dash-why-section">
              <div className="dash-why-card">
                <h2 className="dash-why-title">Why use TapK Digital Cards?</h2>
                <div className="dash-qa-content">
                  <div className="dash-qa-item">
                    <h3>Q: How do digital cards benefit my networking?</h3>
                    <p>Digital cards allow for instant information sharing, reducing the friction of manual entry. One tap connects you across all your professional and social platforms.</p>
                  </div>
                  <div className="dash-qa-item">
                    <h3>Q: Is it better than paper cards?</h3>
                    <p>Yes. TapK is eco-friendly, cost-effective, and always up-to-date. You'll never run out of cards again, and you can change your info in real-time.</p>
                  </div>
                </div>

                <div className="dash-mvv-grid">
                  <div className="dash-mvv-item" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 80 80" style={{ color: 'var(--dash-primary)' }}><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="m24 72l26.692-11.941c4.732-2.117 5.09-8.698.617-11.317v0c-4.296-2.515-4.18-8.762.206-11.116L62 32" /><path fill="currentColor" fill-rule="evenodd" d="M30.45 35.336a14.76 14.76 0 0 0-20.847 10.02l-.051.226a15.24 15.24 0 0 0 2.659 12.491l1.356 1.816q.936 1.25 2.065 2.328l8.035 7.668c.186.178.48.178.666 0l8.035-7.668a18.7 18.7 0 0 0 2.065-2.328l1.357-1.816a15.25 15.25 0 0 0 2.658-12.491l-.051-.227a14.76 14.76 0 0 0-7.947-10.02m-3.6 6.205a6.55 6.55 0 0 0-5.702 0A6.58 6.58 0 0 0 17.612 46a6.63 6.63 0 0 0 1.264 5.572A6.55 6.55 0 0 0 24 54.052a6.55 6.55 0 0 0 5.124-2.48a6.63 6.63 0 0 0 1.264-5.571a6.58 6.58 0 0 0-3.537-4.46" clip-rule="evenodd" /><path fill="currentColor" d="m17.55 35.336l-.873-1.8zm12.9 0l.874-1.8zM9.603 45.356l1.951.44zm-.051.226l-1.95-.441zm2.659 12.491l1.601-1.197zm1.356 1.816l-1.601 1.197zm2.065 2.328l-1.381 1.447zm8.035 7.668l-1.381 1.447zm.666 0l1.381 1.447zm8.035-7.668l1.381 1.447zm2.065-2.328L32.83 58.69zm1.357-1.816l-1.602-1.197zm2.658-12.491l-1.95.441zm-.051-.227l1.95-.441zM21.149 41.54l-.872-1.8zm5.702 0l.872-1.8zM17.612 46l-1.95-.442zm1.264 5.572l1.567-1.243zm10.248 0l1.566 1.243zm1.264-5.571l-1.95.443zm-11.964-8.866a12.76 12.76 0 0 1 11.152 0l1.747-3.598a16.76 16.76 0 0 0-14.646 0zm-6.87 8.662a12.76 12.76 0 0 1 6.87-8.662l-1.747-3.598a16.76 16.76 0 0 0-9.024 11.377zm-.051.226l.051-.227l-3.901-.882l-.052.227zm2.31 10.853a13.24 13.24 0 0 1-2.31-10.853L7.6 45.14a17.24 17.24 0 0 0 3.008 14.13zm1.356 1.815l-1.357-1.815l-3.203 2.395l1.357 1.815zm1.843 2.079a16.7 16.7 0 0 1-1.843-2.079l-3.203 2.395a20.7 20.7 0 0 0 2.285 2.578zm8.035 7.668l-8.035-7.668l-2.761 2.894l8.035 7.668zm-2.094 0a1.517 1.517 0 0 1 2.094 0l-2.761 2.894c.96.915 2.469.915 3.428 0zm8.035-7.668l-8.035 7.668l2.761 2.894l8.035-7.668zm1.843-2.079a16.7 16.7 0 0 1-1.843 2.079l2.761 2.894a20.7 20.7 0 0 0 2.285-2.578zm1.357-1.815L32.83 58.69l3.203 2.395l1.358-1.815zm2.31-10.853a13.24 13.24 0 0 1-2.31 10.853l3.203 2.395A17.24 17.24 0 0 0 40.4 45.14zm-.052-.227l.051.227l3.902-.883l-.052-.226zm-6.87-8.661a12.76 12.76 0 0 1 6.87 8.662l3.901-.883a16.76 16.76 0 0 0-9.024-11.377zM22.02 43.34a4.55 4.55 0 0 1 3.96 0l1.742-3.6a8.55 8.55 0 0 0-7.445 0zm-2.457 3.104a4.58 4.58 0 0 1 2.457-3.104l-1.743-3.6a8.58 8.58 0 0 0-4.615 5.818zm.88 3.885a4.63 4.63 0 0 1-.88-3.885l-3.901-.886a8.63 8.63 0 0 0 1.648 7.258zM24 52.052a4.55 4.55 0 0 1-3.557-1.723l-3.133 2.486A8.55 8.55 0 0 0 24 56.053zm3.557-1.723A4.55 4.55 0 0 1 24 52.052v4c2.607 0 5.074-1.2 6.69-3.236zm.88-3.885a4.64 4.64 0 0 1-.88 3.885l3.133 2.486a8.63 8.63 0 0 0 1.648-7.257zM25.98 43.34c1.239.6 2.15 1.75 2.457 3.104l3.901-.886a8.58 8.58 0 0 0-4.616-5.818z" /><path fill="currentColor" fill-rule="evenodd" d="M63.015 9.991a9.206 9.206 0 0 0-13.04 6.253l-.05.222a9.68 9.68 0 0 0 1.664 7.872l.805 1.088q.628.85 1.388 1.583l4.968 4.79a.3.3 0 0 0 .416 0l4.968-4.79a13 13 0 0 0 1.388-1.582l.806-1.09a9.68 9.68 0 0 0 1.664-7.871l-.05-.222a9.2 9.2 0 0 0-4.927-6.253m-2.263 3.912a4.083 4.083 0 0 0-5.777 2.772l-.017.074a4.14 4.14 0 0 0 .784 3.467l.026.033a4.056 4.056 0 0 0 6.38 0l.026-.033a4.14 4.14 0 0 0 .784-3.467l-.016-.074a4.08 4.08 0 0 0-2.19-2.772" clip-rule="evenodd" /><path fill="currentColor" d="m54.901 9.991l-.881-1.795zm8.114 0l.881-1.795zm-13.04 6.253l1.95.437zm-.05.222l-1.952-.437zm1.664 7.872l-1.608 1.19zm.805 1.088l1.608-1.189zm1.388 1.583l1.388-1.44zm4.968 4.79l-1.389 1.44zm.416 0l1.389 1.44zm4.968-4.79l1.388 1.44zm1.388-1.582l1.608 1.189zm.806-1.09l-1.608-1.189zm1.664-7.871l1.951-.437zm-.05-.222l-1.952.437zm-10.777-2.341l.878 1.797zm3.587 0l.878-1.797zm-5.777 2.772l1.95.439zm-.017.074l-1.951-.439zm.784 3.467l1.573-1.236zm.026.033l-1.573 1.235zm6.38 0l-1.572-1.236zm.026-.033l1.573 1.235zm.784-3.467l1.951-.439zm-.016-.074l-1.952.439zm-7.16-4.888a7.2 7.2 0 0 1 6.352 0l1.762-3.591a11.2 11.2 0 0 0-9.876 0zm-3.856 4.894a7.2 7.2 0 0 1 3.857-4.894L54.02 8.196a11.2 11.2 0 0 0-5.998 7.611zm-.05.222l.05-.222l-3.904-.874l-.05.222zm1.32 6.245a7.68 7.68 0 0 1-1.32-6.245l-3.903-.874a11.68 11.68 0 0 0 2.008 9.498zm.806 1.09l-.806-1.09l-3.215 2.38l.805 1.088zm1.168 1.33a10.7 10.7 0 0 1-1.168-1.33l-3.216 2.378a14.7 14.7 0 0 0 1.608 1.832zm4.968 4.791l-4.968-4.79l-2.776 2.88l4.967 4.79zm-2.36 0a1.7 1.7 0 0 1 2.36 0l-2.776 2.88a2.3 2.3 0 0 0 3.193 0zm4.968-4.79l-4.968 4.79l2.777 2.88l4.967-4.79zm1.168-1.332q-.528.715-1.168 1.332l2.776 2.88a14.7 14.7 0 0 0 1.608-1.833zm.806-1.089l-.806 1.09l3.216 2.378l.806-1.089zm1.32-6.245a7.68 7.68 0 0 1-1.32 6.245l3.216 2.38a11.68 11.68 0 0 0 2.007-9.5zm-.05-.222l.05.222l3.903-.874l-.05-.222zm-3.856-4.894a7.2 7.2 0 0 1 3.856 4.894l3.904-.874a11.2 11.2 0 0 0-5.998-7.611zm-4.09 3.913a2.08 2.08 0 0 1 1.83 0l1.756-3.594a6.08 6.08 0 0 0-5.344 0zm-1.118 1.414a2.08 2.08 0 0 1 1.117-1.414l-1.757-3.594a6.08 6.08 0 0 0-3.263 4.13zm-.017.073l.017-.073l-3.903-.877l-.016.073zm.406 1.793a2.14 2.14 0 0 1-.405-1.793l-3.903-.877a6.14 6.14 0 0 0 1.162 5.141zm.026.033l-.026-.033l-3.146 2.471l.026.033zm1.617.787c-.631 0-1.227-.29-1.617-.787l-3.146 2.471a6.06 6.06 0 0 0 4.763 2.316zm1.618-.787c-.39.497-.987.787-1.618.787v4a6.06 6.06 0 0 0 4.763-2.316zm.025-.033l-.025.033l3.145 2.471l.026-.033zm.406-1.793a2.14 2.14 0 0 1-.406 1.793l3.146 2.471a6.14 6.14 0 0 0 1.162-5.141zm-.017-.073l.017.073l3.902-.877l-.016-.073zM59.873 15.7c.568.277.979.797 1.117 1.414l3.903-.877a6.08 6.08 0 0 0-3.263-4.13z" /></g></svg>
                    <h4 style={{ margin: 0 }}>Instant Connection</h4>
                    <p style={{ margin: 0 }}>Share your contact info and social links in under 2 seconds with NFC technology.</p>
                  </div>
                  <div className="dash-mvv-item" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style={{ color: 'var(--dash-primary)' }}><path fill="currentColor" d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22.379l.045.1l.03.083l.014.055l.014.082l.011.1v.11l-.014.111a1 1 0 0 1-.026.11l-.039.108l-.036.075l-.016.03c-2.764 4.836-6.3 7.38-10.555 7.499L12 20c-4.396 0-8.037-2.549-10.868-7.504a1 1 0 0 1 0-.992C3.963 6.549 7.604 4 12 4m0 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6" /></svg>
                    <h4 style={{ margin: 0 }}>Rich Analytics</h4>
                    <p style={{ margin: 0 }}>See exactly when and where your card is tapped to track your networking success.</p>
                  </div>
                  <div className="dash-mvv-item" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style={{ color: 'var(--dash-primary)' }}><path fill="currentColor" d="M19.291 6h.71a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2l-4.17-5.836a2 2 0 0 0-2.201-.753l-2.486.746a2 2 0 0 1-1.988-.502l-.293-.293a1 1 0 0 1 .152-1.539l5.401-3.6a2 2 0 0 1 2.183-.024l4.156 2.645A1 1 0 0 0 19.29 6M5.027 14.295l-1.616 1.414a1 1 0 0 0 .041 1.538l5.14 4.04a1 1 0 0 0 1.487-.29l.704-1.232a2 2 0 0 0-.257-2.338l-2.702-2.972a2 2 0 0 0-2.797-.16M7.046 5H3a1 1 0 0 0-1 1v7.516a2 2 0 0 0 .35 1.13l.074-.066l1.615-1.414a3.5 3.5 0 0 1 4.895.28l2.702 2.972a3.5 3.5 0 0 1 .45 4.09l-.655 1.146a2 2 0 0 0 1.738-.155l4.41-2.646a1 1 0 0 0 .299-1.438l-5.267-7.379a.5.5 0 0 0-.55-.188l-2.486.745a3.5 3.5 0 0 1-3.48-.877l-.293-.293a2.5 2.5 0 0 1 .38-3.848z" /></svg>
                    <h4 style={{ margin: 0 }}>Eco-Friendly</h4>
                    <p style={{ margin: 0 }}>Stop wasting paper. One TapK card replaces thousands of traditional business cards.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
