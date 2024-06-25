import type { Metadata } from 'next';
import './globals.css';
import { fontSans } from './font';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Mini Template & Tool',
  description: 'Template with tool, shadcn-style.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
