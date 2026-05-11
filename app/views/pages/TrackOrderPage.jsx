'use client';

export default function TrackOrderPage() {
  return (
    <div className="section" style={{ paddingTop: 120, maxWidth: 600 }}>
      <h2 className="section-title" style={{ marginBottom: 32 }}>
        Track Your <em>Order</em>
      </h2>

      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: 32,
          textAlign: 'center',
        }}
      >
        <input
          type="text"
          placeholder="Enter Order ID (e.g., ORD-2026-001)"
          style={{
            width: '100%',
            padding: '12px 16px',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border)',
            color: 'var(--text-primary)',
            marginBottom: 16,
            borderRadius: 4,
          }}
        />
        <button className="btn-gold">Track Order</button>

        <div
          style={{
            marginTop: 32,
            paddingTop: 32,
            borderTop: '1px solid var(--border)',
          }}
        >
          <h3 style={{ marginBottom: 16 }}>Order ORD-2026-001</h3>
          <div className="delivery-map" style={{ height: 200 }}>
            <div className="map-dot" style={{ top: '50%', left: '50%' }} />
            <div className="map-label">🔥 In Delivery · 12 mins away</div>
          </div>
          <p style={{ marginTop: 16, color: 'var(--text-secondary)' }}>
            Your pizza is on the way!
          </p>
        </div>
      </div>
    </div>
  );
}
