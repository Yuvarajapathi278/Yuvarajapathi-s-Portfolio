# Yuvarajapathi V - Modern Portfolio

A professional, modern portfolio website built with cutting-edge web technologies. Features interactive 3D animations, responsive design, and a sleek dark theme with cyan-blue aesthetic.

## 🎨 Features

- **Modern Design**: Clean, professional aesthetic with gradient backgrounds and glowing effects
- **3D Animations**: Interactive 3D computer animation and project mockups
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for fast loading and smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and animated transitions
- **Contact Form**: Functional contact form for easy communication

## 🚀 Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, Canvas API
- **Icons**: Lucide React, React Icons
- **Router**: React Router DOM

## 📦 Installation

1. **Clone or download the project**

```bash
cd "Yuvarajapathi V - Portfolio"
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

The website will open at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx         - Navigation bar with theme toggle
│   ├── Hero.tsx           - Hero section with 3D computer
│   ├── About.tsx          - About section with statistics
│   ├── Projects.tsx       - Featured projects showcase
│   ├── ProjectMockup.tsx  - 3D project mockups
│   ├── Experience.tsx     - Experience & achievements timeline
│   ├── Contact.tsx        - Contact form
│   ├── Footer.tsx         - Footer section
│   ├── Computer3D.tsx     - 3D computer animation
│   └── ParticleBackground.tsx - Animated particle background
├── App.tsx                - Main application component
├── main.tsx               - Entry point
└── index.css              - Global styles
```

## 🎯 Sections

### Hero Section
- Animated text with rotating titles
- 3D computer animation
- Call-to-action buttons
- Social media links

### About Section
- Personal introduction
- Statistics showcase
- Competitive coding achievements
- Technical interests

### Projects Section
- 3D project mockups with animations
- Technology stack display
- Demo and GitHub links
- Hover effects and animations

### Experience Section
- Timeline view of achievements
- Competitive coding progress
- DSA course information
- Technical skills categorized

### Contact Section
- Contact information with icons
- Functional contact form
- Social media links
- Form validation

## 🎨 Design Features

- **Color Scheme**: Dark background (#0f172a) with cyan (#00ffff) and blue (#3b82f6) accents
- **Animations**: Smooth transitions, floating effects, and glow animations
- **Typography**: Clean, modern fonts with proper hierarchy
- **Responsiveness**: Mobile-first design approach
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🔧 Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📝 Customization

### Update Personal Information
Edit `src/components/Hero.tsx`, `src/components/About.tsx`, and `src/components/Contact.tsx` with your information.

### Modify Colors
Update the colors in `tailwind.config.ts`:
```ts
colors: {
  'primary': '#0f172a',
  'secondary': '#1e293b',
  'accent': '#3b82f6',
  'neon': '#00ffff',
  // ... add your colors
}
```

### Add More Projects
Add project objects to the `projects` array in `src/components/Projects.tsx`.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

Build for production:
```bash
npm run build
```

The `dist` folder contains the optimized production build ready to deploy on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

This portfolio is personal project. Feel free to use it as inspiration for your own portfolio!

## 🙏 Credits

- Design inspiration from modern web design trends
- Icons by Lucide React and React Icons
- Animations powered by Framer Motion
- Styling with Tailwind CSS

---

Made with 💙 by Yuvarajapathi V
