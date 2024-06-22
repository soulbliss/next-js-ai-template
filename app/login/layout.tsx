import '@/styles/globals.css';

import { Analytics } from '@/components/analytics';
import { ThemeProvider } from '@/components/theme-provider';
import { fontDisplay, fontSans } from '@/lib/fonts';
import { RootLayoutProps } from '@/types';

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        className={`${fontSans.variable} ${fontDisplay.variable}`}>
        <head />
        <body className="overflow-hidden">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
