export type FlightStatus = 'On Time' | 'Delayed' | 'Cancelled';

export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  route: {
    from: string;
    fromCity: string;
    to: string;
    toCity: string;
  };
  status: FlightStatus;
  scheduledDeparture: string;
  scheduledArrival: string;
  gate?: string;
}

export const mockFlights: Flight[] = [
  {
    id: '1',
    flightNumber: 'AA123',
    airline: 'American Airlines',
    route: {
      from: 'JFK',
      fromCity: 'New York, USA',
      to: 'LHR',
      toCity: 'London, UK'
    },
    status: 'On Time',
    scheduledDeparture: '10:00 AM',
    scheduledArrival: '10:00 PM',
    gate: 'B12'
  },
  {
    id: '2',
    flightNumber: 'BA456',
    airline: 'British Airways',
    route: {
      from: 'LHR',
      fromCity: 'London, UK',
      to: 'JFK',
      toCity: 'New York, USA'
    },
    status: 'Delayed',
    scheduledDeparture: '11:00 AM',
    scheduledArrival: '11:30 PM',
    gate: 'A5'
  },
  {
    id: '3',
    flightNumber: 'DL789',
    airline: 'Delta Air Lines',
    route: {
      from: 'ATL',
      fromCity: 'Atlanta, USA',
      to: 'CDG',
      toCity: 'Paris, France'
    },
    status: 'Cancelled',
    scheduledDeparture: '02:00 PM',
    scheduledArrival: '05:00 AM',
    gate: 'T4'
  },
  {
    id: '4',
    flightNumber: 'UA101',
    airline: 'United Airlines',
    route: {
      from: 'SFO',
      fromCity: 'San Francisco, USA',
      to: 'NRT',
      toCity: 'Tokyo, Japan'
    },
    status: 'On Time',
    scheduledDeparture: '09:00 AM',
    scheduledArrival: '12:00 PM',
    gate: 'G2'
  }
];
