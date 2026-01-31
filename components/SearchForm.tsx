import React, { useState } from 'react';

interface SearchFormProps {
    onSearch: (flightNumber: string) => void;
    isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim().toUpperCase());
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{
            position: 'relative',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            width: '100%',
            zIndex: 20
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(30, 41, 59, 0.8)',
                borderRadius: '50px',
                padding: '0.5rem',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
            }}>
                <div style={{ padding: '0 1.5rem', fontSize: '1.5rem' }}>🔍</div>
                <input
                    type="text"
                    placeholder="Flight Number (e.g. AA123)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={isLoading}
                    style={{
                        flex: 1,
                        padding: '1rem 0.5rem',
                        fontSize: '1.1rem',
                        border: 'none',
                        background: 'transparent',
                        outline: 'none',
                        color: 'var(--text-main)',
                        fontWeight: 500
                    }}
                />
                <button
                    type="submit"
                    disabled={isLoading || !query.trim()}
                    style={{
                        padding: '1rem 2.5rem',
                        fontSize: '1rem',
                        background: 'linear-gradient(to right, #667eea, #764ba2)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '40px',
                        cursor: 'pointer',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        boxShadow: '0 4px 15px rgba(118, 75, 162, 0.4)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        opacity: isLoading ? 0.7 : 1
                    }}
                    className="button-glow"
                >
                    {isLoading ? '...' : 'TRACK'}
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
