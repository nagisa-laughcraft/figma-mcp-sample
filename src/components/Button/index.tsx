import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * ボタンのバリアント
   */
  variant?: 'danger';
}

export const Button = ({
  children,
  className,
  variant = 'danger',
  ...props
}: ButtonProps) => {
  // 基本スタイル
  const baseStyles = [
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'px-3',
    'py-3',
    'rounded-lg',
    'font-normal',
    'text-base',
    'font-inter',
  ].join(' ');

  // バリアント別のスタイル
  const variantStyles = {
    danger: [
      'bg-danger-primary',
      'text-danger-text',
      'border',
      'border-danger-hover',
      'hover:bg-danger-hover',
      'transition-colors',
      'duration-200',
    ].join(' '),
  };

  return (
    <button
      className={twMerge(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}; 