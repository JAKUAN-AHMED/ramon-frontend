'use client';

import { useApp } from './controllers/AppContext';
import Navbar from './views/components/Navbar';
import Footer from './views/components/Footer';
import SignInModal from './views/components/SignInModal';
import HomePage from './views/pages/HomePage';
import MenuPage from './views/pages/MenuPage';
import ProductPage from './views/pages/ProductPage';
import CartPage from './views/pages/CartPage';
import CollectionPage from './views/pages/CollectionPage';
import TrackOrderPage from './views/pages/TrackOrderPage';
import DashboardPage from './views/pages/DashboardPage';

export default function App() {
  const { page } = useApp();

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'menu':
        return <MenuPage />;
      case 'product':
        return <ProductPage />;
      case 'cart':
        return <CartPage />;
      case 'collection':
        return <CollectionPage />;
      case 'track':
        return <TrackOrderPage />;
      case 'dashboard':
        return <DashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Navbar />
      {renderPage()}
      <Footer />
      <SignInModal />
    </div>
  );
}
