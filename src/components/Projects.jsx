import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'PIXIE (in progress)',
    description: 'A AI-powered Photo editor that integrates state-of-the-art AI capabilities.',
    tech: ['React', 'Tailwind', 'Convex', 'Shadcn UI'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Algorithm-Visualizer',
    description: 'Interactive tool visualizing sorting/pathfinding algorithms with step-by-step execution.',
    tech: ['Next.js', 'Tailwind', 'D3.js'],
    color: 'from-purple-500 to-pink-500',
    links: {
      demo: 'https://algo-graph.netlify.app/',
      github: 'https://github.com/SunnyXilon/Alogorithm-Visualizer'
    }
  },
  {
    title: 'Task Management Tool',
    description: 'Collaborative task manager with drag-and-drop kanban boards and team workspaces.',
    tech: ['Vue.js', 'Firebase', 'Pinia'],
    color: 'from-emerald-500 to-green-500',
    links: { demo: '#', github: '#' }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Recent Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-800/30 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-slate-700/50 text-xs font-medium text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.links?.demo || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a href={project.links?.github || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
