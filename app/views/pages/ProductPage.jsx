'use client';

import { useState } from 'react';
import { useApp } from '@/app/controllers/AppContext';
import { SIZES, CRUSTS } from '@/app/models/pizzas';

export default function ProductPage() {
  const { selectedPizza, setPage, addToCart } = useApp();
  const [size, setSize] = useState('Medium — Base');
  const [crust, setCrust] = useState('Classic Thin');
  const [qty, setQty] = useState(1);

  if (!selectedPizza) {
    return <div style={{ padding: '100px 40px', textAlign: 'center' }}>No pizza selected</div>;
  }

  const sizeObj = SIZES.find((s) => s.label === size);
  const finalPrice = selectedPizza.price + (sizeObj?.price || 0);

  const handleAddCart = () => {
    addToCart(
      {
        ...selectedPizza,
        size,
        crust,
        price: finalPrice,
      },
      qty
    );
    alert('Added to cart!');
  };

  return (
    <div className="product-page">
      <button className="back-btn" onClick={() => setPage('menu')}>
        ← Back to Menu
      </button>

      <div className="product-layout">
        <div>
          <div className="product-image">
            <img src={selectedPizza.image} alt={selectedPizza.name} />
          </div>
        </div>

        <div>
          <span
            className="product-tier"
            style={{ background: selectedPizza.tierColor }}
          >
            {selectedPizza.tier}
          </span>
          <h1 className="product-title">{selectedPizza.name}</h1>
          <p className="product-subtitle">{selectedPizza.subtitle}</p>
          <p className="product-desc">{selectedPizza.desc}</p>

          <div className="product-tags">
            {selectedPizza.ingredients.map((ing, i) => (
              <div className="product-tag" key={i}>
                {ing}
              </div>
            ))}
          </div>

          <div>
            <h3 className="product-option-title">Size</h3>
            <div className="product-options">
              {SIZES.map((s) => (
                <button
                  key={s.label}
                  className={`product-opt ${size === s.label ? 'active' : ''}`}
                  onClick={() => setSize(s.label)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="product-option-title">Crust</h3>
            <div className="product-options">
              {CRUSTS.map((c) => (
                <button
                  key={c}
                  className={`product-opt ${crust === c ? 'active' : ''}`}
                  onClick={() => setCrust(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="order-sidebar" style={{ marginTop: 32 }}>
            <div className="unlock-card">
              <div className="unlock-label">Unlocks</div>
              <div className="unlock-icon">🎩</div>
              <h4>{selectedPizza.card.name}</h4>
              <div className="unlock-tier">{selectedPizza.card.title}</div>
              <div className="unlock-power">{selectedPizza.card.tier}</div>
            </div>

            <div className="sidebar-pricing">
              <div className="qty-control">
                <span className="qty-label">QUANTITY</span>
                <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>
                  −
                </button>
                <span className="qty-value">{qty}</span>
                <button className="qty-btn" onClick={() => setQty(qty + 1)}>
                  +
                </button>
              </div>

              <div className="price-row">
                <span>Subtotal</span>
                <span>€{(finalPrice * qty).toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Delivery</span>
                <span>€3.99</span>
              </div>
              <div className="price-row total">
                <span>TOTAL</span>
                <span>€{(finalPrice * qty + 3.99).toFixed(2)}</span>
              </div>

              <p className="estimated">Estimated: {selectedPizza.time}</p>

              <button className="btn-add-cart" onClick={handleAddCart}>
                ADD TO CART
              </button>
              <button className="btn-checkout-outline">CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
