# RAMON - Premium Pizza & Boss Cards

A modern pizza ordering application with a unique collectible card system, built with Next.js and clean MVC architecture.

## Features

- 🍕 Browse and customize pizzas with multiple sizes and crusts
- 🃏 Collectible boss cards with rarity tiers (Mythic, Legendary, Gold)
- 🛒 Shopping cart with quantity management
- 👤 User authentication and dashboard
- 📦 Order tracking system
- 💻 Fully responsive design
- ✨ Smooth animations and premium UI

## Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Pure CSS with CSS variables
- **Architecture**: MVC Pattern
- **Deployment**: Vercel

## Project Structure

```
app/
├── models/           # Data models and business logic
│   └── pizzas.js
├── controllers/      # State management and logic
│   └── AppContext.jsx
├── views/            # React components
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── PizzaCard.jsx
│   │   ├── SignInModal.jsx
│   │   └── Footer.jsx
│   └── pages/
│       ├── HomePage.jsx
│       ├── MenuPage.jsx
│       ├── ProductPage.jsx
│       ├── CartPage.jsx
│       ├── CollectionPage.jsx
│       ├── TrackOrderPage.jsx
│       └── DashboardPage.jsx
├── styles/           # Global styles
│   └── globals.css
├── layout.jsx        # Root layout
└── page.jsx          # Main app component
```

## MVC Architecture

### Models (`app/models/`)
- Data structures for pizzas, users, orders
- Business logic for price calculations
- Constants and configuration

### Controllers (`app/controllers/`)
- `AppContext.jsx`: Global state management using React Context
- Handles cart operations, user authentication, page navigation

### Views (`app/views/`)
- **Components**: Reusable UI components (Navbar, Cards, Modals, etc.)
- **Pages**: Full page components representing different app sections

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ramon

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Quick Deploy

1. **Connect your GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Deploy via Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

### Environment Variables

Create `.env.local` file (for local development):
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

For production, set these in Vercel project settings.

### Vercel Configuration

The `vercel.json` file contains the deployment configuration:
```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

## Features Breakdown

### 1. Pizza Menu
- Browse 6 signature pizzas
- Filter by rarity tier
- Customize size and crust
- View detailed product information

### 2. Shopping Cart
- Add/remove items
- Adjust quantities
- View order summary
- Apply promo codes

### 3. Boss Card Collection
- Unlock cards with every order
- 4 rarity tiers with unique designs
- Collection gallery view
- Track unlocked vs locked cards

### 4. User Dashboard
- View order history
- Track collection progress
- User profile management
- Order tracking

### 5. Authentication
- Simple sign-in modal
- User session management
- Profile access

## Code Quality

### Clean Code Principles
- Single responsibility for components
- Reusable, composable architecture
- Clear separation of concerns (MVC)
- Minimal comments, self-documenting code
- Type-safe operations

### Performance Optimizations
- CSS variables for theme consistency
- Efficient state management with Context API
- Optimized images with Next.js Image component
- Responsive design with mobile-first approach

## Styling

All styles are in `app/styles/globals.css` using:
- CSS variables for theming
- Flexbox and CSS Grid
- CSS animations and transitions
- Responsive breakpoints

Color Scheme:
- Primary: Gold (#D4A847)
- Background: Dark brown (#0D0B08)
- Text: Light cream (#F5F0E8)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Payment integration (Stripe/PayPal)
- Real-time order tracking with maps
- User reviews and ratings
- Loyalty points system
- Admin dashboard
- API backend integration

## License

MIT License - feel free to use this project for your own purposes.

## Contact

For questions or feedback, please reach out to jakuanultimate777@gmail.com

---

Built with ❤️ using Next.js and modern web technologies
