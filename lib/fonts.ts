import { Inter, Space_Grotesk } from 'next/font/google';

export const fontSans = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const fontDisplay = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});
