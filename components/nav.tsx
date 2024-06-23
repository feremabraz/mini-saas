import Link from 'next/link';
import { Bird } from 'lucide-react';

export function Nav() {
  return (
    <header className=" m-auto px-12 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Bird className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Showcase
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          GitHub
        </Link>
      </nav>
    </header>
  );
}
