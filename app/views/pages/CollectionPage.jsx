'use client';

import { PIZZAS, RARITY_TIERS } from '@/app/models/pizzas';

export default function CollectionPage() {
  return (
    <div className="section" style={{ paddingTop: 120 }}>
      <h2 className="section-title" style={{ marginBottom: 40 }}>
        Boss Card <em>Collection</em>
      </h2>

      <div style={{ marginBottom: 60 }}>
        <h3 className="product-option-title">Rarity Tiers</h3>
        <div className="collection-tiers">
          {RARITY_TIERS.map((tier, i) => (
            <div className="tier-item" key={i}>
              <span className="tier-diamond">◆</span>
              <span className="tier-badge" style={{ background: tier.color }}>
                {tier.name}
              </span>
              <span className="tier-desc">{tier.label}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="product-option-title" style={{ marginBottom: 24 }}>
        Unlockable Cards
      </h3>
      <div className="pizza-grid">
        {PIZZAS.map((pizza) => (
          <div className="pizza-card" key={pizza.id}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <div className="hero-card-icon">🎩</div>
              <h4>{pizza.card.name}</h4>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                {pizza.card.title}
              </p>
              <span
                className="tier-badge"
                style={{ background: pizza.tierColor, marginTop: 12 }}
              >
                {pizza.card.tier}
              </span>
              <p style={{ fontSize: 13, marginTop: 12, color: 'var(--text-muted)' }}>
                Order {pizza.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
