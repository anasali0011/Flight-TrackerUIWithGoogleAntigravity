import { NextResponse } from 'next/server';
import { mockFlights } from '@/data/flights';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query')?.toUpperCase();

    // Simulate usage of a real database with a delay
    await new Promise(resolve => setTimeout(resolve, 500)); // Faster for live updates

    if (!query) {
        return NextResponse.json({ error: 'Query parameter required' }, { status: 400 });
    }

    const baseFlight = mockFlights.find(f => f.flightNumber === query);

    if (!baseFlight) {
        return NextResponse.json({ error: 'Flight not found' }, { status: 404 });
    }

    // SIMULATE LIVE DATA CHANGES
    // Create a dynamic copy
    const flight = { ...baseFlight };

    // Randomize Gate
    const gates = ['A1', 'B2', 'C3', 'D4', 'E5'];
    const randomGate = gates[Math.floor(Math.random() * gates.length)];

    // 30% chance to change gate on every poll
    if (Math.random() > 0.7) {
        flight.gate = randomGate;
    }

    // Randomize Arrival Time (jitter by 1-5 mins)
    const arrivalDate = new Date(`2026-01-01 ${flight.scheduledArrival}`);
    const jitter = Math.floor(Math.random() * 10) - 5; // -5 to +5 minutes
    // We won't actually parse date for simplicity in this mock, just appending " (Updated)" sometimes
    // or actually, let's just randomly pick a status if it's 'Delayed'

    if (flight.status === 'Delayed') {
        // Variable delay time
        flight.scheduledArrival = `${11 + Math.floor(Math.random() * 2)}:${30 + Math.floor(Math.random() * 29)} PM`;
    }

    return NextResponse.json(flight);
}
