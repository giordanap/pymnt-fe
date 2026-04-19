'use client';

import { use } from 'react';
import type { UsersResponse, User } from '@/lib/types';
import { UserListError } from '@/components/UserListError';

interface UserListProps {
  promise: Promise<UsersResponse>;
}

export function UserList({ promise }: UserListProps) {
  const result = use(promise);

  if (!result.ok) {
    return <UserListError />;
  }

  return (
    <ul className="divide-y divide-gray-100">
      {result.users.map((user: User) => (
        <li key={user.id} className="py-3 first:pt-0 last:pb-0">
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
          <p className="text-xs text-gray-500">{user.phone}</p>
          <p className="text-xs text-gray-400">{user.company.name}</p>
        </li>
      ))}
    </ul>
  );
}
