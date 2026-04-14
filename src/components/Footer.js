import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
export default function Footer() {
    // Smooth scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // Get the current year dynamically so you never have to update it manually
    const currentYear = new Date().getFullYear();
    // Extract links into an array for cleaner rendering
    const navLinks = ['Home', 'About', 'Projects', 'Contact'];
    return (_jsx("footer", { className: "relative z-20 border-t border-white/10 py-8", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4", children: [_jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "text-center md:text-left", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 text-gray-400 md:justify-start", children: [_jsx("span", { children: "Made with" }), _jsx(motion.div, { animate: {
                                            scale: [1, 1.2, 1],
                                            filter: [
                                                "drop-shadow(0 0 0px #f87171)",
                                                "drop-shadow(0 0 8px #f87171)",
                                                "drop-shadow(0 0 0px #f87171)"
                                            ]
                                        }, transition: {
                                            duration: 0.8,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }, "aria-hidden": "true" // Hides decorative animation from screen readers
                                        , children: _jsx(Heart, { className: "h-5 w-5 fill-red-400 text-red-400" }) }), _jsx("span", { children: "by Yuvarajapathi V" })] }), _jsxs("p", { className: "mt-1 text-sm text-gray-500", children: ["\u00A9 ", currentYear, ". All rights reserved."] })] }), _jsx("nav", { "aria-label": "Footer Navigation", children: _jsx(motion.ul, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, delay: 0.2 }, viewport: { once: true }, className: "flex gap-6", children: navLinks.map((link) => (_jsx("li", { children: _jsx(motion.a, { href: `#${link.toLowerCase()}`, className: "rounded-sm text-sm font-medium text-gray-400 transition-colors hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900", whileHover: { y: -4 }, whileTap: { scale: 0.95 }, children: link }) }, link))) }) }), _jsx(motion.button, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, delay: 0.4 }, viewport: { once: true }, whileHover: { scale: 1.1, y: -5 }, whileTap: { scale: 0.9 }, onClick: scrollToTop, className: "glass hover:glass-strong rounded-lg border border-white/10 p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900", "aria-label": "Scroll to top of page", children: _jsx(ArrowUp, { className: "h-5 w-5 text-cyan-400" }) })] }) }) }));
}
