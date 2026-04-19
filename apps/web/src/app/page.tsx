import { Suspense } from 'react';
import { UsersDialog } from '@/components/UsersDialog';
import { UserList } from '@/components/UserList';
import { UserListSkeleton } from '@/components/UserListSkeleton';

export default function Home() {
  return (
    <main className="p-24 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">Candidate Challenge</h1>
      <UsersDialog>
        <Suspense fallback={<UserListSkeleton />}>
          <UserList />
        </Suspense>
      </UsersDialog>
    </main>
  );
}
