import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Code2, Terminal } from 'lucide-react';
const Lottie = lazy(() => import('lottie-react'));
import animationData from '../assets/hero-animation.json';
// ─── Typing Effect ────────────────────────────────────────────────────────────
const TypingRole = ({ roles }) => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const currentRole = roles[currentRoleIndex];
    useEffect(() => {
        let timer;
        if (isDeleting) {
            if (displayedText === '') {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
            else {
                timer = setTimeout(() => {
                    setDisplayedText(currentRole.slice(0, displayedText.length - 1));
                }, 30);
            }
        }
        else {
            if (displayedText === currentRole) {
                timer = setTimeout(() => setIsDeleting(true), 2500);
            }
            else {
                timer = setTimeout(() => {
                    setDisplayedText(currentRole.slice(0, displayedText.length + 1));
                }, 60);
            }
        }
        return () => clearTimeout(timer);
    }, [displayedText, currentRole, isDeleting, roles.length]);
    return (_jsxs("div", { className: "flex items-center font-mono text-xs sm:text-sm bg-slate-900/60 w-fit px-4 py-2 rounded-lg border border-slate-700/50 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.08)] max-w-full overflow-hidden", children: [_jsx("span", { className: "text-green-400 mr-1.5 font-semibold shrink-0", children: ">" }), _jsx("span", { className: "text-pink-500 mr-1.5 font-semibold shrink-0", children: "const" }), _jsx("span", { className: "text-blue-400 mr-1.5 shrink-0", children: "developer" }), _jsx("span", { className: "text-slate-400 mr-1.5 shrink-0", children: "=" }), _jsx("span", { className: "text-green-400 shrink-0", children: "\"" }), _jsxs("span", { className: "text-cyan-400 relative min-w-0", children: [displayedText, _jsx(motion.span, { animate: { opacity: [1, 0] }, transition: { duration: 0.8, repeat: Infinity, ease: 'linear' }, className: "absolute -right-[8px] top-[2px] w-[2px] h-[1.1em] bg-cyan-400" })] }), _jsx("span", { className: "text-green-400 ml-1 shrink-0", children: "\"" }), _jsx("span", { className: "text-slate-400 shrink-0", children: ";" })] }));
};
// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
    const roles = [
        'Native Android Engineer',
        'Java Full-Stack Developer',
        'Jetpack Compose Specialist',
        'React & TypeScript Builder',
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
        },
    };
    return (_jsxs("section", { id: "home", className: "min-h-screen flex items-center justify-center pt-20 relative overflow-hidden", children: [_jsxs("div", { className: "container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12", children: [_jsxs(motion.div, { className: "flex-1 flex flex-col gap-6 z-10 will-change-transform transform-gpu", variants: containerVariants, initial: "hidden", animate: "visible", children: [_jsx(motion.div, { variants: itemVariants, children: _jsxs("p", { className: "text-cyan-400 font-bold tracking-widest text-sm uppercase flex items-center gap-2", children: [_jsx("span", { className: "w-8 h-[2px] bg-cyan-400 rounded-full" }), "Welcome to my portfolio"] }) }), _jsx(motion.div, { variants: itemVariants, children: _jsxs("h1", { className: "text-5xl md:text-7xl font-bold leading-tight tracking-tight", children: ["Hi, I'm ", _jsx("br", {}), _jsx("span", { className: "bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent", children: "Yuvarajapathi V" })] }) }), _jsx(motion.div, { variants: itemVariants, className: "mt-1", children: _jsx(TypingRole, { roles: roles }) }), _jsx(motion.p, { variants: itemVariants, className: "text-slate-400 text-lg leading-relaxed max-w-xl mt-2", children: "I craft native Android apps in Kotlin, robust server side systems in Java, and sleek web experiences with React and TypeScript. Everything ships fast, clean, and battle tested." }), _jsx(motion.div, { variants: itemVariants, className: "flex gap-4 pt-4", children: [
                                    { href: 'https://github.com/Yuvarajapathi278', icon: _jsx(Github, { size: 22 }) },
                                    { href: 'https://www.linkedin.com/in/yuvarajapathi-v-6bbb0a1b9', icon: _jsx(Linkedin, { size: 22 }) },
                                    { href: 'https://www.hackerrank.com/profile/shanu13', icon: _jsx(Terminal, { size: 22 }) }, // ✅ Added
                                    { href: 'https://leetcode.com/u/Yuvileet/', icon: _jsx(Code2, { size: 22 }) },
                                ].map(({ href, icon }) => (_jsx("a", { href: href, target: "_blank", rel: "noopener noreferrer", className: "p-3 rounded-full bg-slate-900/50 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(6,182,212,0.2)] transition-all duration-300", children: icon }, href))) }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-wrap gap-4 pt-6", children: [_jsxs("a", { href: "#projects", className: "px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-white/20 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 text-white backdrop-blur-sm", children: ["View My Work", _jsx(ArrowRight, { size: 20 })] }), _jsx("a", { href: "#contact", className: "px-8 py-3 border border-white/30 text-cyan-400 hover:border-white/50 hover:bg-cyan-400/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm", children: "Let's Talk" })] })] }), _jsx(motion.div, { className: "flex-1 hidden lg:flex items-center justify-center will-change-transform transform-gpu", initial: { opacity: 0, scale: 0.9, x: 20 }, animate: { opacity: 1, scale: 1, x: 0 }, transition: { duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }, children: _jsx("div", { className: "w-full h-full max-w-lg aspect-square flex items-center justify-center", children: _jsx(Suspense, { fallback: _jsx("div", { className: "w-full h-full animate-pulse bg-slate-800/20 rounded-full" }), children: _jsx(Lottie, { animationData: animationData, loop: true, autoplay: true, style: { width: '100%', height: '100%', maxWidth: 500, maxHeight: 500 } }) }) }) })] }), _jsxs(motion.div, { animate: { y: [0, 10, 0] }, transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer", onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), children: [_jsx("p", { className: "text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3", children: "Scroll to explore" }), _jsx("div", { className: "w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center p-1", children: _jsx(motion.div, { animate: { y: [0, 8, 0], opacity: [1, 0.5, 1] }, transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }, className: "w-1 h-2 bg-cyan-400 rounded-full" }) })] })] }));
}
