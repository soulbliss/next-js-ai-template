import '@/styles/globals.css';

import NavigationShell from '@/components/navigation-shell';
import { RootLayoutProps } from '@/types';

export default function Layout({ children }: RootLayoutProps) {
  return <NavigationShell>{children}</NavigationShell>;
}
