import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { NewsletterForm } from '.';

describe('NewsletterForm', () => {
  it('renders email input', () => {
    render(<NewsletterForm />);
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument();
  });

  it('handles email input change', () => {
    render(<NewsletterForm />);
    const input = screen.getByPlaceholderText('you@example.com') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(input.value).toBe('test@example.com');
  });

  it('calls onSubmit with email when form is submitted', () => {
    const onSubmit = vi.fn();
    render(<NewsletterForm onSubmit={onSubmit} />);
    
    const input = screen.getByPlaceholderText('you@example.com');
    const form = input.closest('form')!;
    
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.submit(form);
    
    expect(onSubmit).toHaveBeenCalledWith('test@example.com');
  });
}); 