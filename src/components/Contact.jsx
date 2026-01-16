import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Mail className="w-16 h-16 text-blue-500 mx-auto mb-6" />

          <h3 className="text-2xl font-bold mb-4">Send me an email</h3>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sanidhya1124@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1 relative z-10"
          >
            sanidhya1124@gmail.com
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="mt-12 pt-8 border-t border-slate-800 flex justify-center gap-8 relative z-10">
            <a href="https://github.com/SunnyXilon" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sanidhya-choudhary-385282251/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
