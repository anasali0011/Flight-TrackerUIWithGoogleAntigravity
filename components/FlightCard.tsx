import React from 'react';
import { Flight } from '@/data/flights';

const FlightCard: React.FC<{ flight: Flight }> = ({ flight }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'On Time': return 'var(--status-success)';
            case 'Delayed': return 'var(--status-error)';
            case 'Cancelled': return 'rgba(255,255,255,0.5)';
            default: return 'var(--accent-color)';
        }
    };

    return (
        <div className="glass-panel" style={{
            padding: '2.5rem',
            animation: 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            color: 'var(--text-main)',
            textAlign: 'left'
        }}>
            {/* Header Section */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '3rem'
            }}>
                <div>
                    <div style={{
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        opacity: 0.8,
                        marginBottom: '0.5rem'
                    }}>{flight.airline}</div>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>{flight.flightNumber}</h2>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{
                        background: 'rgba(239, 68, 68, 0.2)',
                        color: '#ef4444',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        animation: 'pulse 2s infinite'
                    }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></span>
                        LIVE
                    </div>
                    <div style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '1rem',
                        background: getStatusColor(flight.status),
                        color: '#1a202c',
                        fontWeight: '800',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}>
                        {flight.status}
                    </div>
                </div>
            </div>
            <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
      `}</style>


            {/* Route Graphic */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                marginBottom: '3rem'
            }}>
                {/* Departure */}
                <div style={{ textAlign: 'center', zIndex: 1, flex: 1 }}>
                    <div style={{ fontSize: '3rem', fontWeight: 800 }}>{flight.route.from}</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>{flight.route.fromCity}</div>
                    <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>{flight.scheduledDeparture}</div>
                </div>

                {/* Line & Plane */}
                <div style={{ flex: 1, margin: '0 1rem', position: 'relative', height: '2px', background: 'rgba(255,255,255,0.3)' }}>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'var(--white)',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(255,255,255,0.6)'
                    }}>
                        ✈️
                    </div>
                </div>

                {/* Arrival */}
                <div style={{ textAlign: 'center', zIndex: 1, flex: 1 }}>
                    <div style={{ fontSize: '3rem', fontWeight: 800 }}>{flight.route.to}</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>{flight.route.toCity}</div>
                    <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>{flight.scheduledArrival}</div>
                </div>        </div>

            {/* Footer Details */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.2)'
            }}>
                <div>
                    <span style={{ opacity: 0.7 }}>Gate</span>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{flight.gate || 'TBD'}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <span style={{ opacity: 0.7 }}>Date</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{new Date().toLocaleDateString()}</div>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;
