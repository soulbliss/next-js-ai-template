import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates initials from a user's name.
 * @param name - The full name of the user.
 * @returns A string representing the initials.
 */
export function getInitials(name: string | null | undefined): string {
  if (!name) return '';

  const nameParts = name.split(' ');
  const firstInitial = nameParts[0]?.charAt(0).toUpperCase() || '';
  const secondInitial =
    nameParts.length > 1 ? nameParts[1]?.charAt(0).toUpperCase() : '';

  return `${firstInitial}${secondInitial || firstInitial}`;
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}
