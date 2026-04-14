import { motion } from 'framer-motion'
import { ExternalLink, Smartphone, Monitor, Shield, Users, PlaySquare } from 'lucide-react'

// 1. IMPORT YOUR ASSETS
import focusGridVideo from '../assets/Focus_grid_Ad.mp4';
import womenSafetyImage from '../assets/project_1.jpeg';

const projects = [
  {
    id: 1,
    title: 'Focus Grid',
    description: 'A production-grade Android streaming platform built for deep focus with age-gated content across 4+ categories, AI-driven video recommendations via OpenRouter, and an offline-first architecture using Room + Firebase sync. A Firestore-based distributed cache with TTL logic cut YouTube API quota usage by 40%+, while Jetpack Compose Strong Skipping Mode sustains 60 FPS on every tested device.',
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Firebase', 'REST APIs', 'AI Models'],
    demo: 'https://play.google.com/store/apps/details?id=com.focusgrid.app&hl=en_IN',
    github: '#',
    device: 'mobile',
    videoSrc: focusGridVideo,
    mockupIcon: PlaySquare,
    color: 'from-blue-300 to-indigo-200'
  },
  {
    id: 2,
    title: 'Women Safety Localisation',
    description: 'An advanced safety ecosystem leveraging iBeacon technology for precise indoor/outdoor localization. Integrates real-time Google Maps tracking and hardware sensors for instantaneous emergency broadcasting.',
    tech: ['Android Studio', 'iBeacon', 'Google Maps API', 'MySQL', 'Hardware Sensors'],
    demo: '#',
    github: '#',
    device: 'mobile',
    imageSrc: womenSafetyImage,
    mockupIcon: Shield,
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 3,
    title: 'Enterprise Employee Management',
    description: 'A robust, full-stack HR management system. Engineered with secure CRUD operations, complex relational data persistence, and a highly optimized Spring Boot backend for seamless organizational scaling.',
    tech: ['Spring Boot', 'Java', 'MySQL', 'REST API', 'HTML/CSS'],
    demo: '#',
    github: '#',
    device: 'desktop',
    mockupIcon: Users,
    color: 'from-emerald-500 to-teal-600'
  },
]

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
  }

  const RenderMockup = ({ project }: { project: any }) => {
    const Icon = project.mockupIcon;
    
    if (project.device === 'mobile') {
      return (
        <motion.div 
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          // Balanced size: Wide enough for media, compact enough for layout
          className="relative w-[250px] h-[500px] rounded-[2.5rem] border-[6px] border-slate-900 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-visible flex items-center justify-center will-change-transform transform-gpu"
        >
          {/* Hardware Side Buttons */}
          <div className="absolute top-28 -left-[8px] w-1 h-10 bg-slate-800 rounded-l-md"></div>
          <div className="absolute top-44 -left-[8px] w-1 h-10 bg-slate-800 rounded-l-md"></div>
          <div className="absolute top-32 -right-[8px] w-1 h-14 bg-slate-800 rounded-r-md"></div>

          {/* Glare effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 rounded-[2rem] pointer-events-none z-30"></div>

          {/* Single Dot Camera */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-40 flex items-center justify-center shadow-sm">
            <div className="w-1 h-1 rounded-full bg-blue-900/50"></div>
          </div>

          {/* Screen Content Container */}
          <div className="absolute inset-0 z-10 rounded-[2.1rem] overflow-hidden bg-black">
            {project.videoSrc && (
              <video 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
              >
                <source src={project.videoSrc} type="video/mp4" />
              </video>
            )}

            {project.imageSrc && (
              <img 
                src={project.imageSrc} 
                alt={project.title} 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
            )}

            {!project.videoSrc && !project.imageSrc && (
              <div className="flex-1 flex flex-col h-full relative z-10 bg-slate-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                <div className="flex-1 flex items-center justify-center relative z-10">
                  <Icon size={64} className="text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )
    }

    // Standard Desktop Browser Mockup
    return (
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[340px] h-[240px] rounded-xl border-[4px] border-slate-800 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col will-change-transform transform-gpu"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none z-30"></div>

        <div className="h-5 w-full bg-slate-800 flex items-center px-2.5 gap-1.5 border-b border-slate-700 relative z-20">
          <div className="w-2 h-2 rounded-full bg-rose-400"></div>
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
        </div>
        
        <div className="absolute inset-0 top-5 overflow-hidden flex flex-col bg-[#0f172a]">
          {project.id === 3 ? (
            <div className="flex flex-1 w-full h-full">
              <div className="w-14 bg-slate-900 border-r border-slate-800 flex flex-col items-center py-3 gap-3 z-10">
                <div className="w-7 h-7 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-1 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <Users size={14} />
                </div>
                <div className="w-6 h-1.5 rounded-full bg-slate-700"></div>
                <div className="w-6 h-1.5 rounded-full bg-slate-800"></div>
                <div className="w-6 h-1.5 rounded-full bg-slate-800"></div>
              </div>

              <div className="flex-1 flex flex-col p-3 z-10">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <div className="w-24 h-2.5 rounded-full bg-slate-300 mb-1.5"></div>
                    <div className="w-16 h-1.5 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="px-2 py-1 bg-emerald-500 rounded text-[7px] font-bold text-white uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-emerald-500/20">
                    <span>+</span> ADD EMP
                  </div>
                </div>

                <div className="flex-1 bg-slate-800/40 rounded-lg border border-slate-700 p-2.5 flex flex-col gap-2.5">
                  <div className="flex justify-between border-b border-slate-600 pb-1.5">
                    <div className="w-12 h-1 rounded-full bg-slate-500"></div>
                    <div className="w-16 h-1 rounded-full bg-slate-500"></div>
                    <div className="w-8 h-1 rounded-full bg-slate-500"></div>
                  </div>
                  
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex justify-between items-center py-1">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-slate-600 flex-shrink-0"></div>
                        <div className="w-20 h-1.5 rounded-full bg-slate-400"></div>
                      </div>
                      <div className="w-10 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
                      <div className="flex gap-1.5">
                        <div className="w-3.5 h-3.5 rounded bg-blue-500/30"></div>
                        <div className="w-3.5 h-3.5 rounded bg-rose-500/30"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-15`}></div>
              <div className="flex-1 flex items-center justify-center relative z-10">
                <Icon size={56} className="text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
              </div>
            </>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Container constrained to max-w-7xl so it doesn't span endlessly on ultra-wide monitors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Architecting solutions from scalable enterprise backends to distraction-free consumer applications.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
          </div>

          {/* GLOWING INSTRUCTION TEXT */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center text-cyan-400 text-xs sm:text-sm tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse pointer-events-none"
          >
            Hover or tap cards to reveal project details
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "200px" }}
            className="grid lg:grid-cols-3 gap-8 xl:gap-10"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                // Height refined to balance nicely with the scaled-down mockups
                className="group relative h-[540px]" 
              >
                <div className="absolute inset-0 bg-slate-800/40 bg-gradient-to-br from-slate-700/50 to-slate-800/80 rounded-3xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] flex items-center justify-center border border-white/10 backdrop-blur-sm">
                  
                  <div className="transition-all duration-500 group-hover:scale-95 group-hover:opacity-10 group-hover:blur-sm z-10">
                    <RenderMockup project={project} />
                  </div>

                  <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 translate-y-4 group-hover:translate-y-0 z-20">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {project.device === 'mobile' ? <Smartphone size={16} className="text-cyan-400"/> : <Monitor size={16} className="text-cyan-400"/>}
                        <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase">{project.device} App</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">{project.description}</p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-md text-xs lg:text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 relative z-30">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl text-sm font-bold transition-colors"
                        >
                          <ExternalLink size={18} />
                          App Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <a
              href="https://github.com/Yuvarajapathi278"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 rounded-full font-bold text-base transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
            >
              Explore Full Repository
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}