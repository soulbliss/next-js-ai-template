import { siteConfig } from '@/config/site';
import { getCurrentUser } from '@/lib/session';
import { LayoutDashboardIcon, Menu } from 'lucide-react';
import Link from 'next/link';
import { SideBarItems } from './sidebar-items';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import UserDropdown from './user-drop-down';

export default function MobileDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-full flex-col">
        <nav className="flex h-full flex-col justify-between text-lg font-medium">
          <div>
            <Link
              href="#"
              className="mb-4 flex items-center text-lg font-semibold">
              <LayoutDashboardIcon className="h-6 w-6" />
              <span className="ml-2 text-foreground">{siteConfig.name}</span>
            </Link>
            <div className="my-1 w-full border-b border-foreground/10"></div>
            <SideBarItems isMobile />
          </div>
          <UserDropdown getCurrentUser={getCurrentUser} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
