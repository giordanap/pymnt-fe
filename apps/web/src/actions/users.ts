'use server';

import type { User } from '@/lib/types';

export async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  const users: User[] = await res.json();
  return users.slice(0, 5);
}
