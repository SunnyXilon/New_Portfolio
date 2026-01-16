import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const achievements = [
  {
    title: 'Gen AI Professional Certificate 2025',
    organization: 'Oracle',
    date: 'Oct 2025'
  },
  {
    title: 'C++ 5 Star',
    organization: 'HackerRank',
    date: 'March 2025'
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub',
    date: 'Jan 2026'
  },
  {
    title: 'Top 4 in National Medical Hackathon',
    organization: 'JECRC University',
    date: 'January 2025'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Achievements & <br /><span className="gradient-text">Certifications</span></h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Validation of my expertise and commitment to continuous learning in the ever-evolving tech landscape.
            </p>

            <div className="grid gap-6">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-200">{item.title}</h4>
                    <p className="text-slate-400">{item.organization} • {item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-4xl font-bold text-white mb-2">5+</span>
                  <span className="text-slate-400">Projects Completed</span>
                </div>
                <div className="h-32 rounded-2xl bg-slate-800/50 border border-slate-700 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-3xl font-bold text-blue-400 mb-2">100%</span>
                  <span className="text-slate-400 text-sm">Client Satisfaction</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 rounded-2xl bg-slate-800/50 border border-slate-700 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-3xl font-bold text-emerald-400 mb-2">1+</span>
                  <span className="text-slate-400 text-sm">Years Experience</span>
                </div>
                <div className="h-48 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-4xl font-bold text-white mb-2">24/7</span>
                  <span className="text-slate-400">Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
