'use client';

import { useApp } from '@/app/controllers/AppContext';

export default function PizzaCard({ pizza }) {
  const { setPage, setSelectedPizza, addToCart } = useApp();

  const handleCardClick = () => {
    setSelectedPizza(pizza);
    setPage('product');
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    addToCart({
      ...pizza,
      size: 'Medium — Base',
      crust: 'Classic Thin',
    });
  };

  return (
    <div className="pizza-card" onClick={handleCardClick}>
      <div className="pizza-card-image">
        <img src={pizza.image} alt={pizza.name} />
        <span
          className="pizza-tier-badge"
          style={{ background: pizza.tierColor }}
        >
          {pizza.tier}
        </span>
      </div>
      <div className="pizza-card-body">
        <div className="pizza-card-header">
          <h3>{pizza.name}</h3>
          <span className="pizza-price">€{pizza.price.toFixed(2)}</span>
        </div>
        <p className="pizza-card-desc">{pizza.desc}</p>
        <div className="pizza-card-footer">
          <span className="pizza-time">🕐 {pizza.time}</span>
          <button className="btn-add" onClick={handleAddCart}>
            🛒 Add
          </button>
        </div>
        <div className="pizza-card-unlock">UNLOCKS {pizza.tier} CARD</div>
      </div>
    </div>
  );
}
