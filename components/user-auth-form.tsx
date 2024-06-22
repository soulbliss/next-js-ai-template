'use client';

import { signIn } from 'next-auth/react';
import * as React from 'react';

import { Icons } from '@/components/icons';
import { PATHS } from '@/config/paths';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Button
        variant="default"
        onClick={() => {
          signIn('google', {
            callbackUrl: PATHS.HOME,
          });
        }}
        type="button">
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          signIn('github', {
            callbackUrl: PATHS.HOME,
          });
        }}
        type="button">
        <Icons.gitHub className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  );
}
