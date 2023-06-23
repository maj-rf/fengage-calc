import { Navbar } from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className + ' text-clamp bg-slate-500'}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
