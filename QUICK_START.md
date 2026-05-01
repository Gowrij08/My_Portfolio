# Quick Start Guide

## 5-Minute Setup

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Start Development Server
```bash
npm start
```
Open browser: `http://localhost:4200`

### 3. Customize Content

#### Update Name & Title
File: `src/app/components/hero/hero.component.ts`
```typescript
heroTitle = "Your Title Here";
heroSubtitle = "Your Tagline";
```

#### Add Your Projects
File: `src/app/components/projects/projects.component.ts`
```typescript
projects: Project[] = [
  {
    title: 'Your Project',
    description: 'What it does',
    technologies: ['Tech1', 'Tech2'],
    impact: 'The results'
  }
];
```

#### Update Skills
File: `src/app/components/skills/skills.component.ts`
```typescript
skills: Skill[] = [
  {
    category: 'Your Category',
    items: ['Skill1', 'Skill2']
  }
];
```

#### Update Contact Info
File: `src/app/components/contact/contact.component.ts`
Update email and social links

---

## Deploy to GitHub Pages (3 Steps)

### Step 1: Create GitHub Repo
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy
```bash
npm run deploy
```

### Step 3: Enable GitHub Pages
1. Go: Settings → Pages
2. Select: `gh-pages` branch
3. Save

✅ **Done!** Your portfolio is live at: `https://YOUR_USERNAME.github.io/portfolio/`

---

## Customization Checklist

- [ ] Update hero title and subtitle
- [ ] Add your projects (2-3 minimum)
- [ ] Customize skills section
- [ ] Update experience/education
- [ ] Add email and social links
- [ ] Upload your resume PDF
- [ ] Update meta description in `index.html`
- [ ] Add profile picture (optional)
- [ ] Test on mobile
- [ ] Deploy to GitHub Pages

---

## Tips for Maximum Impact

### 💼 For Job Seekers
- Highlight specific achievements with numbers
- Show technical depth with project details
- Link to live demos when possible
- Keep it professional and clean

### 💰 For Freelancers
- Show case studies and client results
- Highlight past project outcomes
- Include testimonials section
- Add pricing/availability information
- Make contact form prominent

### 🎯 General Tips
- Update regularly with new projects
- Optimize for mobile (check responsiveness)
- Use high-quality project descriptions
- Include working links to projects
- Write compelling project summaries
- Use consistent branding/colors

---

## Next Steps

1. ✅ Customize all content
2. ✅ Test on different devices
3. ✅ Deploy to GitHub Pages
4. ✅ Share with recruiters/clients
5. ✅ Continue updating with new projects

**🚀 You're all set! Good luck with your job search and freelance journey!**
