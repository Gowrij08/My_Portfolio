# Deployment Guide

## Deploy Your Portfolio to GitHub Pages

### Prerequisites
✅ GitHub account  
✅ Portfolio project locally  
✅ Git installed  

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio` (or your preferred name)
3. Description: "Professional Gen AI & Data Science Portfolio"
4. Public repository
5. Click "Create repository"

### Step 2: Initialize Git & Push Code

```bash
# Navigate to portfolio folder
cd portfolio

# Initialize git
git init
git add .
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch if needed and push
git branch -M main
git push -u origin main
```

### Step 3: Install & Configure Dependencies

```bash
# Install GitHub Pages deployment package
npm install --save-dev gh-pages
```

Update `package.json`:
```json
{
  "scripts": {
    "build-gh-pages": "ng build --configuration production --base-href '/portfolio/'",
    "deploy": "npm run build-gh-pages && gh-pages -d dist/portfolio"
  }
}
```

### Step 4: Build & Deploy

```bash
# Build for production and deploy
npm run deploy

# This will:
# 1. Build the Angular app for production
# 2. Create dist/portfolio folder
# 3. Push to gh-pages branch on GitHub
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` / `root`
5. Save

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

---

## Alternative: Deploy to Vercel

### Step 1: Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Select your portfolio repository

### Step 2: Configure

- Framework: Angular
- Build command: `ng build --configuration production`
- Output directory: `dist/portfolio`

### Step 3: Deploy
Click "Deploy" - Vercel will automatically build and deploy!

Your portfolio will be at: `https://portfolio-username.vercel.app`

---

## Alternative: Deploy to Netlify

### Step 1: Connect Repository
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your portfolio repository

### Step 2: Configure

- Build command: `npm run build`
- Publish directory: `dist/portfolio`

### Step 3: Deploy
Click "Deploy site" - Netlify handles the rest!

---

## Post-Deployment Checklist

- [ ] Portfolio accessible at your domain
- [ ] All pages load correctly
- [ ] Responsive design works on mobile
- [ ] Contact form works
- [ ] Links are functional
- [ ] Images load properly
- [ ] SEO meta tags present
- [ ] Performance is good (check Lighthouse)

## Troubleshooting

### 404 Errors on GitHub Pages
- Verify `--base-href '/portfolio/'` in build command
- Clear browser cache
- Wait 5-10 minutes for GitHub to update

### Images Not Loading
- Ensure images are in `src/assets/`
- Check image paths use relative URLs
- Rebuild and redeploy

### Form Submissions Not Working
- GitHub Pages cannot process form submissions
- Use third-party service: Formspree, Netlify Forms, etc.
- Or deploy to Vercel/Netlify instead

---

## Domain Setup (Optional)

### Add Custom Domain

**GitHub Pages:**
1. Settings → Pages → Custom domain
2. Enter your domain
3. Update DNS records (check GitHub instructions)

**Vercel/Netlify:**
1. Settings → Domain
2. Enter your domain
3. Update DNS records (provided by platform)

---

**✅ Congratulations! Your portfolio is live!**
