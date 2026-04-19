import { getUsers } from '@/actions/users';
import type { User } from '@/lib/types';

export async function UserList() {
  const users = await getUsers();

  return (
    <ul className="divide-y divide-gray-100">
      {users.map((user: User) => (
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
