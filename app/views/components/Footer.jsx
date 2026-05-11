'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>🍕 RAMON</h3>
          <p>
            Authentic Italian pizza, legendary boss cards, and uncompromising quality since 1943.
          </p>
        </div>
        <div className="footer-col">
          <h4>Menu</h4>
          <a>Signature Pizzas</a>
          <a>Collections</a>
          <a>Custom Orders</a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a>Contact Us</a>
          <a>Delivery Info</a>
          <a>FAQ</a>
        </div>
        <div className="footer-col">
          <h4>Follow</h4>
          <div className="footer-social">
            <a href="#">f</a>
            <a href="#">𝕏</a>
            <a href="#">📷</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Ramon Pizzeria. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a>Privacy</a>
          <a>Terms</a>
          <a>Cookies</a>
        </div>
      </div>
    </footer>
  );
}
