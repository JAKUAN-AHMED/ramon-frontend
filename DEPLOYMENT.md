# Deployment Guide - RAMON Pizza Application

This guide walks you through deploying the RAMON pizza application to Vercel.

## Prerequisites

Before deploying, ensure you have:
- A GitHub account (for Vercel integration)
- Git installed on your machine
- Access to your Vercel account (create one at vercel.com if needed)

## Step 1: Prepare Your Git Repository

```bash
# Navigate to project directory
cd path/to/ramon

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Complete MVC-structured pizza ordering app"

# Create a GitHub repository and add remote
# (Follow GitHub's instructions after creating a new repo)
git remote add origin https://github.com/your-username/ramon.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy to Vercel
vercel

# Follow the prompts:
# - Select "Yes" to create a new project
# - Choose project name: "ramon"
# - Select "Next.js" as the framework
# - Accept default settings
# - Wait for deployment to complete

# Get your deployment URL
vercel ls
```

### Option B: Using Vercel Dashboard (Easier)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Paste your GitHub repository URL: `https://github.com/your-username/ramon.git`
4. Click "Continue"
5. Configure project:
   - **Project Name**: ramon (or your preferred name)
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: ./ (current directory)
6. Click "Deploy"
7. Wait for deployment to complete (usually 2-5 minutes)

## Step 3: Verify Deployment

Once deployed:

1. **Check Deployment Status**
   - Visit your Vercel project dashboard
   - Look for the green checkmark next to your latest deployment

2. **Access Your Application**
   - Click the "Visit" button or use the URL provided
   - Your app will be live at: `https://ramon.vercel.app` (or custom domain)

3. **Test Key Features**
   - Browse the homepage and menu
   - Add items to cart
   - Open the sign-in modal
   - Visit different pages via navigation

## Step 4: Custom Domain (Optional)

To use a custom domain:

1. In Vercel Dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records with your domain provider following Vercel's instructions

## Step 5: Environment Variables (Optional)

If you add environment variables:

1. In Vercel Dashboard, go to "Settings" → "Environment Variables"
2. Add variables (e.g., API endpoints, keys)
3. Re-deploy: `vercel --prod`

## Troubleshooting

### Build Fails with Error

**Error**: `Failed to build project`

**Solution**:
```bash
# Check local build
npm run build

# Check for any missing dependencies
npm install

# Clear cache and rebuild
rm -rf .next
npm run build
```

### Styles Not Loading

**Error**: CSS/styles not appearing on deployed site

**Solution**:
- Ensure `globals.css` is imported in `app/layout.jsx`
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5 on Windows, Cmd+Shift+R on Mac)

### JavaScript Errors

**Error**: Console shows JavaScript errors

**Solution**:
```bash
# Check local environment
npm run dev

# Look for errors in terminal and fix
# Common issues:
# - Missing imports
# - Incorrect path aliases
# - Browser compatibility issues
```

## Performance Optimization

After deployment, optimize performance:

### 1. Image Optimization
The app uses external images from Unsplash. For production:
- Replace with locally hosted images in `public/` folder
- Update image paths in `app/models/pizzas.js`

### 2. Enable Caching Headers
Already configured in `vercel.json`

### 3. Monitor Performance
- Use Vercel Analytics (Settings → Analytics)
- Check Core Web Vitals
- Use PageSpeed Insights: https://pagespeed.web.dev

## Continuous Deployment

The app is now set up for continuous deployment:

```bash
# Every time you push to GitHub, Vercel automatically:
# 1. Builds the project
# 2. Runs tests (if any)
# 3. Deploys to production (if on main branch)

# To update production:
git add .
git commit -m "Update features or content"
git push origin main

# Vercel will auto-deploy within 2-5 minutes
```

## Rollback to Previous Version

If something breaks:

1. Go to Vercel Dashboard → Your Project → Deployments
2. Find the previous working deployment
3. Click the three dots menu
4. Select "Promote to Production"

## Security Checklist

- [ ] Remove any hardcoded secrets from code
- [ ] Use environment variables for sensitive data
- [ ] Enable "Protected Deployments" in Vercel settings (for team projects)
- [ ] Review `.gitignore` to ensure no sensitive files are committed
- [ ] Enable CORS headers if API calls are needed

## Monitoring & Support

### Vercel Support Features

- **Analytics**: Vercel Dashboard → Analytics
- **Logs**: Vercel Dashboard → Function Logs
- **Error Tracking**: Vercel Dashboard → Deployments → Error messages

### Keep Updated

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Redeploy to Vercel
vercel --prod
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test navigation between pages
- [ ] Test adding items to cart
- [ ] Test sign-in functionality
- [ ] Test on mobile devices
- [ ] Check performance metrics
- [ ] Verify custom domain (if used)
- [ ] Monitor error logs for issues

## Next Steps

1. **Add Backend Integration** (if needed)
   - Connect to a real backend API
   - Update API calls in controllers

2. **Add Payment Processing**
   - Integrate Stripe or PayPal
   - Handle order completion

3. **Database Integration**
   - Add user authentication with a backend
   - Store orders and collection data

4. **Email Notifications**
   - Send order confirmations
   - Newsletter integration

---

**Deployment is complete!** Your pizza app is now live on Vercel. 🎉

For more help, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
