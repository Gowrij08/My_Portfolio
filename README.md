# Portfolio Project

A modern, professional portfolio website built with Angular to showcase Gen AI, Data Science, and Data Analysis expertise.

## Features

✨ **Modern Design**
- Clean, professional interface with gradient themes
- Fully responsive (mobile, tablet, desktop)
- Smooth scrolling and animations
- Dark-ready component structure

🎯 **Key Sections**
- **Hero**: Eye-catching landing section with call-to-action
- **Projects**: Showcase featured work with impact metrics
- **Skills**: Organized technical expertise by category
- **Experience**: Professional timeline with achievements
- **Contact**: Easy-to-use contact form with social links
- **Resume**: Direct PDF download and background summary

🚀 **Performance**
- Built with Angular 17 (latest)
- Optimized for GitHub Pages deployment
- Fast load times with optimized assets
- Production-ready build configuration

## Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Angular CLI

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open in browser
http://localhost:4200
```

### Build & Deploy to GitHub Pages

```bash
# Build for production
npm run build-gh-pages

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero/
│   │   │   ├── projects/
│   │   │   ├── skills/
│   │   │   ├── resume/
│   │   │   ├── contact/
│   │   │   ├── navigation/
│   │   │   └── footer/
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── styles/
│   │   └── globals.scss
│   ├── assets/
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
└── tsconfig.json
```

## Customization

### Update Personal Information

1. **Navigation** - Edit name in `navigation.component.ts`
2. **Hero Section** - Modify title and description in `hero.component.ts`
3. **Projects** - Update project details in `projects.component.ts`
4. **Skills** - Customize skill categories in `skills.component.ts`
5. **Resume** - Update experience in `resume.component.ts`
6. **Contact** - Update email and social links in `contact.component.ts`

### Colors & Styling

Primary gradient: `#667eea` to `#764ba2`

Modify in `app.component.scss` and component styles for a custom color scheme.

### Add Your Resume PDF

1. Place your resume PDF in `src/assets/`
2. Update the download link in `resume.component.ts`

## GitHub Pages Setup

### Step 1: Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to repository Settings
2. Navigate to Pages
3. Select `gh-pages` branch as source
4. Save

### Step 3: Deploy
```bash
npm run deploy
```

Your portfolio will be available at: `https://yourusername.github.io/portfolio/`

## Deployment Options

### GitHub Pages (Free, Recommended)
```bash
npm run deploy
```

### Vercel (Free with auto-deployment)
1. Connect your GitHub repo
2. Vercel auto-detects Angular
3. Deploy with one click

### Netlify (Free with continuous deployment)
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist/portfolio`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize Images**: Compress project images
2. **Lazy Loading**: Configure lazy loading for images
3. **Minification**: Already configured in production build
4. **CDN**: Use Vercel/Netlify for automatic CDN caching

## SEO Optimization

- ✅ Meta tags configured
- ✅ Semantic HTML structure
- ✅ Mobile responsive
- ✅ Fast load times
- 📝 Add: Schema markup, sitemap.xml, robots.txt

## Troubleshooting

### Build Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### GitHub Pages Not Updating
1. Verify `base-href` in `angular.json`
2. Clear browser cache
3. Check GitHub Actions for build errors

## Future Enhancements

- [ ] Add blog section with markdown posts
- [ ] Implement dark mode toggle
- [ ] Add testimonials/reviews section
- [ ] Connect backend for contact form
- [ ] Add analytics tracking
- [ ] Implement search functionality
- [ ] Create admin dashboard for updates

## License

© 2024 Gowri Jothiasu. All rights reserved.

## Support

For questions or issues, please create an issue on the GitHub repository.

---

**Last Updated**: April 30, 2024
