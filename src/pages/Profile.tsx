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
};

const Profile: React.FC = () => {
  const navigate = useNavigate();

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
    <div className="dash-profile-preview" style={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', background: 'var(--dash-bg)' }}>
      <div style={{ width: '100%', maxWidth: 'none', position: 'relative', overflow: 'hidden' }}>

        {/* Hero Cover */}
        <div className="dash-profile-hero" style={{ height: '220px', background: 'linear-gradient(135deg, #082E54 0%, #0c437a 100%)' }}></div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/dashboard')}
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" style={{ color: '#37DFD3' }}>
                  <path fill="currentColor" d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85s106.7 47.8 106.7 106.8S314.9 298.6 256 298.6" />
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
                <p style={{ margin: 0 }}>{profileData.summary}</p>
              </div>

              <h3 style={{ fontSize: '1rem', textAlign: 'left', color: 'var(--dash-primary)', marginBottom: '1rem', fontWeight: '800', borderBottom: '2px solid var(--dash-primary-light)', paddingBottom: '0.25rem' }}>Professional Networks</h3>

              <div className="dash-social-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[
                  { label: 'LinkedIn', value: profileData.linkedin },
                  { label: 'Twitter / X', value: profileData.twitter },
                  { label: 'Instagram', value: profileData.instagram },
                  { label: 'Website', value: profileData.website },
                  { label: 'TikTok', value: profileData.tiktok },
                  { label: 'Facebook', value: profileData.facebook },
                  { label: 'WhatsApp', value: profileData.whatsapp },
                  { label: 'YouTube', value: profileData.youtube },
                  { label: 'Discord', value: profileData.discord },
                ].filter(item => item.value).map((item, idx) => (
                  <div key={idx} style={{ padding: '0.75rem', background: 'var(--dash-bg)', border: '1px solid var(--dash-border)', borderRadius: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
  );
};

export default Profile;
