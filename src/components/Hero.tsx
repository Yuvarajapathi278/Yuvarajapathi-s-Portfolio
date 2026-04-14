import { useEffect, useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Code2, Terminal } from 'lucide-react'

const Lottie = lazy(() => import('lottie-react'))
import animationData from '../assets/hero-animation.json'

// ─── Typing Effect ────────────────────────────────────────────────────────────
const TypingRole = ({ roles }: { roles: string[] }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const currentRole = roles[currentRoleIndex]

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (isDeleting) {
      if (displayedText === '') {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      } else {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1))
        }, 30)
      }
    } else {
      if (displayedText === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), 2500)
      } else {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        }, 60)
      }
    }

    return () => clearTimeout(timer)
  }, [displayedText, currentRole, isDeleting, roles.length])

  return (
    <div className="flex items-center font-mono text-xs sm:text-sm bg-slate-900/60 w-fit px-4 py-2 rounded-lg border border-slate-700/50 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.08)] max-w-full overflow-hidden">
      <span className="text-green-400 mr-1.5 font-semibold shrink-0">&gt;</span>
      <span className="text-pink-500 mr-1.5 font-semibold shrink-0">const</span>
      <span className="text-blue-400 mr-1.5 shrink-0">developer</span>
      <span className="text-slate-400 mr-1.5 shrink-0">=</span>
      <span className="text-green-400 shrink-0">"</span>
      <span className="text-cyan-400 relative min-w-0">
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-[8px] top-[2px] w-[2px] h-[1.1em] bg-cyan-400"
        />
      </span>
      <span className="text-green-400 ml-1 shrink-0">"</span>
      <span className="text-slate-400 shrink-0">;</span>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const roles = [
    'Native Android Engineer',
    'Java Full-Stack Developer',
    'Jetpack Compose Specialist',
    'React & TypeScript Builder',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* ── Left Content ── */}
        <motion.div
          className="flex-1 flex flex-col gap-6 z-10 will-change-transform transform-gpu"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag line */}
          <motion.div variants={itemVariants}>
            <p className="text-cyan-400 font-bold tracking-widest text-sm uppercase flex items-center gap-2">
              <span className="w-8 h-[2px] bg-cyan-400 rounded-full" />
              Welcome to my portfolio
            </p>
          </motion.div>

          {/* Name — JS-style gradient */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Yuvarajapathi V
              </span>
            </h1>
          </motion.div>

          {/* Compact JS-style typing line */}
          <motion.div variants={itemVariants} className="mt-1">
            <TypingRole roles={roles} />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg leading-relaxed max-w-xl mt-2"
          >
            I craft native Android apps in Kotlin, robust server side systems in Java, and sleek web
            experiences with React and TypeScript. Everything ships fast, clean, and battle tested.
          </motion.p>

          {/* ✅ Social Links — HackerRank added before LeetCode */}
          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            {[
              { href: 'https://github.com/Yuvarajapathi278', icon: <Github size={22} /> },
              { href: 'https://www.linkedin.com/in/yuvarajapathi-v-6bbb0a1b9', icon: <Linkedin size={22} /> },
              { href: 'https://www.hackerrank.com/profile/shanu13', icon: <Terminal size={22} /> }, // ✅ Added
              { href: 'https://leetcode.com/u/Yuvileet/', icon: <Code2 size={22} /> },
            ].map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-900/50 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(6,182,212,0.2)] transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-white/20 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 text-white backdrop-blur-sm"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/30 text-cyan-400 hover:border-white/50 hover:bg-cyan-400/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right Side — Lottie ── */}
        <motion.div
          className="flex-1 hidden lg:flex items-center justify-center will-change-transform transform-gpu"
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
        >
          <div className="w-full h-full max-w-lg aspect-square flex items-center justify-center">
            <Suspense
              fallback={<div className="w-full h-full animate-pulse bg-slate-800/20 rounded-full" />}
            >
              <Lottie
                animationData={animationData}
                loop
                autoplay
                style={{ width: '100%', height: '100%', maxWidth: 500, maxHeight: 500 }}
              />
            </Suspense>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3">
          Scroll to explore
        </p>
        <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}