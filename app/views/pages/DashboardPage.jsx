'use client';

import { useApp } from '@/app/controllers/AppContext';
import { USER_DATA } from '@/app/models/pizzas';

export default function DashboardPage() {
  const { user, setUser } = useApp();

  if (!user) {
    return (
      <div style={{ padding: '100px 40px', textAlign: 'center' }}>
        <p>Please sign in to view your dashboard</p>
      </div>
    );
  }

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">
        Welcome <span>back, {user.name?.split(' ')[0]}</span>
      </h2>
      <p className="dashboard-subtitle">{user.email}</p>

      <div className="dash-stats">
        <div className="dash-stat">
          <div className="dash-stat-icon">📦</div>
          <h3>{USER_DATA.orders.length}</h3>
          <span>Orders</span>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-icon">🃏</div>
          <h3>{USER_DATA.collection.filter((c) => c.unlocked).length}</h3>
          <span>Cards Unlocked</span>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-icon">💰</div>
          <h3>€{USER_DATA.orders.reduce((sum, o) => sum + o.price, 0).toFixed(2)}</h3>
          <span>Total Spent</span>
        </div>
      </div>

      <div className="dash-section">
        <div className="dash-section-header">
          <h3>Recent Orders</h3>
          <button className="btn-small">View All</button>
        </div>
        {USER_DATA.orders.map((order) => (
          <div className="order-row" key={order.id}>
            <div className="order-info">
              <h4>{order.name}</h4>
              <span>
                {order.id} • {order.date}
              </span>
            </div>
            <span>{order.status}</span>
            <span>€{order.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="dash-section">
        <div className="dash-section-header">
          <h3>Card Collection</h3>
          <button className="btn-small">Manage</button>
        </div>
        {USER_DATA.collection.map((card, i) => (
          <div className="order-row" key={i}>
            <div className="order-info">
              <h4>{card.name}</h4>
              <span>{card.tier}</span>
            </div>
            <span>{card.unlocked ? '✓ Unlocked' : 'Locked'}</span>
          </div>
        ))}
      </div>

      <button
        className="btn-outline"
        onClick={handleLogout}
        style={{ marginTop: 32, width: '100%' }}
      >
        Sign Out
      </button>
    </div>
  );
}
