'use server';

import type { User, UsersResponse } from '@/lib/types';

export async function getUsers(): Promise<UsersResponse> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return { ok: false, error: 'Failed to fetch users' };
    }

    const data: User[] = await res.json();
    return { ok: true, users: data.slice(0, 5) };
  } catch {
    return { ok: false, error: 'Failed to fetch users' };
  }
}
