'use client';

import { SideBar } from '@/config/sidebar';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SideBarItems({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname();
  const styles = isMobile
    ? 'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
    : 'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground/80 transition-all hover:bg-primary/10 hover:text-primary/90';

  return SideBar.map((item: NavItem) => (
    <Link
      href={item.href}
      className={cn(
        styles,
        pathname === item.href && 'bg-primary/15 text-foreground/80',
      )}>
      {item.icon && <item.icon size={20} />}
      {item.title}
    </Link>
  ));
}
