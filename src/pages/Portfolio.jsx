import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex flex-col justify-end px-8 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 mesh-gradient-bg opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-label text-primary-container text-[0.75rem] uppercase tracking-[0.3em] block mb-6">Curated Artifacts</span>
            <h1 className="font-headline font-bold text-7xl md:text-[8rem] leading-[0.9] tracking-tighter text-white mb-8">
              DIGITAL<br />MONOLITHS.
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
              We architect high-performance interfaces for industries that demand precision. From dental ecosystems to real estate syndicates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Filter Bar */}
      <section className="bg-surface-container-lowest border-y border-white/5 px-8 py-4 sticky top-20 z-40">
        <div className="flex gap-8 overflow-x-auto no-scrollbar items-center max-w-7xl mx-auto">
          <span className="font-label text-xs text-white/40 uppercase tracking-widest whitespace-nowrap">Sector:</span>
          <button className="font-headline text-sm font-bold text-primary-container tracking-tighter uppercase whitespace-nowrap cursor-pointer">All Works</button>
          <button className="font-headline text-sm font-bold text-white/60 hover:text-white transition-colors tracking-tighter uppercase whitespace-nowrap cursor-pointer">Clinical Dentistry</button>
          <button className="font-headline text-sm font-bold text-white/60 hover:text-white transition-colors tracking-tighter uppercase whitespace-nowrap cursor-pointer">Luxury Real Estate</button>
          <button className="font-headline text-sm font-bold text-white/60 hover:text-white transition-colors tracking-tighter uppercase whitespace-nowrap cursor-pointer">Fintech Infrastructure</button>
          <button className="font-headline text-sm font-bold text-white/60 hover:text-white transition-colors tracking-tighter uppercase whitespace-nowrap cursor-pointer">AI Operations</button>
        </div>
      </section>

      {/* Portfolio Grid Bento */}
      <section className="px-8 py-24 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 auto-rows-[400px] max-w-7xl mx-auto">
          {/* Project 1 */}
          <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden bg-surface-dim border border-white/5 transition-all duration-300 hover:bg-surface-container-low cursor-pointer">
            <img alt="Precision medical UI" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWseCXJoTtfILPoD-o1m8idzAIdhbjDkRT2rzncSqKpHe9qB5IEXYLtdHOODWyW2GBxUsTh_UFVtsCrbTfG8hP1LqXbYKtroyfeC4Kp-jH8uDL3Vx5YA0UHPNB2yTORutYeOgTXyWpOQ-WpeV6eSlabywHAa-CcKbkMuKS5Wz76etGNnpKrasGZLUrfdf7aOgdNiNYrzlfwlfXUZyw0Y9e5NHP47gIUDbLeEcsKeFMwiubneugHDB_xQ2--ilo7llMNUIEMbmqbaY" />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-container text-on-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest">Medical Architecture</span>
                <span className="text-white/40 font-label text-[0.65rem] uppercase">2024</span>
              </div>
              <h3 className="font-headline text-5xl font-bold text-white tracking-tighter mb-4">MolarFlow OS</h3>
              <p className="text-on-surface-variant max-w-lg mb-6">Revolutionizing clinic management through a high-contrast, low-latency dashboard designed for surgical precision.</p>
              <button className="flex items-center gap-2 font-headline font-bold text-primary-container uppercase tracking-tight group/btn cursor-pointer">
                Explore Monolith <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="md:col-span-4 md:row-span-1 group relative overflow-hidden bg-surface-container-low border border-white/5 cursor-pointer hover:bg-surface">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#fe6b0033,transparent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-10 flex flex-col h-full justify-between relative z-10">
              <div>
                <span className="text-secondary-container font-headline font-bold text-[0.65rem] uppercase tracking-widest block mb-4">Real Estate</span>
                <h3 className="font-headline text-3xl font-bold text-white tracking-tighter">PrimeVault</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">Luxury property syndication platform with a focus on dark-mode aesthetic and heavy typography.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="md:col-span-4 md:row-span-1 bg-primary-container p-10 flex flex-col justify-end">
            <div className="mb-4">
              <span className="text-on-primary font-headline font-bold text-[0.65rem] uppercase tracking-[0.2em]">System Impact</span>
            </div>
            <div className="font-headline font-bold text-7xl text-on-primary tracking-tighter mb-2">99.9%</div>
            <p className="font-headline font-bold text-on-primary uppercase text-xs tracking-widest">Uptime Performance</p>
          </div>

          {/* Project 4 */}
          <div className="md:col-span-4 md:row-span-1 group relative overflow-hidden bg-surface-dim border border-white/5 cursor-pointer">
            <img alt="Neural network visualization" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoB-JZxkXU8pec9eMtm_18dcZblh_TT7XTzOGBl2VTZCRtS8dT8oa6Hu3yjEAPPNlRq9_etsvrEpoUUSMxg2NFkVUalXjQlp4g6PSFikRz48gEeOWVm1uboP6VhFbEGsoUBp0yXUDhogVMsFsdjYG2ULGGKkq5F1fTNHlIrBxHTgWxXMvgTTIRFNKcukveNEjchlTp3HY9o_0CTZF8zke5xrlySHFggV9OdYiWO0RLS1o8Nd_ZcVs7JDmGsLYpzZbPjhcil95zcSU" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 p-10">
              <span className="text-white/40 font-headline font-bold text-[0.65rem] uppercase tracking-widest block mb-2">AI Infrastructure</span>
              <h3 className="font-headline text-3xl font-bold text-white tracking-tighter">Aether.ai</h3>
            </div>
          </div>

          {/* Project 5 */}
          <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden bg-surface-container-high border border-white/5 cursor-pointer">
            <div className="h-full w-full p-10 flex flex-col justify-between relative z-10">
              <div className="space-y-6">
                <div className="w-12 h-[2px] bg-primary-container"></div>
                <h3 className="font-headline text-4xl font-bold text-white tracking-tighter leading-none">The Obsidian Series</h3>
                <p className="text-on-surface-variant text-sm">A collection of 12 internal UI experiments pushing the boundaries of Precision Brutalism.</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square bg-surface-container-lowest border border-white/5"></div>
                <div className="aspect-square bg-surface-container-lowest border border-white/5"></div>
                <div className="aspect-square bg-surface-container-lowest border border-white/5"></div>
                <div className="aspect-square bg-primary-container"></div>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="md:col-span-8 md:row-span-1 group relative overflow-hidden border border-white/5 cursor-pointer">
            <div className="absolute inset-0 mesh-gradient-bg opacity-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row h-full">
              <div className="p-10 md:w-1/2 flex flex-col justify-center">
                <span className="text-white/40 font-headline font-bold text-[0.65rem] uppercase tracking-widest block mb-4">Logistics</span>
                <h3 className="font-headline text-4xl font-bold text-white tracking-tighter mb-4">CargoMetric</h3>
                <p className="text-on-surface-variant text-sm max-w-xs">Real-time global freight tracking for the next generation of supply chain managers.</p>
              </div>
              <div className="md:w-1/2 bg-surface-container-lowest flex items-center justify-center p-8 overflow-hidden">
                <div className="w-full h-full border border-primary-container/20 flex flex-col">
                  <div className="h-8 border-b border-primary-container/20 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 bg-primary-container"></div>
                    <div className="w-2 h-2 bg-white/20"></div>
                    <div className="w-2 h-2 bg-white/20"></div>
                  </div>
                  <div className="flex-1 bg-black p-4 space-y-4">
                    <div className="h-2 w-3/4 bg-white/10"></div>
                    <div className="h-2 w-1/2 bg-white/10"></div>
                    <div className="h-12 w-full bg-primary-container/5 border-l-2 border-primary-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-surface-container-lowest flex flex-col items-center text-center px-8 border-y border-white/5">
        <h2 className="font-headline font-bold text-5xl md:text-8xl text-white tracking-tighter mb-12">READY TO<br />BUILD THE FUTURE?</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <button className="bg-primary-container text-on-primary px-12 py-5 font-headline font-bold uppercase text-lg tracking-tighter hover:scale-105 transition-transform duration-300 rounded-none cursor-pointer">
            Initiate Project
          </button>
          <button className="border border-white/20 text-white px-12 py-5 font-headline font-bold uppercase text-lg tracking-tighter hover:bg-white hover:text-black transition-all duration-300 rounded-none cursor-pointer">
            View Manifesto
          </button>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
