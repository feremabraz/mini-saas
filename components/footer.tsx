import Link from 'next/link';
import { Bird } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-12 h-14 flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <Link className="inline items-center justify-center" href="#">
          <Bird className="h-6 w-6" />
          <span className="sr-only">Mini-SaaS</span>
        </Link>
        <div className="mt-8 ml-4 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2024 Mini by Fernando Braz. MIT Licensed.
          </p>
        </div>
      </div>
    </footer>
  );
}
