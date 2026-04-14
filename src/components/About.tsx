import { motion } from 'framer-motion'
// Import your image
import yuviPic from '../assets/Yuvi_Pic.jpeg';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Kept exactly as your original so it aligns with the rest of the site */}
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
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              // Added flex centering to keep it nicely aligned in its column
              className="relative flex justify-center" 
            >
              {/* Added max-w-md so the image doesn't hijack the grid layout on massive screens */}
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl p-1.5 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                <div className="w-full h-full rounded-xl overflow-hidden relative group">
                  <img 
                    src={yuviPic} 
                    alt="Yuvarajapathi V - Software Engineer" 
                    // object-top ensures your face stays in frame if the crop adjusts
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle color grading overlay to make the image blend with your tech theme */}
                  <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">Architecting Digital Realities</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Synchronized! I'm Yuvarajapathi V, a Chennai-based Software Engineer who mastered the logic gates before writing the lines of code. Coming from an Electronics and Communication background at Saveetha Engineering College, I have a unique perspective on how technology functions from the silicon level up to the cloud. I traded the hardware lab for the development IDE to build the software that powers the modern world. Today, I'm fueled by caffeine and scalable systems, using my 5-star HackerRank Master rank to solve complex puzzles and ship high-performance applications. I'm deeply focused on building the next generation of enterprise software, integrating AI and cloud-native solutions to create digital experiences that are genuinely impactful....
                </p>
              </div>
            </motion.div>
          </div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold">
                Academic <span className="text-cyan-400">Background</span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-4" />
            </div>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="glass hover:glass-strong border border-white/10 rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] bg-slate-900/50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">Saveetha Engineering College</h4>
                  <span className="text-blue-400 font-semibold text-sm bg-blue-500/10 px-3 py-1 rounded-full">2020-24</span>
                </div>
                <p className="text-cyan-400 mb-2 font-medium">B.E. Electronics and Communication Engineering</p>
                <p className="text-gray-400"><span className="font-semibold text-gray-300">CGPA:</span> 8.21/10</p>
              </div>

              <div className="glass hover:glass-strong border border-white/10 rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] bg-slate-900/50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">Rathinagiri Bageerathan Matric Higher Secondary School</h4>
                  <span className="text-blue-400 font-semibold text-sm bg-blue-500/10 px-3 py-1 rounded-full">2019-20</span>
                </div>
                <p className="text-cyan-400 mb-2 font-medium">Higher Secondary (12th Grade)</p>
                <p className="text-gray-400"><span className="font-semibold text-gray-300">Percentage:</span> 71.5%</p>
              </div>

              <div className="glass hover:glass-strong border border-white/10 rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] bg-slate-900/50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">Rathinagiri Bageerathan Matric Higher Secondary School</h4>
                  <span className="text-blue-400 font-semibold text-sm bg-blue-500/10 px-3 py-1 rounded-full">2017-18</span>
                </div>
                <p className="text-cyan-400 mb-2 font-medium">Secondary Education (10th Grade)</p>
                <p className="text-gray-400"><span className="font-semibold text-gray-300">Percentage:</span> 80.6%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}