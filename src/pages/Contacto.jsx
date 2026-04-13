import React from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <main className="pt-32 pb-20 obsidian-mesh min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <header className="mb-24">
          <p className="font-label text-xs tracking-[0.3em] text-primary-container mb-4 uppercase">Direct Access</p>
          <h1 className="font-headline text-7xl md:text-9xl font-bold tracking-tighter leading-none neon-gradient-text">
            Let's Sync
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Form */}
          <section className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tight">Project Inquiry</h2>
              <p className="text-on-surface-variant max-w-lg">Fill out the brief below. Our systems will analyze your requirements and sync a meeting within 24 hours.</p>
            </div>
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2 group">
                  <label className="block font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase group-focus-within:text-primary-container transition-colors">Identification</label>
                  <input className="w-full bg-transparent border-none border-l-2 border-outline-variant p-4 focus:ring-0 focus:border-primary-container text-white font-headline placeholder:text-zinc-800 transition-all outline-none" placeholder="FULL NAME" type="text" />
                </div>
                <div className="space-y-2 group">
                  <label className="block font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase group-focus-within:text-primary-container transition-colors">Digital Address</label>
                  <input className="w-full bg-transparent border-none border-l-2 border-outline-variant p-4 focus:ring-0 focus:border-primary-container text-white font-headline placeholder:text-zinc-800 transition-all outline-none" placeholder="EMAIL@DOMAIN.COM" type="email" />
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="block font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase group-focus-within:text-primary-container transition-colors">Objectives</label>
                <select className="w-full bg-transparent border-none border-l-2 border-outline-variant p-4 focus:ring-0 focus:border-primary-container text-white font-headline transition-all outline-none appearance-none">
                  <option className="bg-surface-container">SAAS DEVELOPMENT</option>
                  <option className="bg-surface-container">PORTFOLIO ARCHITECTURE</option>
                  <option className="bg-surface-container">BRAND SYNC</option>
                  <option className="bg-surface-container">CONSULTATION</option>
                </select>
              </div>
              <div className="space-y-2 group">
                <label className="block font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase group-focus-within:text-primary-container transition-colors">Intelligence Brief</label>
                <textarea className="w-full bg-transparent border-none border-l-2 border-outline-variant p-4 focus:ring-0 focus:border-primary-container text-white font-headline placeholder:text-zinc-800 transition-all resize-none outline-none" placeholder="DESCRIBE YOUR VISION..." rows="4"></textarea>
              </div>
              <button className="w-full md:w-auto bg-white text-black font-headline font-bold px-12 py-5 tracking-widest uppercase hover:bg-primary-container transition-colors active:scale-[0.98] cursor-pointer rounded-none" type="submit">
                Initialize Protocol
              </button>
            </form>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-16">
            <div className="bg-surface-container-low p-10 space-y-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 blur-[60px]"></div>
              <div className="space-y-6">
                <h3 className="font-headline text-xl font-bold tracking-tight">Connect Nodes</h3>
                <div className="flex flex-col gap-4">
                  {['Instagram', 'LinkedIn', 'Behance'].map((social, i) => (
                    <a key={i} className="group flex items-center justify-between border-b border-outline-variant/30 py-4 hover:border-primary-container transition-colors" href="#">
                      <span className="font-label text-sm tracking-widest text-on-surface-variant group-hover:text-white uppercase transition-colors">{social}</span>
                      <span className="material-symbols-outlined text-primary-container">arrow_outward</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="block font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">Instant Mobile Access</label>
                <div className="aspect-square w-40 bg-white p-2 flex items-center justify-center">
                  {/* Fake QR code for visual representation matching the UI */}
                  <div className="w-full h-full border-4 border-black grid grid-cols-4 grid-rows-4 gap-1 p-1">
                    <div className="bg-black"></div><div className="bg-black"></div><div className="bg-white"></div><div className="bg-black"></div>
                    <div className="bg-black"></div><div className="bg-white"></div><div className="bg-black"></div><div className="bg-black"></div>
                    <div className="bg-white"></div><div className="bg-black"></div><div className="bg-black"></div><div className="bg-white"></div>
                    <div className="bg-black"></div><div className="bg-black"></div><div className="bg-white"></div><div className="bg-black"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-px bg-outline-variant w-full opacity-30"></div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-1">
                  <h4 className="font-headline font-bold text-lg">Priority Pipeline</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Immediate communication response</p>
                </div>
                <a className="inline-flex items-center gap-4 bg-surface-container-high px-8 py-4 border-l-4 border-secondary-container hover:bg-secondary-container hover:text-black transition-all group" href="https://wa.me/something">
                  <span className="font-headline font-black uppercase text-sm tracking-widest">Sync via WhatsApp</span>
                  <span className="material-symbols-outlined text-secondary-container group-hover:text-black">chat_bubble</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Contacto;
