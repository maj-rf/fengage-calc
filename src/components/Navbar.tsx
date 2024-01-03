import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="bg-gray-800 p-3">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between text-white">
        <h1>
          <Link
            href="/"
            className="bg-gradient-to-r from-red-600 to-indigo-400 bg-clip-text font-semibold text-transparent hover:text-red-400"
          >
            FEngage Calc
          </Link>
        </h1>
        <ul className="flex items-center justify-between gap-4">
          <li>
            <Link href="/characters" className="hover:text-red-400">
              Characters
            </Link>
          </li>
          <li>
            <Link href="/classes" className="hover:text-red-400">
              Classes
            </Link>
          </li>
          {/* <li>
            <DonateBtn />
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
