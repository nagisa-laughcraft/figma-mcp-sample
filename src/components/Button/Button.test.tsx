import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
  });

  it('applies danger variant styles', () => {
    render(<Button variant="danger">Danger Button</Button>);
    const button = screen.getByRole('button', { name: 'Danger Button' });
    expect(button).toHaveClass('bg-danger-primary');
    expect(button).toHaveClass('text-danger-text');
    expect(button).toHaveClass('border-danger-hover');
    expect(button).toHaveClass('hover:bg-danger-hover');
  });

  it('merges custom className with default styles', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole('button', { name: 'Custom Button' });
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('flex');
    expect(button).toHaveClass('items-center');
  });
}); 