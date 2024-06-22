import { LayoutDashboardIcon } from 'lucide-react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { RootLayoutProps } from '@/types';
import MobileDrawer from './mobile-drawer';
import Sidebar from './sidebar';

export default async function NavigationShell({ children }: RootLayoutProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <LayoutDashboardIcon className="h-6 w-6" />
              <span className="">{siteConfig.name}</span>
            </Link>
          </div>
          <div className="flex-1">
            <Sidebar />
          </div>
        </div>
      </div>
      <aside className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 md:hidden lg:h-[60px] lg:px-6">
          <MobileDrawer />
        </header>
        <main className="flex flex-1 flex-col">{children}</main>
      </aside>
    </div>
  );
}
