'use client';

import { Info } from './Info';
import { DonateBtn } from './DonateBtn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const path = usePathname();

  return (
    <nav>
      <div className="info">
        <Info />
        <DonateBtn />
      </div>
      <div className="links">
        <Link
          href="/"
          className={path === '/' ? 'active nav-links' : 'nav-links'}
        >
          Home
        </Link>
        <Link
          href="/characters"
          className={path === '/characters' ? 'active nav-links' : 'nav-links'}
        >
          Characters
        </Link>
        <Link
          href="/classes"
          className={path === '/classes' ? 'active nav-links' : 'nav-links'}
        >
          Classes
        </Link>
      </div>
    </nav>
  );
};
