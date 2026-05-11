'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [page, setPage] = useState('home');
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showBossCard, setShowBossCard] = useState(false);
  const [unlockedCard, setUnlockedCard] = useState(null);

  const addToCart = (pizza, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === pizza.id && i.size === pizza.size && i.crust === pizza.crust
      );
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { ...pizza, qty }];
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQty = (index, qty) => {
    if (qty < 1) return removeFromCart(index);
    setCart((prev) => prev.map((item, i) => (i === index ? { ...item, qty } : item)));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    cartTotal,
    cartCount,
    user,
    setUser,
    showSignIn,
    setShowSignIn,
    page,
    setPage,
    selectedPizza,
    setSelectedPizza,
    showBossCard,
    setShowBossCard,
    unlockedCard,
    setUnlockedCard,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
