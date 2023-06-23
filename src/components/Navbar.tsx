import Link from 'next/link';
import { DonateBtn } from './DonateBtn';
export const Navbar = () => {
  return (
    <header className="bg-gray-800 p-3">
      <nav className="max-w-5xl mx-auto flex flex-wrap justify-between items-center text-white">
        <h1>
          <Link href="/" className="hover:text-light-red font-semibold">
            FEngage Calc
          </Link>
        </h1>
        <ul className="flex justify-between items-center gap-4">
          <li>
            <Link href="/characters" className="hover:text-light-red">
              Characters
            </Link>
          </li>
          <li>
            <Link href="/classes" className="hover:text-light-red">
              Classes
            </Link>
          </li>
          <li>
            <DonateBtn />
          </li>
        </ul>
      </nav>
    </header>
  );
};
