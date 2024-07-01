import Link from 'next/link';
import { Logo } from '@/components/logo';

interface NavLink {
  href: string;
  label: string;
}

export interface StickyNavProps {
  links: NavLink[];
}

export function FixedNav({ links }: StickyNavProps) {
  return (
    <header className="m-auto px-12 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Logo className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-sm font-medium hover:underline underline-offset-4"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
