'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  onSubmit?: (email: string) => void;
}

export const NewsletterForm = ({ onSubmit }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="flex-grow">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3 text-base text-[#1E1E1E] bg-white border border-[#D9D9D9] rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>
    </form>
  );
}; 