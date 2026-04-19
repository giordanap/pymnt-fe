'use server';

import type { User, UsersResponse } from '@/lib/types';

const USERS_API_URL =
  process.env.NEXT_PUBLIC_USERS_API_URL ??
  'https://jsonplaceholder.typicode.com/users';

export async function getUsers(): Promise<UsersResponse> {
  try {
    const res = await fetch(USERS_API_URL, {
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
