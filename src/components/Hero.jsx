import React, { useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Code2 } from 'lucide-react';

const OrbitingTech = ({ tech, index, baseRotation }) => {
  const angleStep = 360 / 7;
  const offset = index * angleStep;

  // Create motion values that update whenever baseRotation updates
  const rotation = useTransform(baseRotation, (r) => r + offset);
  const inverseRotation = useTransform(rotation, (r) => -r);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ rotate: rotation }}
    >
      <motion.div
        style={{ rotate: inverseRotation }}
        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 w-16 h-16 ${tech.bg} rounded-full border ${tech.border} flex items-center justify-center shadow-lg backdrop-blur-md`}
      >
        <span className={`text-xs font-bold ${tech.color}`}>{tech.text}</span>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  // Motion value for the rotation, allows high performance updates
  const baseRotation = useMotionValue(0);
  const [speed, setSpeed] = useState(6); // degrees per second

  // Update rotation on every frame
  useAnimationFrame((time, delta) => {
    // delta is time since last frame in ms
    // moveBy = speed (deg/s) * delta (s)
    const moveBy = (delta / 1000) * speed;
    baseRotation.set(baseRotation.get() + moveBy);
  });

  const handleSpin = () => {
    setSpeed(300); // Speed up
    setTimeout(() => {
      setSpeed(6); // Slow down after 2s
    }, 2000);
  };

  // Inverse rotation for the inner ring to spin opposite way
  const inverseBaseRotation = useTransform(baseRotation, (r) => -r);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium text-sm mb-6">
            Available for Work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="gradient-text">Sanidhya Choudhary</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            A passionate Full Stack Developer crafting beautiful, interactive, and functional web experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-slate-100 text-slate-900 font-bold hover:bg-white transition-colors flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              download="Sanidhya_Choudhary_Resume.pdf"
              className="px-8 py-3 rounded-full border border-slate-700 hover:border-slate-500 text-white font-medium transition-colors flex items-center gap-2 group"
            >
              Download Resume <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex gap-6 mt-12">
            {[
              { Icon: Github, href: "https://github.com/SunnyXilon" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/sanidhya-choudhary-385282251/" },
              { Icon: Mail, href: "mailto:sanidhya1124@gmail.com" }
            ].map(({ Icon, href }, index) => (
              <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center p-24"
        >
          {/* AI/Tech Visualization */}
          <div className="relative w-full max-w-sm aspect-square">
            {/* Spinning Rings */}
            <motion.div
              style={{ rotate: baseRotation }}
              className="absolute inset-0 rounded-full border border-blue-500/30 border-dashed"
            />
            <motion.div
              style={{ rotate: inverseBaseRotation }}
              className="absolute inset-8 rounded-full border border-emerald-500/30 border-dashed"
            />

            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSpin}
                className="w-32 h-32 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center relative z-10 glass cursor-pointer group"
              >
                <Code2 className="w-16 h-16 text-white group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100" />
              </motion.div>
            </div>

            {/* Orbiting Elements */}
            {[
              { text: "HTML", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/50" },
              { text: "CSS", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/50" },
              { text: "JS", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/50" },
              { text: "Shadcn", color: "text-slate-200", bg: "bg-slate-500/10", border: "border-slate-500/50" },
              { text: "Convex", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/50" },
              { text: "SQL", color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/50" },
              { text: "Gen AI", color: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/50" },
            ].map((tech, i) => (
              <OrbitingTech key={i} tech={tech} index={i} baseRotation={baseRotation} />
            ))}
          </div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
