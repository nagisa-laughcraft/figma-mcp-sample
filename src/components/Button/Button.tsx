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
  const baseStyles = 'flex items-center justify-center gap-2 px-3 py-3 rounded-lg font-normal text-base font-inter';
  const variantStyles = {
    danger: 'bg-[#EC221F] text-[#FEE9E7] border border-[#C00F0C] hover:bg-[#C00F0C]',
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