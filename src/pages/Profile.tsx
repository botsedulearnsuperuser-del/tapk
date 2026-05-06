import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2, ArrowLeft } from 'lucide-react';
import './Dashboard.css';

const profileData = {
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
  discord: '',
  themeColor: '#082E54',
  email: 'thabo@techpulse.co.bw',
  secondaryPhone: '+267 72 999 888'
};

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const profileUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${profileData.name}\nTITLE:${profileData.position}\nORG:${profileData.companyDetail}\nNOTE:${profileData.summary}\nTEL;TYPE=CELL:${profileData.contacts}\nTEL;TYPE=WORK:${profileData.secondaryPhone}\nEMAIL;TYPE=INTERNET:${profileData.email}\nURL:${profileData.website}\nX-SOCIALPROFILE;type=linkedin:${profileData.linkedin}\nX-SOCIALPROFILE;type=twitter:${profileData.twitter}\nX-SOCIALPROFILE;type=instagram:${profileData.instagram}\nEND:VCARD`;
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

  const getSocialLink = (label: string, value: string) => {
    if (!value) return '#';
    const cleanValue = value.replace('@', '');
    switch (label) {
      case 'LinkedIn': return `https://linkedin.com/in/${cleanValue}`;
      case 'Twitter / X': return `https://twitter.com/${cleanValue}`;
      case 'Instagram': return `https://instagram.com/${cleanValue}`;
      case 'TikTok': return `https://tiktok.com/@${cleanValue}`;
      case 'Facebook': return `https://facebook.com/${cleanValue}`;
      case 'YouTube': return `https://youtube.com/${cleanValue}`;
      case 'Website': return value.startsWith('http') ? value : `https://${value}`;
      case 'Email': return `mailto:${value}`;
      case 'WhatsApp': return `https://wa.me/${value.replace(/\D/g, '')}`;
      default: return '#';
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--dash-bg)', paddingBottom: '3rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'white', minHeight: '100vh', boxShadow: '0 0 50px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
        
        {/* Back Button */}
        <button
          className="dash-profile-back-btn"
          onClick={() => navigate('/dashboard')}
          style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '8px', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}
        >
          <ArrowLeft size={20} />
        </button>

        {/* Hero Cover */}
        <div className="dash-profile-hero" style={{ height: '220px', background: `linear-gradient(135deg, ${profileData.themeColor} 0%, #0c437a 100%)` }}></div>

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
              <p style={{ fontWeight: '700', color: 'var(--dash-accent)', marginBottom: '0.1rem' }}>{profileData.position}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--dash-text-muted)', marginBottom: '0.5rem', fontWeight: '600' }}>{profileData.companyDetail}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--dash-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="mobile-hide-icon" style={{ display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" style={{ color: profileData.themeColor }}>
                      <path fill="currentColor" d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85s106.7 47.8 106.7 106.8S314.9 298.6 256 298.6"/>
                    </svg>
                  </span>
                  {profileData.location}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--dash-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="mobile-hide-icon" style={{ display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{ color: profileData.themeColor }}>
                      <g fill="currentColor"><path d="M22 12A10 10 0 0 0 12 2v2a8 8 0 0 1 7.391 4.938A8 8 0 0 1 20 12zM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10"/><path d="M17.543 9.704A6 6 0 0 1 18 12h-1.8A4.2 4.2 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704"/></g>
                    </svg>
                  </span>
                  {profileData.contacts}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <button className="dash-btn dash-btn-primary" onClick={handleSaveContact} style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>Save Contact</button>
                <button className="dash-btn dash-btn-outline" onClick={() => setShowShareModal(true)} style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}><Share2 size={16} /></span> Share
                </button>
              </div>
            </div>

            {/* Right Side: Bio & Social Grid */}
            <div style={{ flex: 1, paddingTop: '2rem' }}>
              <div className="dash-profile-summary" style={{ marginTop: '6rem', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: '1.6', color: 'var(--dash-text)', background: 'var(--dash-primary-light)', padding: '1rem', borderRadius: '12px' }}>
                <p style={{ margin: 0 }}>{profileData.summary || "Helping businesses scale through innovation..."}</p>
              </div>

              <h3 style={{ fontSize: '1rem', textAlign: 'left', color: 'var(--dash-primary)', marginBottom: '1rem', fontWeight: '800', borderBottom: '2px solid var(--dash-primary-light)', paddingBottom: '0.25rem' }}>Professional Networks</h3>

              <div className="dash-social-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[
                  { label: 'LinkedIn', value: profileData.linkedin },
                  { label: 'Twitter / X', value: profileData.twitter },
                  { label: 'Instagram', value: profileData.instagram },
                  { label: 'Website', value: profileData.website },
                  { label: 'Email', value: profileData.email },
                  { label: 'Secondary Phone', value: profileData.secondaryPhone },
                  { label: 'TikTok', value: profileData.tiktok },
                  { label: 'Facebook', value: profileData.facebook },
                  { label: 'WhatsApp', value: profileData.whatsapp },
                  { label: 'YouTube', value: profileData.youtube },
                  { label: 'Discord', value: profileData.discord }
                ].filter(item => item.value).map((item, idx) => (
                  <div key={idx} style={{ padding: '0.75rem', background: 'var(--dash-bg)', border: '1px solid var(--dash-border)', borderRadius: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontWeight: '700', color: 'var(--dash-text)', fontSize: '0.85rem' }}>{item.label}</span>
                    </div>
                    <a 
                      href={getSocialLink(item.label, item.value)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--dash-primary)', fontSize: '0.75rem', fontWeight: '800', textDecoration: 'none', paddingLeft: '1rem', textAlign: 'right' }}
                    >
                      {item.label === 'Website' || item.label === 'Email' ? item.value : `@${item.value.replace('@', '')}`}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Share Modal */}
        {showShareModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', width: '90%', maxWidth: '400px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
              <h3 style={{ color: 'var(--dash-primary)', marginBottom: '1rem' }}>Share Profile</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--dash-text-muted)', marginBottom: '1.5rem' }}>Copy your unique profile URL to share it with others.</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', background: '#f8f9fa', padding: '0.5rem', borderRadius: '10px', border: '1px solid #e1e5eb', marginBottom: '1.5rem' }}>
                <input 
                  type="text" 
                  readOnly 
                  value={profileUrl} 
                  style={{ flex: 1, border: 'none', background: 'transparent', padding: '0.5rem', fontSize: '0.8rem', color: 'var(--dash-text)' }}
                />
                <button 
                  onClick={handleCopy}
                  style={{ background: profileData.themeColor, color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '600' }}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              
              <button 
                onClick={() => setShowShareModal(false)}
                style={{ background: 'transparent', border: 'none', color: 'var(--dash-text-muted)', cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Profile;
