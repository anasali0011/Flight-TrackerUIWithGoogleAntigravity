import React from 'react';

const Loading = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px'
        }}>
            <img
                src="/assets/plane_dark.png"
                alt="Loading..."
                style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'contain',
                    animation: 'bounce 1s infinite alternate',
                    filter: 'drop-shadow(0 0 10px var(--accent-color))'
                }}
            />
            <style jsx>{`
            @keyframes bounce {
              from { transform: translateY(0); }
              to { transform: translateY(-20px); }
            }
          `}</style>
            <p style={{ color: 'var(--white)', fontWeight: 500, marginTop: '1rem' }}>Searching flights...</p>
        </div>
    );
};

export default Loading;
