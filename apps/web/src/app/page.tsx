import { UsersDialog } from '@/components/UsersDialog';
import { UserList } from '@/components/UserList';

export default function Home() {
  return (
    <main className="p-24 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">Candidate Challenge</h1>
      {/* FE-P4: UserList will be wrapped in <Suspense> with a loading fallback */}
      <UsersDialog>
        <UserList />
      </UsersDialog>
    </main>
  );
}
