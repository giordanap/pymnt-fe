export function UserListSkeleton() {
  return (
    <ul className="divide-y divide-gray-100">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className="py-3 first:pt-0 last:pb-0 space-y-1 animate-pulse">
          <div className="h-3.5 w-36 rounded bg-gray-200" />
          <div className="h-3 w-48 rounded bg-gray-100" />
          <div className="h-3 w-32 rounded bg-gray-100" />
          <div className="h-3 w-28 rounded bg-gray-100" />
        </li>
      ))}
    </ul>
  );
}
