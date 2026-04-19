'use client';

export function ViewUsersButton() {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      onClick={() => {
        // FE-P2: will open the Radix UI Dialog modal
      }}
    >
      View Users
    </button>
  );
}
