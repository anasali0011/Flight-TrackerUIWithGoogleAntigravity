import './globals.css';
import type { Metadata } from 'next';
import SkyBackground from '@/components/SkyBackground';

export const metadata: Metadata = {
  title: 'Flight Tracker',
  description: 'Track your flights in real-time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SkyBackground />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
