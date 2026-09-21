import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Mobil Detailing | Mobile Car, RV & Boat Detailing",
  description:
    "Scratch removal, paint correction, ceramic coating, deep interior cleaning. We come to you. Call or Text 847-964-3474.",
  keywords: [
    "mobile detailing",
    "car detailing",
    "paint correction",
    "ceramic coating",
    "RV detailing",
    "boat detailing",
    "scratch removal",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
