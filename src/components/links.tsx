'use client';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Characters', href: '/characters' },
  { label: 'Classes', href: '/classes' },
  { label: 'Average', href: '/average' },
];

export const Links = () => {
  const pathname = usePathname();

  return (
    <ul className="ml-auto flex items-center p-2 px-4 bg-background/80 rounded-md">
      {links.map((l) => (
        <li key={l.label}>
          <Link
            href={l.href}
            className={`${buttonVariants({ variant: 'link', size: 'sm' })} ${pathname === l.href ? 'underline decoration-blue-700' : ''}`}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
