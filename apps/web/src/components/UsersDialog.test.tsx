import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UsersDialog } from '@/components/UsersDialog';

// Mock the server action so tests never make real HTTP calls.
vi.mock('@/actions/users', () => ({
  getUsers: vi.fn(),
}));

// Mock UserList to avoid triggering the use() hook (React 18 CJS limitation in Vitest).
// UsersDialog tests are about dialog wiring, not UserList rendering.
vi.mock('@/components/UserList', () => ({
  UserList: () => <ul><li>mocked user</li></ul>,
}));

import { getUsers } from '@/actions/users';
const mockGetUsers = vi.mocked(getUsers);

describe('UsersDialog', () => {
  beforeEach(() => {
    mockGetUsers.mockClear();
    mockGetUsers.mockReturnValue(new Promise(() => {}));
  });

  it('renders the "View Users" trigger button', () => {
    render(<UsersDialog />);
    expect(screen.getByRole('button', { name: /view users/i })).toBeInTheDocument();
  });

  it('opens the dialog and shows the "Users" title on trigger click', async () => {
    const user = userEvent.setup();
    render(<UsersDialog />);

    await user.click(screen.getByRole('button', { name: /view users/i }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  it('calls getUsers when the dialog opens', async () => {
    const user = userEvent.setup();
    render(<UsersDialog />);

    await user.click(screen.getByRole('button', { name: /view users/i }));

    expect(mockGetUsers).toHaveBeenCalledTimes(1);
  });
});
