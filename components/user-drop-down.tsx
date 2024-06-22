'use client';

import { getInitials, truncate } from '@/lib/utils';
import { Settings2Icon } from 'lucide-react';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Skeleton } from './ui/skeleton';

interface UserDropdownProps {
  getCurrentUser: () => Promise<User | null>;
}

export default function UserDropdown({ getCurrentUser }: UserDropdownProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    }
    fetchUser();
  }, [getCurrentUser]);

  if (loading) {
    return <Skeleton className="h-10 w-full bg-primary/10 md:mb-4" />;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="flex flex-col gap-1 md:mb-4 ">
      <div className="my-1 w-full border-b border-foreground/10"></div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative flex h-10 w-full justify-between p-0 hover:bg-primary/20">
            <div className="flex items-center">
              <Avatar className="mx-2 h-8 w-8">
                <AvatarImage
                  src={user.image || ''}
                  alt={user.name || user.email || ''}
                />
                <AvatarFallback>
                  {getInitials(user.name || user.email)}
                </AvatarFallback>
              </Avatar>
              <span className="px-2 text-sm font-medium leading-none text-muted-foreground">
                {user.name || truncate(user.email!, 18)}
              </span>
            </div>
            <Settings2Icon className="mr-2 h-4 w-4 text-muted-foreground/60 hover:text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[calc(100vw-40px)] sm:w-[250px]"
          align="end"
          forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user?.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/home">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/home/billing">Billing</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer"
            onSelect={(event) => {
              event.preventDefault();
              signOut({
                callbackUrl: `${window.location.origin}/login`,
              });
            }}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
