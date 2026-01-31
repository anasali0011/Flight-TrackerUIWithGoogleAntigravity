"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchForm from '@/components/SearchForm';
import FlightCard from '@/components/FlightCard';
import Loading from '@/components/Loading';
import NotFound from '@/components/NotFound';
import { mockFlights, Flight } from '@/data/flights';

export default function Home() {
  const [flight, setFlight] = useState<Flight | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Silent refresh function
  const refreshFlight = async (flightNumber: string) => {
    try {
      const res = await fetch(`/api/search?query=${flightNumber}`);
      if (res.ok) {
        const data = await res.json();
        setFlight(data); // Update state with fresh data
      }
    } catch (error) {
      console.error('Silent refresh failed', error);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (flight) {
      interval = setInterval(() => {
        refreshFlight(flight.flightNumber);
      }, 5000); // Poll every 5 seconds
    }
    return () => clearInterval(interval);
  }, [flight]);

  const handleSearch = async (flightNumber: string) => {
    setLoading(true);
    setFlight(null);
    setHasSearched(true);

    try {
      const res = await fetch(`/api/search?query=${flightNumber}`);
      if (res.ok) {
        const data = await res.json();
        setFlight(data);
      } else {
        setFlight(null);
      }
    } catch (error) {
      console.error('Failed to fetch flight:', error);
      setFlight(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <SearchForm onSearch={handleSearch} isLoading={loading} />

      {!hasSearched && !loading && (
        <div style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--white)', background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '1rem', backdropFilter: 'blur(5px)' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Try searching for:</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {mockFlights.map(f => (
              <button
                key={f.flightNumber}
                onClick={() => handleSearch(f.flightNumber)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  color: 'var(--accent-color)',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  backdropFilter: 'blur(5px)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                {f.flightNumber}
              </button>
            ))}
          </div>
        </div>
      )}

      <div style={{ minHeight: '300px' }}>
        {loading && <Loading />}
        {!loading && flight && <FlightCard flight={flight} />}
        {!loading && hasSearched && !flight && <NotFound />}
      </div>

      <Footer />
    </>
  );
}
