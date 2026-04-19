import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UserListError } from '@/components/UserListError';
import { UserListSkeleton } from '@/components/UserListSkeleton';

// UserList itself uses React's use() hook which requires the React canary/experimental
// build. These tests cover the two pure presentational components that represent
// the error and loading states — the actual outcomes a user would see.

describe('UserListError', () => {
  it('renders the error message', () => {
    render(<UserListError />);
    expect(screen.getByText(/failed to load users/i)).toBeInTheDocument();
  });
});

describe('UserListSkeleton', () => {
  it('renders 5 skeleton placeholder items', () => {
    render(<UserListSkeleton />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(5);
  });
});
