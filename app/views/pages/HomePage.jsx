'use client';

import Hero from '../components/Hero';
import PizzaCard from '../components/PizzaCard';
import { PIZZAS, RARITY_TIERS } from '@/app/models/pizzas';
import { useApp } from '@/app/controllers/AppContext';

export default function HomePage() {
  const { setPage } = useApp();

  return (
    <div>
      <Hero />

      {/* Collection Section */}
      <div className="section-dark">
        <div className="section">
          <div className="section-label">The Collection</div>
          <h2 className="section-title">
            Every Pizza Unlocks A <em>BOSS CARD</em>
          </h2>
          <div className="section-divider" />
          <p className="section-desc">
            Collect legendary Mafia boss, rare underboss, and capos. Each pizza you order unlocks a
            unique collectible. Build your family.
          </p>
          <div className="collection-grid">
            <div className="collection-card-preview">
              <div className="card-icon">🎩</div>
              <h4>Salvatore Riina</h4>
              <span
                style={{
                  color: 'var(--gold)',
                  fontSize: 12,
                  marginTop: 4,
                  fontFamily: 'var(--font-accent)',
                  letterSpacing: 2,
                }}
              >
                IL CAPO DEI CAPI
              </span>
              <div className="hero-card-stats" style={{ marginTop: 16 }}>
                <span>10</span>
                <span>10</span>
                <span>10</span>
              </div>
            </div>
            <div>
              <div className="collection-tiers">
                {RARITY_TIERS.map((t, i) => (
                  <div className="tier-item" key={i}>
                    <span className="tier-diamond">◆</span>
                    <span className="tier-badge" style={{ background: t.color }}>
                      {t.name}
                    </span>
                    <span className="tier-desc">{t.label}</span>
                  </div>
                ))}
              </div>
              <button
                className="btn-gold"
                style={{ marginTop: 32, letterSpacing: 3 }}
                onClick={() => setPage('collection')}
              >
                START COLLECTING NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pizza Section */}
      <div className="section">
        <div className="section-label">The Family Menu</div>
        <h2 className="section-title">
          Signature <em>Pizzas</em>
        </h2>
        <div className="section-divider" />
        <div className="pizza-grid">
          {PIZZAS.slice(0, 3).map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
        <div className="carousel-dots">
          <div className="carousel-dot active" />
          <div className="carousel-dot active" />
          <div className="carousel-dot" />
          <div className="carousel-dot" />
        </div>
      </div>

      {/* How It Works */}
      <div className="section">
        <div className="section-label">Simple as Respect</div>
        <h2 className="section-title">
          How It <em>Works</em>
        </h2>
        <div className="section-divider" />
        <div className="how-grid">
          {[
            {
              icon: '🍕',
              title: 'Choose Your Pizza',
              desc: 'Browse our authentic Sicilian menu. Customize size, crust, and toppings.',
            },
            {
              icon: '📦',
              title: 'Place Your Order',
              desc: 'Secure checkout in seconds. Your order goes straight to the kitchen.',
            },
            {
              icon: '🃏',
              title: 'Unlock Your Boss Card',
              desc: 'Every pizza unlocks a powerful collectible. Build the most feared family.',
            },
          ].map((s, i) => (
            <div className="how-step" key={i}>
              <div className="how-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Section */}
      <div className="delivery-section">
        <div className="section-label">Delivery Network</div>
        <h3>
          We Rule the <em>City</em>
        </h3>
        <p>Live delivery zones. Every order tracked from wood-fired oven to your front door.</p>
        <div className="delivery-map">
          <div className="map-dot" style={{ top: '40%', left: '30%' }} />
          <div className="map-dot" style={{ top: '60%', left: '50%', animationDelay: '0.5s' }} />
          <div className="map-dot" style={{ top: '35%', left: '65%', animationDelay: '1s' }} />
          <div className="map-label">🔥 Golden Kitchen · LIVE</div>
        </div>
      </div>
    </div>
  );
}
