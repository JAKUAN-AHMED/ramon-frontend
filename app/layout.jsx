import './styles/globals.css';
import { AppProvider } from './controllers/AppContext';

export const metadata = {
  title: 'RAMON - Premium Pizza & Boss Cards',
  description: 'Authentic Italian pizza with legendary collectible boss cards',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
