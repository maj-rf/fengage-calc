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
    <ul className="ml-auto flex items-center py-1 bg-background/80 rounded-md">
      {links.map((l) => (
        <li key={l.label}>
          <Link
            href={l.href}
            className={`font-heading ${buttonVariants({ variant: 'link', size: 'sm' })} ${pathname === l.href ? 'underline decoration-blue-700' : ''}`}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
