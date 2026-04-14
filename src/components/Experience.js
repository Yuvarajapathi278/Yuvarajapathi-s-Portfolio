import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Zap, BookOpen, Briefcase, Trophy } from 'lucide-react';
const professionalExp = [
    {
        title: 'Software Developer',
        company: 'Damodara Smart Tech Pvt. Ltd.',
        period: 'June 2025 - Present',
        description: 'Developed the official company website (damodarastech.com) and engineered "Focus Grid", a curated, distraction-free video streaming app published on the Play Store. Worked extensively with Kotlin, React, Firebase, System Design, REST APIs, and AI models.',
        icon: Briefcase,
        color: 'from-green-500 to-emerald-500',
    },
    {
        title: 'Java Full Stack Trainee',
        company: 'Vision Tranz IT Solutions',
        period: 'July 2024 - Dec 2024',
        description: 'Completed comprehensive training in Java Full Stack development, focusing on backend architecture and Data Structures & Algorithms.',
        icon: BookOpen,
        color: 'from-purple-500 to-pink-500',
    }
];
const achievements = [
    {
        title: 'Problem Solving (Java) - Master',
        company: 'HackerRank Certification',
        description: 'Achieved a 5-star badge with Master rank by solving 50+ advanced Java problems, demonstrating deep proficiency in algorithmic logic.',
        icon: Trophy,
        color: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Competitive Programming',
        company: 'LeetCode & HackerRank',
        description: 'Solved 75+ LeetCode problems with a consistent ranking in global coding contests, focusing on optimization and execution speed.',
        icon: Zap,
        color: 'from-yellow-500 to-orange-500',
    }
];
const skills = [
    { name: 'Java', description: 'Proficient in Java, OOPs concepts, Collections Framework, and backend development.' },
    { name: 'Firebase', description: 'Backend-as-a-Service integration including authentication, Firestore, and cloud functions.' },
    { name: 'React', description: 'Building modern, responsive, and interactive frontend web applications.' },
    { name: 'Kotlin', description: 'Developing robust native Android applications with modern architecture.' },
    { name: 'APIs & System Design', description: 'Designing scalable architectures and building efficient RESTful APIs.' },
    { name: 'AI Models', description: 'Integrating and working with modern AI models for intelligent application features.' },
    { name: 'MySQL', description: 'Database design, complex SQL queries, and efficient database management.' },
    { name: 'HTML & CSS', description: 'Structuring and styling responsive web layouts.' }
];
export default function Experience() {
    return (_jsx("section", { id: "experience", className: "py-20 relative", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, className: "space-y-12", children: [_jsxs("div", { className: "text-center", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: ["Professional ", _jsx("span", { className: "text-cyan-400", children: "Experience" })] }), _jsx("div", { className: "w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" })] }), _jsxs("div", { className: "relative max-w-4xl mx-auto", children: [_jsx("div", { className: "hidden md:block absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 ml-[23px]" }), _jsx("div", { className: "space-y-12", children: professionalExp.map((exp, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: index * 0.2 }, className: "relative pl-0 md:pl-20", children: [_jsx("div", { className: "hidden md:flex absolute left-0 top-2 w-12 h-12 bg-[#0f172a] border-2 border-cyan-500/50 rounded-full items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.3)]", children: _jsx(exp.icon, { className: "w-6 h-6 text-cyan-400" }) }), _jsxs("div", { className: "glass border border-white/18 rounded-lg p-6 hover:glass-strong transition-all duration-300 hover:shadow-glass-lg", children: [_jsxs("div", { className: "flex justify-between items-start mb-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold text-white", children: exp.title }), _jsx("p", { className: "text-cyan-400 font-semibold", children: exp.company })] }), _jsx("span", { className: "text-sm font-mono text-white-500 bg-white/5 px-3 py-1 rounded-full border border-white/10", children: exp.period })] }), _jsx("p", { className: "text-gray-400 leading-relaxed", children: exp.description })] })] }, exp.title))) })] })] }), _jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, className: "mt-32 space-y-12", children: [_jsxs("div", { className: "text-center", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: ["Key ", _jsx("span", { className: "text-cyan-400", children: "Achievements" })] }), _jsx("div", { className: "w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: achievements.map((ach, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, whileHover: { y: -5 }, transition: { duration: 0.5, delay: index * 0.2 }, className: "glass border border-white/18 rounded-xl p-8 relative overflow-hidden group", children: [_jsx("div", { className: `absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${ach.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity` }), _jsx(ach.icon, { className: "w-12 h-12 text-cyan-400 mb-6" }), _jsx("h3", { className: "text-2xl font-bold mb-3", children: ach.title }), _jsx("p", { className: "text-cyan-500 font-medium mb-4", children: ach.company }), _jsx("p", { className: "text-gray-400 leading-relaxed", children: ach.description })] }, ach.title))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "mt-32", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsxs("h3", { className: "text-4xl md:text-5xl font-bold", children: ["Technical ", _jsx("span", { className: "text-cyan-400", children: "Toolkit" })] }), _jsx("div", { className: "w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-4" })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto", children: skills.map((skill, index) => (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, whileHover: { scale: 1.05 }, transition: { duration: 0.3, delay: index * 0.05 }, className: "glass border border-white/10 rounded-lg p-5 flex flex-col justify-between hover:border-cyan-500/50 transition-colors", children: [_jsx("h4", { className: "text-lg font-bold text-cyan-400 mb-2", children: skill.name }), _jsx("p", { className: "text-gray-500 text-xs leading-snug", children: skill.description })] }, skill.name))) }), _jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, className: "mt-12 glass border border-white/18 rounded-lg p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-lg font-bold text-white", children: "IDEs & Environment" }), _jsx("p", { className: "text-gray-400 text-sm", children: "Engineered for efficiency and clean architecture." })] }), _jsx("div", { className: "flex gap-3 flex-wrap justify-center", children: ['Cursor', 'VS Code', 'Android Studio', 'Eclipse'].map((tool) => (_jsx("span", { className: "px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-mono", children: tool }, tool))) })] })] })] }) }));
}
