import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    // ✅ Production-grade: Opens Gmail compose with pre-filled data
    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `New message from ${formData.name || 'Portfolio Visitor'}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        // Gmail compose URL with pre-filled data
        const mailtoUrl = `https://mail.google.com/mail/?view=cm&to=yuvarajapathi255@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, '_blank');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };
    const contacts = [
        {
            icon: Mail,
            label: 'Email',
            value: 'yuvarajapathi255@gmail.com',
            link: 'mailto:yuvarajapathi255@gmail.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: 'Call Me',
            link: 'tel:+919787143956',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Chennai, Tamil Nadu',
            link: '#',
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: 'Message Me',
            link: 'https://wa.me/919787143956',
        },
    ];
    const socials = [
        {
            icon: Github,
            label: 'GitHub',
            link: 'https://github.com/Yuvarajapathi278',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/yuvarajapathi-v-6bbb0a1b9',
        },
    ];
    return (_jsx("section", { id: "contact", className: "py-20 relative", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, className: "space-y-12", children: [_jsxs("div", { className: "text-center", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: ["Let's ", _jsx("span", { className: "text-cyan-400", children: "Connect" })] }), _jsx("p", { className: "text-gray-400 text-lg max-w-2xl mx-auto mb-8", children: "I'm always open to new opportunities and interesting projects. Feel free to reach out!" }), _jsx("div", { className: "w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsx("h3", { className: "text-2xl font-bold", children: "Get in Touch" }), _jsx("div", { className: "space-y-6", children: contacts.map((contact) => {
                                            const Icon = contact.icon;
                                            return (_jsxs("a", { href: contact.link, className: "flex items-start gap-4 group hover:translate-x-2 transition-transform", children: [_jsx("div", { className: "p-3 rounded-lg glass hover:glass-strong border border-white/18 transition-all duration-300", children: _jsx(Icon, { className: "w-6 h-6 text-cyan-400" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-gray-200", children: contact.label }), _jsx("p", { className: "text-gray-400", children: contact.value })] })] }, contact.label));
                                        }) }), _jsxs("div", { className: "pt-8 border-t border-white/20", children: [_jsx("h4", { className: "font-bold mb-4", children: "Follow Me" }), _jsx("div", { className: "flex gap-4", children: socials.map((social) => {
                                                    const Icon = social.icon;
                                                    return (_jsx("a", { href: social.link, target: "_blank", rel: "noopener noreferrer", className: "p-3 rounded-lg glass hover:glass-strong border border-white/18 hover:scale-110 transition-all duration-300", "aria-label": social.label, children: _jsx(Icon, { className: "w-6 h-6 text-cyan-400" }) }, social.label));
                                                }) })] })] }), _jsx(motion.div, { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-gray-300 font-semibold mb-2", children: "Name" }), _jsx("input", { id: "name", name: "name", type: "text", required: true, value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), className: "w-full px-4 py-3 glass border border-white/15 focus:ring-2 focus:ring-cyan-400/30 rounded-lg focus:outline-none text-white placeholder-gray-500 transition-all duration-300", placeholder: "Your name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-gray-300 font-semibold mb-2", children: "Email" }), _jsx("input", { id: "email", name: "email", type: "email", required: true, value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), className: "w-full px-4 py-3 glass border border-white/15 focus:ring-2 focus:ring-cyan-400/30 rounded-lg focus:outline-none text-white placeholder-gray-500 transition-all duration-300", placeholder: "your@email.com" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-gray-300 font-semibold mb-2", children: "Message" }), _jsx("textarea", { id: "message", name: "message", required: true, value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), rows: 4, className: "w-full px-4 py-3 glass border border-white/15 focus:ring-2 focus:ring-cyan-400/30 rounded-lg focus:outline-none text-white placeholder-gray-500 resize-none transition-all duration-300", placeholder: "Your message here..." })] }), _jsxs(motion.button, { type: "submit", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "w-full px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-white/20 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 glass", children: ["Send Message", _jsx(Send, { size: 20 })] })] }) })] })] }) }) }));
}
