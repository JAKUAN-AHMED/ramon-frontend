'use client';

import { useApp } from '@/app/controllers/AppContext';

export default function Navbar() {
  const { setPage, page, setShowSignIn, user, cartCount } = useApp();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div
          className="nav-brand"
          onClick={() => setPage('home')}
          style={{ cursor: 'pointer' }}
        >
          <div className="nav-logo">🍕</div>
          <div className="nav-brand-text">
            <h1>RAMON</h1>
            <span>PIZZERIA</span>
          </div>
        </div>

        <div className="nav-links">
          <a
            onClick={() => setPage('home')}
            className={page === 'home' ? 'active' : ''}
          >
            Home
          </a>
          <a
            onClick={() => setPage('menu')}
            className={page === 'menu' ? 'active' : ''}
          >
            Menu
          </a>
          <a
            onClick={() => setPage('collection')}
            className={page === 'collection' ? 'active' : ''}
          >
            Collection
          </a>
        </div>

        <div className="nav-actions">
          <div
            className="nav-cart"
            onClick={() => setPage('cart')}
            style={{ cursor: 'pointer' }}
          >
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          {!user ? (
            <button className="btn-signin" onClick={() => setShowSignIn(true)}>
              Sign In
            </button>
          ) : (
            <button
              className="btn-signin"
              onClick={() => setPage('dashboard')}
            >
              {user.name?.split(' ')[0]}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
