import Link from 'next/link';
import Image from 'next/image';
import { Links } from './links';

export const Navbar = () => {
  return (
    <header className="w-full absolute top-4">
      <nav className="flex items-center md:w-5/6 px-4 mx-auto">
        <h1 className="font-heading font-semibold flex items-center">
          <Link
            href="/"
            className="bg-linear-to-r from-blue-800 to-red-700 bg-clip-text text-transparent text-shadow-2xs"
          >
            FEngage Calc
          </Link>
          <Image
            src={'/alear-run-4x.gif'}
            loading="eager"
            width="40"
            height="40"
            alt="alear-run"
          />
        </h1>
        <Links />
      </nav>
    </header>
  );
};
