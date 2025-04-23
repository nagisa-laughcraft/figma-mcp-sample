import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
  });

  it('applies danger variant styles', () => {
    render(<Button variant="danger">Danger Button</Button>);
    const button = screen.getByRole('button', { name: 'Danger Button' });
    expect(button).toHaveClass('bg-[#EC221F]');
    expect(button).toHaveClass('text-[#FEE9E7]');
    expect(button).toHaveClass('border-[#C00F0C]');
  });

  it('merges custom className with default styles', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole('button', { name: 'Custom Button' });
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('flex');
    expect(button).toHaveClass('items-center');
  });
}); 