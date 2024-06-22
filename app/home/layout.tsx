import '@/styles/globals.css';

import { Analytics } from '@/components/analytics';
import NavigationShell from '@/components/navigation-shell';
import { ThemeProvider } from '@/components/theme-provider';
import { fontDisplay, fontSans } from '@/lib/fonts';
import { RootLayoutProps } from '@/types';

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
