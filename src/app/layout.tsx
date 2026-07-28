import type { Metadata } from 'next';
import { DM_Sans, Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/navbar';

const outfitHeading = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
});

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'FEngageCalc',
  description: 'Compute your Stat Growths',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('h-full', 'antialiased', 'font-sans', dmSans.variable, outfitHeading.variable)}>
      <body className="min-h-dvh bg-sommie bg-cover bg-no-repeat bg-fixed">
        <Navbar />
        <main className="p-2 pt-0 w-full md:max-w-3/4 mx-auto">{children}</main>
      </body>
    </html>
  );
}
