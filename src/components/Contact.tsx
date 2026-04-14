import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // ✅ Production-grade: Opens Gmail compose with pre-filled data
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    const subject = `New message from ${formData.name || 'Portfolio Visitor'}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    
    // Gmail compose URL with pre-filled data
    const mailtoUrl = `https://mail.google.com/mail/?view=cm&to=yuvarajapathi255@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.open(mailtoUrl, '_blank')
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

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
  ]

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
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              I'm always open to new opportunities and interesting projects. Feel free to reach out!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info — FROM JS FILE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold">Get in Touch</h3>

              <div className="space-y-6">
                {contacts.map((contact) => {
                  const Icon = contact.icon
                  return (
                    <a
                      key={contact.label}
                      href={contact.link}
                      className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                    >
                      <div className="p-3 rounded-lg glass hover:glass-strong border border-white/18 transition-all duration-300">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-200">{contact.label}</p>
                        <p className="text-gray-400">{contact.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              <div className="pt-8 border-t border-white/20">
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg glass hover:glass-strong border border-white/18 hover:scale-110 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form — PRODUCTION Gmail Integration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 glass border border-white/15 focus:ring-2 focus:ring-cyan-400/30 rounded-lg focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 glass border border-white/15 focus:ring-2 focus:ring-cyan-400/30 rounded-lg focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 glass border border-white/15 focus:ring-2 focus:ring-cyan-400/30 rounded-lg focus:outline-none text-white placeholder-gray-500 resize-none transition-all duration-300"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-white/20 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 glass"
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}