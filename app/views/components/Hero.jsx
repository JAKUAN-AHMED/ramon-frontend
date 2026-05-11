'use client';

import { useApp } from '@/app/controllers/AppContext';

export default function Hero() {
  const { setPage } = useApp();

  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-badge">✦ Est. 1943 · Sicilian Tradition ✦</div>
          <h2>Rule Your Hunger</h2>
          <span className="hero-accent">Like a Boss.</span>
          <p>Authentic Italian pizza crafted with Sicilian obsession.</p>
          <p>
            <strong>Every order unlocks a legendary boss card.</strong>
          </p>
          <p>Collect. Order. Dominate.</p>
          <div className="hero-buttons">
            <button className="btn-gold" onClick={() => setPage('menu')}>
              Order Now →
            </button>
            <button className="btn-outline" onClick={() => setPage('collection')}>
              Explore Collection
            </button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <h3>60</h3>
              <span>Boss Cards</span>
            </div>
            <div className="hero-stat">
              <h3>4</h3>
              <span>Rarity Tiers</span>
            </div>
            <div className="hero-stat">
              <h3>25</h3>
              <span>Min Delivery</span>
            </div>
            <div className="hero-stat">
              <h3>★4.9</h3>
              <span>Rating</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-cards">
            {['Salvatore Riina', 'Michael Corleone', 'Vito Corleone'].map(
              (name, i) => (
                <div className="hero-card" key={i}>
                  <div className="hero-card-icon">🎩</div>
                  <h4>{name}</h4>
                  <span className="card-tier">Il Capo dei Capi</span>
                  <div className="hero-card-stats">
                    <span>10</span>
                    <span>10</span>
                    <span>10</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
