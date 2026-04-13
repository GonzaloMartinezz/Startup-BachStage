import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <main className="pt-20 min-h-screen">
      {/* Featured Hero Post */}
      <section className="relative w-full h-[600px] md:h-[870px] flex items-end overflow-hidden group">
        <img 
          alt="Technological Core" 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-lEpBs6vmdxcrei7kZfGfGMbURvoEOoOgKrL55tA-jyeaU0oziKQIsRuycmk41-8V7h_Nt2LAqAhytAmoylqMm5f8dBopNl1oVvHxdlkJzimb2yGoYZoS0aJgjIOo1LW0QM0BXFEWyPapQo3rYn94DYziOv6xNBASTD4Xn9KhNWmWaIbmzBKjtF81yGLAtXAmkdzfJjdutw6u6hMUmkNReSWDYfGn94CjqsIWqJ1Ig3HeVhzrkpiyMA5-o9YcZRmvjwRo8-8jmf8" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="relative z-10 w-full px-8 pb-20 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-container text-on-primary px-3 py-1 font-label text-[0.7rem] font-black uppercase tracking-[0.2em]">Engineering</span>
                <span className="text-white/50 font-label text-[0.75rem] uppercase tracking-widest">12 Min Read</span>
             </div>
             <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                Architecting the <br />
                <span className="text-primary-container">Monolith</span> System.
             </h1>
             <p className="max-w-2xl text-xl text-on-surface-variant font-light mb-10 leading-relaxed">
                A deep dive into how we leverage the MERN stack to build uncompromising, high-performance infrastructures that defy modern web conventions.
             </p>
             <div className="flex items-center gap-6">
                <button className="flex items-center gap-3 text-white border border-white/20 px-8 py-4 font-headline font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer rounded-none">
                   Read Insights
                   <span className="material-symbols-outlined">arrow_forward</span>
                </button>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Insights Grid Section */}
      <section className="py-32 px-8 bg-surface-dim mesh-gradient-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h2 className="font-headline text-5xl font-bold tracking-tighter text-white mb-4 uppercase">Latest Insights</h2>
              <div className="w-24 h-1 bg-primary-container"></div>
            </div>
            <div className="flex gap-4">
              {['All', 'Development', 'Design', 'Operations'].map((cat, i) => (
                <span key={i} className={`font-label text-xs font-black tracking-widest uppercase cursor-pointer hover:text-white transition-colors ${i === 0 ? 'text-primary-container hover:underline' : 'text-white/40'}`}>
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/5">
            {/* Article Card 1 */}
            <article className="md:col-span-7 bg-surface-container-low p-12 group hover:bg-surface-container-high transition-colors cursor-pointer">
               <div className="mb-12 overflow-hidden aspect-[16/9]">
                  <img alt="Code Logic" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBade9wCxzQaKrWJeeSfwuWVlA9GW_Ssp-oYyc0cG0S74cO8B6xWGIgbLpqW7Jt4HGQ7rzcovuLDZ8XZknq7ZO5ZjD1brOF8gZzh6HEStIvYeA4jCfhYIK4dak77aR3JvLLv9otEOOIGwokXc-pbLqN0ro3MuHh1Sal1DRdllRXWJXvqKd2VN9fQ_DhH3T6rMkJ8y3IbIqtMpVdyj7Xm2vAazPd21F21dfrfIS0pEtW6luCBdxRJ5LIpuBWwVz9PzIaL9lYpfFUiO8" />
               </div>
               <div className="flex items-center gap-4 mb-6">
                  <span className="text-secondary-container font-headline font-bold text-xs uppercase tracking-widest">Logic</span>
                  <span className="text-white/20 text-xs">— MARCH 24, 2024</span>
               </div>
               <h3 className="text-4xl font-headline font-bold text-white mb-6 leading-tight group-hover:text-primary-container transition-colors">
                  The Ghost in the Machine: Debugging Asynchronous Node.js
               </h3>
               <p className="text-on-surface-variant leading-relaxed mb-8">
                  Uncovering the complexities of event-loop blocking and how to maintain millisecond precision in high-traffic environments.
               </p>
               <div className="flex items-center gap-2 text-white font-label text-[0.7rem] font-bold tracking-widest uppercase">
                  View Article <span className="material-symbols-outlined text-sm">north_east</span>
               </div>
            </article>

            {/* Article Card 2 */}
            <article className="md:col-span-5 bg-surface-container-low p-12 group border-l border-white/5 hover:bg-surface-container-high transition-colors cursor-pointer">
               <div className="flex items-center gap-4 mb-6">
                  <span className="text-primary-container font-headline font-bold text-xs uppercase tracking-widest">UX Trends</span>
                  <span className="text-white/20 text-xs">— MARCH 20, 2024</span>
               </div>
               <h3 className="text-3xl font-headline font-bold text-white mb-6 leading-tight">
                  Precision Brutalism in Modern UI
               </h3>
               <p className="text-on-surface-variant leading-relaxed mb-10">
                  Why the return to hard edges and high-contrast typography is winning against 'soft' digital trends.
               </p>
               <div className="mb-12 overflow-hidden aspect-square">
                  <img alt="Editorial Design" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjVh-poIFeDSQgnyXvRlEA65iXwhqxzKbvdFUW8p_B03-GrvgaYC79ilgaL5b9L869GzD0KsdJwavcfPSZNHqRp7GQwgfom86qyHc5SCkA6vbKhaA2ubPx_NDMTfMPIa536fNZWL5P2IFI7NuE_OgS1dylDxWGiHgsYiBvUhtyIEhiNOcbZ-GMzuYrogLr5skLDlqORfR0Vz3LaDTvvEJaj8w206x0HOx6nxAxDhbrdGo-tgcfKLNarKlWACIqQqV7sJg64PxYUUc" />
               </div>
               <div className="flex items-center gap-2 text-white font-label text-[0.7rem] font-bold tracking-widest uppercase">
                  View Article <span className="material-symbols-outlined text-sm">north_east</span>
               </div>
            </article>

            {/* Article Card 3 */}
            <article className="md:col-span-12 bg-surface-container-low p-12 flex flex-col md:flex-row gap-12 group border-t border-white/5 hover:bg-surface-container-high transition-colors cursor-pointer">
               <div className="md:w-1/2 overflow-hidden">
                  <img alt="Data Security" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoIASk52ooj99UHPWEMd_68S-I0j2-J9a4Kjh0LIzofIiN3pgSyvDpHezFD6BHitRIFsu_kVPSAvy9TKlUnM68YcNzLEMZlFZ9WQTMMWObpgLfYxareG003sykiQc80ixKabY2v7PZyZGXOcdIzSCSV_2xcY2Mo4OD4y6H0ssG4Cdgq4LdROxUnGTOh4OeFm4mJ6nRGyTueH8tAiVaFp9gdvLVVH7kdKXaScZGpWIjGF4BjpgeiEx6q3crWNojIfYq2iVRM2ZBFRU" />
               </div>
               <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                     <span className="text-secondary-container font-headline font-bold text-xs uppercase tracking-widest">Security</span>
                     <span className="text-white/20 text-xs">— MARCH 15, 2024</span>
                  </div>
                  <h3 className="text-5xl font-headline font-bold text-white mb-6 leading-[0.9]">
                     Zero-Trust Deployment: <br />Securing the Edge
                  </h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                     A comprehensive guide to implementing end-to-end encryption within the BACHSTAGE monolith ecosystem.
                  </p>
                  <div className="flex items-center gap-2 text-white font-label text-[0.7rem] font-bold tracking-widest uppercase">
                     View Article <span className="material-symbols-outlined text-sm">north_east</span>
                  </div>
               </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full bg-primary-container py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-[#005227] opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-on-primary">
            <span className="font-label font-black text-xs uppercase tracking-[0.3em] mb-4 block">STAY SYNCED</span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[0.85] mb-4">
              THE WEEKLY <br />INTELLIGENCE.
            </h2>
            <p className="font-body font-medium text-lg max-w-md">
              Technical deep-dives, architectural reviews, and performance benchmarks delivered to your terminal every Monday.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col gap-4">
            <div className="flex flex-col md:flex-row bg-black/10 backdrop-blur-md p-1 border border-black/20">
               <input className="bg-transparent outline-none border-none focus:ring-0 text-white placeholder:text-white/40 font-headline font-bold uppercase tracking-widest py-4 px-8 min-w-[320px]" placeholder="ENTER YOUR EMAIL" type="email" />
               <button className="bg-black text-primary-container font-headline font-black uppercase text-xs tracking-[0.2em] px-10 py-4 hover:bg-white hover:text-black transition-all cursor-pointer">
                  Subscribe
               </button>
            </div>
            <p className="text-[0.65rem] font-bold uppercase tracking-widest text-on-primary/70">0% SPAM. 100% PRECISION.</p>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-40 bg-surface-container-lowest border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="material-symbols-outlined text-primary-container text-6xl mb-12">format_quote</span>
          <blockquote className="font-headline text-4xl md:text-5xl font-light italic text-white mb-12 leading-tight">
            "Complexity is the enemy of performance. Our goal is to strip away the noise until only the monolith remains—powerful, silent, and absolute."
          </blockquote>
          <div className="flex flex-col items-center gap-2">
             <div className="w-12 h-px bg-primary-container mb-4"></div>
             <span className="font-headline font-black uppercase tracking-widest text-white text-sm">Marcus V. Thorne</span>
             <span className="font-label text-white/40 text-[0.7rem] uppercase tracking-widest">Chief Architect, BACHSTAGE</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
