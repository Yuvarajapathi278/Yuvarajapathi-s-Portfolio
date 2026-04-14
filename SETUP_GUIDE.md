# Portfolio Setup Guide - Getting Started

## 🎉 Welcome to Your Modern Portfolio!

Your Yuvarajapathi portfolio has been completely modernized with a professional React-based setup. Follow these steps to get it running locally.

---

## 📋 Prerequisites

Before starting, make sure you have installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (recommended for version control)

Check versions:
```powershell
node --version
npm --version
```

---

## 🚀 Quick Start

### Step 1: Install Dependencies

```powershell
cd "e:\Java pgm\Java_pgm_VS\Yuvarajapathi V - Portfolio"
npm install
```

This will install all required packages including:
- React, TypeScript, Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

⏱️ **First time installation takes 2-3 minutes**

### Step 2: Start Development Server

```powershell
npm run dev
```

✅ Your portfolio will automatically open at `http://localhost:5173`

Automatic refresh on file changes - edit and see updates instantly!

### Step 3: View Your Portfolio

Open browser and wait for the site to load. You should see:
- ✅ Animated Hero section with 3D computer
- ✅ Particle background effects
- ✅ Modern navigation bar
- ✅ All sections properly styled

---

## 📝 Customization Guide

### 1. Update Personal Information

**Hero Section** (`src/components/Hero.tsx`):
```tsx
// Change the title
<h1>Hi, I'm Yuvarajapathi V</h1>

// Update rotating titles
const titles = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Java Developer']
```

**About Section** (`src/components/About.tsx`):
```tsx
// Update biography, education, and achievements
```

**Contact Info** (`src/components/Contact.tsx`):
```tsx
// Update email, phone, and links
const contacts = [
  { value: 'your-email@example.com', link: 'mailto:...' },
  // ...
]
```

### 2. Add Your Resume

1. Place your resume PDF in the project root folder with name: `YUVARAJAPATHI_V_Resume.pdf`
2. The download button in navbar will automatically link to it

### 3. Update Social Links

In `Hero.tsx` and `Footer.tsx`, update these links:
```tsx
// GitHub
href="https://github.com/YOUR-USERNAME"

// LinkedIn
href="https://www.linkedin.com/in/YOUR-PROFILE"

// LeetCode
href="https://leetcode.com/YOUR-PROFILE"
```

### 4. Customize Projects

Edit `src/components/Projects.tsx`:
```tsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    demo: 'https://project-url.com',
    github: 'https://github.com/project',
    type: '3D Mockup',
  },
  // Add more projects...
]
```

### 5. Update Skills

In `src/components/Experience.tsx`, modify the skills grid:
```tsx
{
  category: 'Languages',
  skills: ['Java', 'JavaScript', 'TypeScript', 'Python'],
}
```

### 6. Change Colors & Theme

Edit `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      'primary': '#0f172a',      // Background
      'secondary': '#1e293b',    // Cards
      'accent': '#3b82f6',       // Buttons
      'neon': '#00ffff',         // Highlights
    }
  }
}
```

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              - Navigation + theme toggle
│   ├── Hero.tsx                - Intro section + 3D computer
│   ├── About.tsx               - About me + statistics
│   ├── Projects.tsx            - Featured projects grid
│   ├── ProjectMockup.tsx       - 3D project visualizations
│   ├── Experience.tsx          - Timeline + skills
│   ├── Contact.tsx             - Contact form
│   ├── Footer.tsx              - Footer section
│   ├── Computer3D.tsx          - 3D computer animation
│   └── ParticleBackground.tsx  - Animated particles
├── App.tsx                     - Main component
├── main.tsx                    - Entry point
├── index.css                   - Global styles
├── package.json                - Dependencies
├── vite.config.ts              - Vite config
├── tailwind.config.ts          - Tailwind config
└── tsconfig.json               - TypeScript config
```

---

## 🔧 Available Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## 🎨 Design Features

### Modern Aesthetic
- Dark theme with cyan/blue accents
- Smooth animations and transitions
- Responsive at all breakpoints
- Glowing effects and gradients

### Performance
- Optimized with Vite
- Fast build times
- Lazy loading of components
- Efficient animations

### Accessibility
- Semantic HTML
- Proper heading hierarchy
- ARIA labels
- Keyboard navigable

---

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Two column layout
- **Desktop**: > 1024px - Full layout with 3D elements

Test responsiveness:
```powershell
npm run dev
# Press F12 in browser, toggle device toolbar
```

---

## 🌐 Deployment

When ready for production:

### Build
```powershell
npm run build
```

This creates an optimized `dist` folder with your static files.

### Deploy to:

**Vercel (Recommended)**:
1. Push code to GitHub
2. Connect to Vercel
3. Deploy automatically

**Netlify**:
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `npm run build`
3. Drag & drop `dist` folder to Netlify

**GitHub Pages**:
1. Update `vite.config.ts` with your repo name
2. Run: `npm run build`
3. Deploy `dist` folder

---

## ⚙️ Troubleshooting

### Q: Port 5173 already in use?
```powershell
npm run dev -- --port 3000
```

### Q: Dependencies won't install?
```powershell
npm cache clean --force
rm node_modules package-lock.json
npm install
```

### Q: Animations not smooth?
- Check browser console for errors
- Update GPU drivers
- Try a different browser

### Q: TypeScript errors?
```powershell
npm run lint
```

---

## 📚 Learning Resources

- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Vite**: https://vitejs.dev

---

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Customize content (About, Projects, Contact)
4. ✅ Add your resume PDF
5. ✅ Update social links
6. ✅ Test on mobile
7. ✅ Build and deploy

---

## 💡 Tips

- **Component Updates**: Most changes don't require restart (hot reload)
- **Styling**: Use Tailwind classes - no need to touch CSS
- **Icons**: Browse Lucide React icons: https://lucide.dev
- **Colors**: Use Tailwind's built-in color palette or custom colors

---

## 📞 Support

If you encounter issues:

1. Check the error message (important!)
2. Review the component that's erroring
3. Check [Vite docs](https://vitejs.dev)
4. Check [React docs](https://react.dev)
5. Check [Tailwind docs](https://tailwindcss.com)

---

## 🎉 You're All Set!

Your modern portfolio is ready. Make it uniquely yours and showcase your work! 

Good luck! 🚀

---

**Made with ❤️ - Happy Coding!**
