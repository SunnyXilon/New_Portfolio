import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 'Advanced', color: 'bg-blue-500' },
  { name: 'Python', level: 'Advanced', color: 'bg-yellow-500' },
  { name: 'JavaScript', level: 'Intermediate', color: 'bg-blue-600' },
  { name: 'Tailwind CSS', level: 'Advanced', color: 'bg-cyan-500' },
  { name: 'Next.js', level: 'Intermediate', color: 'bg-slate-800 border border-slate-700' },
  { name: 'GIT', level: 'Intermediate', color: 'bg-red-400' },
  { name: 'SQL', level: 'Intermediate', color: 'bg-pink-500' },
  { name: 'Docker', level: 'Beginner', color: 'bg-blue-600' },
];

const TechStack = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies I use to build scalable and performant applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-lg ${skill.color} mb-4 flex items-center justify-center text-white font-bold opacity-80 group-hover:opacity-100 transition-opacity`}>
                {skill.name[0]}
              </div>
              <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
              <p className="text-sm text-slate-500">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
