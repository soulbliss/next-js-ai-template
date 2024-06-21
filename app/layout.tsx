import '@/styles/globals.css';

import { Analytics } from '@/components/analytics';
import { ThemeProvider } from '@/components/theme-provider';
import { RootLayoutProps } from '@/types';
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        className={`${fontSans.variable} ${fontDisplay.variable}`}>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
