import React from 'react';

const Header = () => {
    return (
        <header style={{
            textAlign: 'center',
            marginBottom: '4rem',
            paddingTop: '2rem',
            position: 'relative'
        }}>
            <div style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative'
            }}>
                <div style={{
                    width: '180px',
                    height: '180px',
                    marginBottom: '-10px',
                    zIndex: 2,
                    filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.5))'
                }}>
                    <img
                        src="/assets/plane_dark.png"
                        alt="Flight Tracker Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'contain', animation: 'float 6s ease-in-out infinite' }}
                    />
                </div>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 900,
                    color: 'var(--white)',
                    textShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    lineHeight: 1,
                    letterSpacing: '-2px',
                    margin: 0
                }}>
                    Flight Tracker
                </h1>
                <p style={{
                    color: 'var(--text-muted)',
                    marginTop: '1rem',
                    fontSize: '1.2rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                }}>
                    Live Status Updates
                </p>
            </div>
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
      `}</style>
        </header>
    );
};

export default Header;
