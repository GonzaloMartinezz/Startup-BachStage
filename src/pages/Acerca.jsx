import React from 'react';
import { motion } from 'framer-motion';

const Acerca = () => {
  return (
    <main>
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
             alt="Professional Profile" 
             className="w-full h-full object-cover grayscale brightness-50" 
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrykHKlRkyPVEtH9eVdqKkSm5ZEdFUwZjZnRTmgKS8nYuWrHz2Azlb8ylMWBL5tokSFGOqW95CB-WT4JhsbZK8O8mpbTRI5N7TymGhIe_nDwZ00vLbmCFJQ-KWPy9LaalydQlcQm4oq0KfhknZjZOSNXioIf3w-gBFe7GBJsetELIwSYr57fb9uToKXtkugZ7_74TTaoMEdnPTwU_MffqFuQzrW6MRtuaGuWqYJXaTYT8w5_rQLXYAAwYcjl5kbWRwAOKeBQuZRhY" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 p-8 md:p-20 w-full max-w-7xl mx-auto">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <p className="font-label text-primary-container text-xs tracking-[0.4em] uppercase mb-4">Lead Systems Architect</p>
            <h1 className="font-headline text-5xl md:text-9xl font-bold leading-[0.9] tracking-tighter text-white mb-8">
              Architecting <br /> <span className="text-secondary-container">Digital</span> <br /> Obsidian
            </h1>
            <div className="h-1 w-32 bg-primary-container"></div>
          </motion.div>
        </div>
      </section>

      {/* Execution Philosophy */}
      <section className="bg-surface py-24 md:py-48 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <span className="font-label text-secondary-container text-xs tracking-[0.2em] uppercase block mb-6">Execution Philosophy</span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
              Calidad <br /> sobre <br /> Cantidad
            </h2>
            <div className="space-y-8 text-on-surface-variant max-w-lg">
              <p className="text-lg leading-relaxed">
                En un mundo saturado de software descartable, BachStage construye legados. No programamos para cumplir plazos; arquitecturamos para perdurar.
              </p>
              <p className="text-lg leading-relaxed border-l-2 border-primary-container pl-8 italic">
                "La precisión no es un acto, es un hábito de diseño."
              </p>
            </div>
          </div>
          <div className="md:col-span-5 relative mt-12 md:mt-0">
             <div className="aspect-square bg-surface-container-high p-1 obsidian-shadow">
                <img alt="Hardware detail" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-9mzIQTrfih-XJtkckmMjuXC-kR7Om1nbmHLk6FQO7cS3zTi4ulwZrTZ48EpLwBsxw3eUpLIRTkx7a2UhzMUhZLTWacOmV4couu8six2O3BHd2lAABt9SQJrPb0hhcxNxhLo6NVpRN9RzaJmRIMIIfkAXa7k6eAMSVmXDGrkA6R0IuOvXowicjDZqvP1qbtBhaoAB8nsAZZfBGhNuBKqTh5g_gD10OOGyzpfQXD9rCy5V5WPGnFSBNEEiJUFQidC0pN-43bmOCQ"/>
             </div>
             <div className="absolute -bottom-10 -left-10 bg-primary-container text-on-primary p-8 hidden md:block">
               <p className="font-headline font-bold text-3xl">0.00ms</p>
               <p className="font-label text-[10px] uppercase tracking-widest">Optimized Latency</p>
             </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-surface-container-lowest py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <h3 className="font-headline text-3xl font-bold text-white mb-2 uppercase tracking-tighter">Technological Nucleus</h3>
             <div className="w-full h-px bg-outline-variant/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline-variant/20 border border-outline-variant/20">
             {[
               { icon: 'database', title: 'MongoDB', desc: 'Document-oriented precision for fluid data scaling without structural compromise.' },
               { icon: 'bolt', title: 'Express', desc: 'Minimalist backbone for high-performance server-side logic and routing.', color: 'text-secondary-container' },
               { icon: 'deployed_code', title: 'React', desc: 'Component-based architectural integrity for obsidian-grade interfaces.' },
               { icon: 'terminal', title: 'Node.js', desc: 'Asynchronous runtime environment built for vertical and horizontal expansion.', color: 'text-secondary-container' }
             ].map((tech, idx) => (
                <div key={idx} className="bg-surface p-10 hover:bg-surface-container-high transition-colors group">
                   <span className={`material-symbols-outlined ${tech.color || 'text-primary-container'} text-4xl mb-8 group-hover:scale-110 transition-transform`}>{tech.icon}</span>
                   <h4 className="font-headline text-xl font-bold text-white mb-4">{tech.title}</h4>
                   <p className="text-on-surface-variant text-sm font-light leading-relaxed">{tech.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-48 px-8 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 mesh-gradient-bg opacity-40"></div>
        <div className="relative z-10 text-center max-w-3xl">
          <h2 className="font-headline text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter leading-none">READY TO BUILD THE FUTURE?</h2>
          <button className="bg-primary-container text-on-primary px-12 py-6 font-headline font-bold text-xl uppercase hover:shadow-[0_0_40px_rgba(0,255,133,0.3)] transition-all active:scale-95 rounded-none cursor-pointer">
            Start a Project
          </button>
        </div>
      </section>
    </main>
  );
};

export default Acerca;
