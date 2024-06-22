import '@/styles/globals.css';

import { Analytics } from '@/components/analytics';
import NavigationShell from '@/components/navigation-shell';
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

export default function Layout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        className={`${fontSans.variable} ${fontDisplay.variable}`}>
        <head />
        <body className="h-screen overflow-hidden">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <NavigationShell>{children}</NavigationShell>
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
