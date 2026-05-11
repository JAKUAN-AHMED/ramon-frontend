'use client';

import { useState } from 'react';
import { useApp } from '@/app/controllers/AppContext';

export default function CartPage() {
  const { cart, cartTotal, removeFromCart, updateQty, setPage } = useApp();
  const [promo, setPromo] = useState('');

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h3>Your cart is empty</h3>
          <p>Start building your Mafia family with legendary pizza</p>
          <button className="btn-gold" onClick={() => setPage('menu')}>
            BROWSE MENU
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Order</h2>

      <div className="cart-layout">
        <div className="cart-left">
          <h3>Items</h3>
          <p>{cart.length} pizza(s) in cart</p>

          {cart.map((item, i) => (
            <div className="cart-item" key={i}>
              <div className="cart-item-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <span>
                  {item.size} • {item.crust}
                </span>
              </div>
              <div className="cart-item-price">€{(item.price * item.qty).toFixed(2)}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  className="qty-btn"
                  onClick={() => updateQty(i, item.qty - 1)}
                >
                  −
                </button>
                <span>{item.qty}</span>
                <button
                  className="qty-btn"
                  onClick={() => updateQty(i, item.qty + 1)}
                >
                  +
                </button>
              </div>
              <button className="cart-item-remove" onClick={() => removeFromCart(i)}>
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Summary</h3>

          <div className="price-row">
            <span>Subtotal</span>
            <span>€{cartTotal.toFixed(2)}</span>
          </div>
          <div className="price-row">
            <span>Tax</span>
            <span>€{(cartTotal * 0.1).toFixed(2)}</span>
          </div>
          <div className="price-row">
            <span>Delivery</span>
            <span>€3.99</span>
          </div>

          <div className="promo-row">
            <input
              className="promo-input"
              placeholder="Promo code"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />
            <button className="btn-promo">Apply</button>
          </div>

          <div className="price-row total">
            <span>TOTAL</span>
            <span>€{(cartTotal + cartTotal * 0.1 + 3.99).toFixed(2)}</span>
          </div>

          <button className="btn-add-cart" onClick={() => setPage('checkout')}>
            CHECKOUT
          </button>

          <div className="cart-unlock-card">
            <div className="unlock-label">🎁 Bonus Unlocks</div>
            <p>{cart.length} boss card(s) pending reveal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
