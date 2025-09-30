typescript
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignIn from 'src/app/auth/signin/page';

import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@supabase/auth-helpers-nextjs', () => ({
  createClientComponentClient: jest.fn(),
}));

describe('SignIn Page', () => {
  const mockPush = jest.fn();
  const mockSignInWithPassword = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    (createClientComponentClient as jest.Mock).mockReturnValue({
      auth: {
        signInWithPassword: mockSignInWithPassword,
      },
    });
  });

  it('should_redirect_to_dashboard_on_successful_sign_in', async () => {
    mockSignInWithPassword.mockResolvedValue({ error: null });

    render(<SignIn />);

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'user@example.com');
    await userEvent.type(screen.getByPlaceholderText(/password/i), 'password123');

    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockSignInWithPassword).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should_call_supabase_with_provided_credentials_on_submit', async () => {
    mockSignInWithPassword.mockResolvedValue({ error: null });

    render(<SignIn />);

    const email = 'john.doe@example.com';
    const password = 'superSecret!';
    await userEvent.type(screen.getByPlaceholderText(/email/i), email);
    await userEvent.type(screen.getByPlaceholderText(/password/i), password);

    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockSignInWithPassword).toHaveBeenCalledWith({ email, password });
    });
  });

  it('should_prevent_default_page_reload_on_form_submit', async () => {
    mockSignInWithPassword.mockResolvedValue({ error: null });

    const { container } = render(<SignIn />);
    const form = container.querySelector('form');
    expect(form).toBeTruthy();

    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    form!.dispatchEvent(submitEvent);

    expect(submitEvent.defaultPrevented).toBe(true);
  });

  it('should_render_error_message_and_avoid_navigation_on_invalid_credentials', async () => {
    const errMessage = 'Invalid credentials';
    mockSignInWithPassword.mockResolvedValue({ error: { message: errMessage } });

    render(<SignIn />);

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'bad@example.com');
    await userEvent.type(screen.getByPlaceholderText(/password/i), 'wrongpass');

    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText(errMessage)).toBeInTheDocument();
    expect(mockPush).not.toHaveBeenCalled();
  });

  it('should_call_auth_with_empty_fields_and_surface_backend_error', async () => {
    const errMessage = 'Missing email or password';
    mockSignInWithPassword.mockResolvedValue({ error: { message: errMessage } });

    render(<SignIn />);

    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockSignInWithPassword).toHaveBeenCalledWith({ email: '', password: '' });
    });

    expect(await screen.findByText(errMessage)).toBeInTheDocument();
    expect(mockPush).not.toHaveBeenCalled();
  });

  it('should_not_navigate_and_bubble_error_if_auth_call_throws', async () => {
    mockSignInWithPassword.mockImplementation(() => {
      throw new Error('Network error');
    });

    render(<SignIn />);

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'user@example.com');
    await userEvent.type(screen.getByPlaceholderText(/password/i), 'password123');

    await expect(userEvent.click(screen.getByRole('button', { name: /login/i }))).rejects.toThrow('Network error');
    expect(mockPush).not.toHaveBeenCalled();
  });
})