import { Navbar } from '@/components/Navbar';
import './globals.css';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'FEngage Calc',
  description: 'Stat Growth Calculator for Fire Emblem: Engage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          manrope.className +
          ' text-clamp min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900'
        }
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
