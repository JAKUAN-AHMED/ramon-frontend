'use client';

import PizzaCard from '../components/PizzaCard';
import { PIZZAS } from '@/app/models/pizzas';

export default function MenuPage() {
  return (
    <div className="section" style={{ paddingTop: 120 }}>
      <h2 className="section-title" style={{ marginBottom: 32 }}>
        Full <em>Menu</em>
      </h2>
      <div className="pizza-grid">
        {PIZZAS.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}
