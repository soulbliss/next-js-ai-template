'use server';

import { getServerSession } from 'next-auth/next';

import { DEV } from '@/config/env';
import { authOptions } from '@/lib/auth';
import { User } from 'next-auth';

export async function getCurrentUser(): Promise<User | null> {
  // Remove this if not needed to check demo
  if (DEV) {
    return {
      id: '1',
      email: 'jack@website.com',
      name: 'Jack Fiction',
    } as User;
  }
  const session = await getServerSession(authOptions);
  return session?.user as User | null;
}
