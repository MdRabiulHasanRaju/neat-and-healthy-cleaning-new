import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useToast } from '../../context/ToastContext.jsx';

// Inline newsletter signup used in the footer and blog sidebar.
export default function NewsletterForm({ compact = false }) {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.');
      return;
    }
    setError('');
    toast.success('You are subscribed! Check your inbox for a welcome email.');
    setEmail('');
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} noValidate className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          placeholder="Your email"
          aria-label="Email address"
          className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-gradient text-white shadow-glow"
        >
          <FiArrowRight />
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-2">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          placeholder="Enter your email"
          aria-label="Email address"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-primary-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow"
        >
          Subscribe
        </button>
      </div>
      {error && <p className="text-xs text-danger">{error}</p>}
    </form>
  );
}
