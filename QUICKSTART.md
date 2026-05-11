# Quick Start Guide - RAMON Pizza App

Get the app running locally in 3 minutes!

## Prerequisites

Make sure you have:
- Node.js 18+ installed ([download](https://nodejs.org/))
- npm or yarn package manager
- Git installed

## Local Development (3 steps)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will open automatically or visit: **http://localhost:3000**

### 3. Start Building!
- Edit files in `app/` folder
- Browser auto-refreshes when you save
- Check console for any errors

---

## Project Tour

### Key Directories

```
app/
├── models/pizzas.js          ← Pizza data & logic
├── controllers/AppContext.jsx ← State management
├── views/components/         ← Reusable components
├── views/pages/             ← Full page views
└── styles/globals.css       ← All styles
```

### Important Files

- **app/page.jsx** - Main app router
- **app/layout.jsx** - Root layout wrapper
- **package.json** - Dependencies & scripts

---

## Common Tasks

### Add a New Pizza

Edit `app/models/pizzas.js`:
```javascript
{
  id: 7,
  name: "Your Pizza Name",
  price: 15.99,
  image: "https://images.unsplash.com/...",
  // ... other properties
}
```

### Add a New Page

1. Create component in `app/views/pages/NewPage.jsx`
2. Export default function
3. Use `useApp()` for state
4. Add case in `app/page.jsx`

### Change Colors

Edit `app/styles/globals.css`:
```css
:root {
  --gold: #YourColor;
  --bg-primary: #YourColor;
}
```

### Deploy to Vercel

1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed steps.

---

## Available Scripts

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Build for production
npm start        # Run production build locally
npm run lint     # Check code quality
```

---

## Project Structure at a Glance

```
Models (Data)
    ↓
Controllers (Logic)
    ↓
Views (UI Components)
    ↓
Styles (CSS)
```

---

## Testing Features Locally

### Homepage
- Navigate to "http://localhost:3000"
- See hero section and featured pizzas

### Browse Menu
- Click "Menu" in navbar
- See all 6 pizzas

### Add to Cart
- Click "Add" button on any pizza
- Check cart count badge

### Sign In
- Click "Sign In" button
- Email: any value
- Password: any value
- Click "Sign In"

### View Dashboard
- After signing in, click username
- See orders and cards

### Check Cart
- Click cart icon
- See items with prices

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Use different port
PORT=3001 npm run dev
```

### Dependency Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Loading
- Hard refresh: Ctrl+Shift+Delete
- Clear cache: Ctrl+F5
- Restart dev server

### Component Errors
- Check browser console (F12)
- Look for red error messages
- Check file imports

---

## Architecture Quick Reference

### Models
```javascript
// app/models/pizzas.js
export const PIZZAS = [...]
export function getPizzaById(id) { ... }
```

### Controllers
```javascript
// app/controllers/AppContext.jsx
export function useApp() { ... }
export function AppProvider() { ... }
```

### Views (Components)
```javascript
// app/views/components/PizzaCard.jsx
import { useApp } from '@/app/controllers/AppContext';
export default function PizzaCard({ pizza }) { ... }
```

### Views (Pages)
```javascript
// app/views/pages/MenuPage.jsx
export default function MenuPage() { ... }
```

---

## Next Steps

1. **Explore the code**: Look through `app/` folder
2. **Try modifications**: Change colors, add pizzas, edit text
3. **Build a feature**: Add a new page or component
4. **Deploy**: Follow [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## Documentation

- **Architecture**: See [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Deployment**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Full Readme**: See [README.md](./README.md)

---

## Getting Help

### Common Issues

**Q: How do I add a new page?**
A: Create file in `app/views/pages/`, export component, add to `app/page.jsx`

**Q: How do I change the theme colors?**
A: Edit CSS variables at top of `app/styles/globals.css`

**Q: How do I deploy?**
A: See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step guide

**Q: Where's the backend?**
A: Currently frontend-only. To add backend, create `/api` folder in `app/`

---

## File Quick Links

| File | Purpose |
|------|---------|
| `app/page.jsx` | Main router & page switcher |
| `app/layout.jsx` | Root layout with provider |
| `app/models/pizzas.js` | All pizza data |
| `app/controllers/AppContext.jsx` | Global state management |
| `app/styles/globals.css` | All styling |
| `package.json` | Dependencies |
| `next.config.js` | Next.js config |

---

**Happy building!** 🍕

For questions or issues, check the full documentation or start a new discussion.
