# RAMON Architecture Documentation

## Overview

RAMON is built using the **MVC (Model-View-Controller)** architecture pattern with Next.js 14 and React 18. This structure ensures clean separation of concerns, maintainability, and scalability.

## Directory Structure

```
ramon/
├── app/
│   ├── models/                 # Models layer - Data & Business Logic
│   │   └── pizzas.js          # Pizza data, constants, utility functions
│   │
│   ├── controllers/           # Controllers layer - State & Logic
│   │   └── AppContext.jsx     # Global state management (React Context)
│   │
│   ├── views/                 # Views layer - React Components
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── PizzaCard.jsx
│   │   │   ├── SignInModal.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── pages/            # Page components (full page views)
│   │       ├── HomePage.jsx
│   │       ├── MenuPage.jsx
│   │       ├── ProductPage.jsx
│   │       ├── CartPage.jsx
│   │       ├── CollectionPage.jsx
│   │       ├── TrackOrderPage.jsx
│   │       └── DashboardPage.jsx
│   │
│   ├── styles/               # Global styles
│   │   └── globals.css       # CSS variables, component styles
│   │
│   ├── layout.jsx            # Root layout wrapper
│   └── page.jsx              # Main app component with routing
│
├── public/                   # Static assets
├── package.json             # Dependencies
├── next.config.js           # Next.js configuration
├── jsconfig.json            # JavaScript/TypeScript config
├── vercel.json              # Vercel deployment config
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── README.md                # Project overview
├── ARCHITECTURE.md          # This file
└── DEPLOYMENT.md            # Deployment guide
```

## MVC Pattern Breakdown

### 1. Models (`app/models/`)

**Purpose**: Data structures and business logic

**Components**:
- `pizzas.js`:
  - `PIZZAS`: Array of pizza objects with all product data
  - `RARITY_TIERS`: Card rarity system definition
  - `SIZES`: Pizza size options with pricing
  - `CRUSTS`: Available crust types
  - `USER_DATA`: Sample user data
  - Utility functions:
    - `getPizzaById(id)`: Retrieve pizza by ID
    - `calculatePrice(pizza, size, crust)`: Calculate final price

**Key Features**:
- No React dependencies
- Pure JavaScript/data
- Reusable across backend if needed
- Single source of truth for constants

### 2. Controllers (`app/controllers/`)

**Purpose**: State management and business logic orchestration

**Components**:
- `AppContext.jsx`:
  - **State variables**:
    - `cart`: Shopping cart items
    - `user`: Current user
    - `showSignIn`: Modal visibility
    - `page`: Current page (home, menu, cart, etc.)
    - `selectedPizza`: Viewed product
    - `showBossCard`: Card reveal animation
    - `unlockedCard`: Revealed card data
  
  - **Actions**:
    - `addToCart(pizza, qty)`: Add items to cart
    - `removeFromCart(index)`: Remove by index
    - `updateQty(index, qty)`: Modify quantity
    - `clearCart()`: Empty cart

  - **Exports**:
    - `AppProvider`: Context provider component
    - `useApp()`: Hook to access context

**Key Features**:
- Centralized global state
- No prop drilling
- Easy to extend with new actions
- Could migrate to Redux/Zustand if needed

### 3. Views (`app/views/`)

#### Components (`views/components/`)

Reusable, composable UI elements:

- **Navbar.jsx**: 
  - Fixed header with navigation
  - Cart count badge
  - Sign-in button
  - Page routing

- **Hero.jsx**:
  - Landing section with call-to-action
  - Hero card stack animation
  - Statistics display

- **PizzaCard.jsx**:
  - Product card component
  - Image, price, description
  - Add to cart functionality
  - Reusable across pages

- **SignInModal.jsx**:
  - Authentication modal
  - Email/password form
  - User session creation

- **Footer.jsx**:
  - Page footer
  - Links and social media
  - Company info

#### Pages (`views/pages/`)

Full-page views combining components:

- **HomePage.jsx**: 
  - Hero + collection + menu sections
  - Landing page experience

- **MenuPage.jsx**:
  - Full pizza menu grid
  - Filter by rarity
  - PizzaCard grid

- **ProductPage.jsx**:
  - Single pizza detail view
  - Size/crust customization
  - Card unlock preview
  - Order sidebar

- **CartPage.jsx**:
  - Shopping cart view
  - Item management
  - Order summary
  - Checkout flow

- **CollectionPage.jsx**:
  - Boss card collection gallery
  - Rarity tier information
  - Unlock requirements

- **TrackOrderPage.jsx**:
  - Order tracking interface
  - Delivery status
  - Order lookup

- **DashboardPage.jsx**:
  - User profile page
  - Order history
  - Card collection
  - User statistics

### 4. Styles (`app/styles/`)

- **globals.css**:
  - CSS variables for theming
  - Component-specific styles
  - Animations
  - Responsive breakpoints

**CSS Variable System**:
```css
:root {
  --bg-primary: #0D0B08;        /* Main background */
  --gold: #D4A847;              /* Primary accent */
  --text-primary: #F5F0E8;      /* Main text */
  --font-display: 'Playfair Display';  /* Headlines */
  --font-body: 'Cormorant Garamond';   /* Body text */
}
```

## Data Flow

### 1. Component → State

```
User Action (click button)
    ↓
Component Handler
    ↓
useApp() Hook
    ↓
AppContext Action (e.g., addToCart)
    ↓
State Update
    ↓
Re-render Component
```

### 2. Model → View

```
PizzaCard Component
    ↓
Imports from app/models/pizzas.js
    ↓
Destructures PIZZAS array
    ↓
Renders pizza data
```

### 3. Page Routing

```
Page stored in useApp() context: page = "home"
    ↓
Main app/page.jsx checks page value
    ↓
Conditional render appropriate Page component
    ↓
User clicks navigation link
    ↓
setPage() updates context
    ↓
App re-renders with new page
```

## State Management

### Current Implementation: React Context

```jsx
// Using state
const { cart, user, page } = useApp();

// Updating state
const { addToCart, setPage } = useApp();
addToCart(pizzaObject);
setPage("cart");
```

### Future Scaling: Redux/Zustand

If the app grows, migrate to Redux:

```javascript
// Example future structure
// store/pizzaSlice.js
// store/cartSlice.js
// store/userSlice.js
// Then use: dispatch(addToCart(item))
```

## Component Composition

### Example: ProductPage Component Tree

```
ProductPage
├── Header
│   └── BackButton
├── ProductImage
├── ProductInfo
│   ├── Title
│   ├── Description
│   ├── Tags
│   └── Options (Size/Crust)
└── OrderSidebar
    ├── UnlockCard
    │   └── CardPreview
    ├── PricingSection
    │   ├── PriceBreakdown
    │   └── QtyControl
    └── ActionButtons
        ├── AddToCart
        └── Checkout
```

## Styling Strategy

### Class Naming Convention

```
.section-name { }           /* Main sections */
.component-name { }         /* Components */
.component-name-element { } /* Sub-elements */
.component-name.active { }  /* States */
```

### CSS Organization

1. **Variables** - Theme colors and fonts
2. **Global** - Body, resets, base styles
3. **Components** - Organized by section
4. **Animations** - Keyframes
5. **Responsive** - Media queries

## Performance Considerations

### Optimizations Made

1. **CSS Variables**: Single point of change for theming
2. **Minimal JavaScript**: Most styling with CSS
3. **CSS Grid/Flexbox**: Efficient layouts
4. **Image Optimization**: Lazy loading ready
5. **No Unnecessary Dependencies**: ~5kb core

### Future Optimizations

```javascript
// Image optimization
import Image from 'next/image';
<Image src={url} width={600} height={400} />

// Dynamic imports for code splitting
const ProductPage = dynamic(() => import('./ProductPage'), {
  loading: () => <p>Loading...</p>
});

// Memoization for expensive components
const PizzaCard = React.memo(function PizzaCard({ pizza }) {
  // Component
});
```

## Error Handling

Currently handled at component level:

```jsx
if (!selectedPizza) {
  return <div>No pizza selected</div>;
}
```

### Future Enhancement

```jsx
// Create ErrorBoundary component
class ErrorBoundary extends React.Component {
  // Catch errors and display fallback UI
}
```

## Testing Strategy

### Unit Tests (Future)

```javascript
// models/pizzas.test.js
describe('calculatePrice', () => {
  it('should add size premium to base price', () => {
    const pizza = PIZZAS[0];
    const price = calculatePrice(pizza, 'Large', 'Classic Thin');
    expect(price).toBe(pizza.price + 3);
  });
});

// controllers/AppContext.test.js
describe('addToCart', () => {
  it('should add new pizza to cart', () => {
    // Test cart logic
  });
});
```

### Integration Tests (Future)

```javascript
// e2e/order-flow.test.js
describe('Complete Order Flow', () => {
  it('should add item and checkout', () => {
    // Test full user journey
  });
});
```

## Scalability Plan

### Phase 1 (Current)
- ✅ MVC architecture in place
- ✅ Context API for state
- ✅ Component library

### Phase 2 (Backend Integration)
- Add Express.js backend
- Connect to MongoDB for orders
- API routes in Next.js `/api`

### Phase 3 (Authentication)
- Move auth to backend (JWT)
- Implement proper user sessions
- Secure endpoints

### Phase 4 (Advanced Features)
- Payment processing (Stripe)
- Real-time order tracking
- Admin dashboard
- Analytics

## Development Guidelines

### Adding a New Feature

1. **Model**: Add data structure in `models/`
2. **Controller**: Add state/actions in `AppContext.jsx`
3. **View**: Create component in `views/components/` or `views/pages/`
4. **Style**: Add CSS to `globals.css`
5. **Route**: Add page type to `page.jsx` if full page

### Code Quality Rules

- Keep components under 300 lines
- One responsibility per component
- Use descriptive variable names
- No console.logs in production
- CSS classes organized by component
- Reuse existing components when possible

## File Naming Conventions

- **Components**: PascalCase (e.g., `PizzaCard.jsx`)
- **Models**: camelCase (e.g., `pizzas.js`)
- **CSS**: camelCase in HTML, kebab-case in CSS
- **Exports**: Default for components, named for utilities

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Context API](https://react.dev/reference/react/useContext)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [MVC Pattern](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

---

This architecture ensures clean, maintainable, and scalable code as the project grows.
