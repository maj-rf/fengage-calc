import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FEngage Calc',
  description: 'Compute your Stat Growths!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'min-h-screen', 'bg-sommie')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
