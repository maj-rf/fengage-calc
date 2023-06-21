import Link from 'next/link';
export const Navbar = () => {
  return (
    <header className="bg-gray-800 p-3">
      <nav className="max-w-5xl mx-auto flex justify-between items-center text-white">
        <h1>
          <Link href="/">FEngage Calc</Link>
        </h1>
        <ul className="flex justify-between items-center gap-8">
          <li>
            <Link href="/characters">Characters</Link>
          </li>
          <li>
            <Link href="/classes">Classes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
