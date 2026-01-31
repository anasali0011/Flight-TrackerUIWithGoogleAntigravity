import React from 'react';

const NotFound = () => {
    return (
        <div className="card" style={{ textAlign: 'center', padding: '3rem', animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤔</div>
            <h2 style={{ marginBottom: '0.5rem' }}>Flight Not Found</h2>
            <p style={{ color: 'var(--secondary-text)' }}>
                We couldn't find a flight with that number. <br />
                Please check the number and try again.
            </p>
        </div>
    );
};

export default NotFound;
