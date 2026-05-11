'use client';

import { useState } from 'react';
import { useApp } from '@/app/controllers/AppContext';

export default function SignInModal() {
  const { showSignIn, setShowSignIn, setUser } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({
        name: 'John Corleone',
        email,
      });
      setShowSignIn(false);
      setEmail('');
      setPassword('');
    }
  };

  if (!showSignIn) return null;

  return (
    <div className="modal-overlay" onClick={() => setShowSignIn(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={() => setShowSignIn(false)}
        >
          ✕
        </button>
        <h2>Welcome to the Family</h2>
        <p>Sign in to your account</p>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-gold">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
