import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            color: 'var(--secondary-text)',
            marginTop: 'auto',
            fontSize: '0.875rem'
        }}>
            <p>&copy; {new Date().getFullYear()} Flight Tracker App. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
