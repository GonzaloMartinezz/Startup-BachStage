import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Docs = () => {
  return (
    <div className="bg-[#09090b] min-h-screen pt-20 flex">
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex flex-col h-[calc(100vh-80px)] w-64 fixed left-0 top-20 bg-[#09090B] border-r border-primary-container/10 py-12 px-6 z-40 overflow-y-auto custom-scrollbar">
        <div className="mb-12">
          <div className="text-primary-container font-bold font-headline text-lg tracking-tighter">Console v1.0</div>
          <div className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mt-1">System Operational</div>
        </div>
        <nav className="flex flex-col gap-2">
          <a className="flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white hover:bg-[#131315] transition-all duration-150 translate-x-1 font-label font-semibold text-xs uppercase tracking-widest cursor-pointer">
            <span className="material-symbols-outlined text-sm">dashboard</span> Dashboard
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white hover:bg-[#131315] transition-all duration-150 translate-x-1 font-label font-semibold text-xs uppercase tracking-widest cursor-pointer">
            <span className="material-symbols-outlined text-sm">monitoring</span> Analytics
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white hover:bg-[#131315] transition-all duration-150 translate-x-1 font-label font-semibold text-xs uppercase tracking-widest cursor-pointer">
            <span className="material-symbols-outlined text-sm">hub</span> Nodes
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white hover:bg-[#131315] transition-all duration-150 translate-x-1 font-label font-semibold text-xs uppercase tracking-widest cursor-pointer">
            <span className="material-symbols-outlined text-sm">shield</span> Security
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-primary-container bg-[#1C1B1D] border-l-2 border-primary-container transition-all duration-150 translate-x-1 font-label font-semibold text-xs uppercase tracking-widest cursor-pointer">
            <span className="material-symbols-outlined text-sm">settings</span> Settings
          </a>
        </nav>
        <div className="mt-auto pt-8 border-t border-[#1C1B1D]">
          <button className="w-full bg-[#1C1B1D] text-primary-container py-3 font-bold text-[10px] uppercase tracking-widest border border-primary-container/20 hover:bg-primary-container/10 transition-all cursor-pointer">
            Deploy New Node
          </button>
          <div className="mt-6 flex flex-col gap-2">
            <a className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-widest hover:text-primary-container cursor-pointer">
              <span className="material-symbols-outlined text-xs">description</span> Docs
            </a>
            <a className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-widest hover:text-primary-container cursor-pointer">
              <span className="material-symbols-outlined text-xs">contact_support</span> Support
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="lg:ml-64 w-full pt-20 pb-24 px-8 md:px-12 lg:px-20 bg-[radial-gradient(at_0%_0%,rgba(0,255,133,0.05)_0px,transparent_50%),radial-gradient(at_100%_0%,rgba(254,107,0,0.05)_0px,transparent_50%)]">
        
        {/* Hero Header */}
        <header className="max-w-6xl mb-20 relative">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-block px-3 py-1 bg-secondary-container/10 border border-secondary-container/30 text-secondary-container font-headline font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
              Documentation Hub
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-white tracking-tighter leading-none mb-8">
              TECHNICAL <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">INDEX.</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed font-light">
              Comprehensive technical specifications, integration guides, and operational manuals for the BachStage monolithic architecture. Built for high-performance scale.
            </p>
          </motion.div>
        </header>

        {/* Documentation Bento Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#1C1B1D] bg-[#1C1B1D]">
          
          {/* API Reference Card */}
          <div className="bg-[#09090B] p-10 group border border-[#1C1B1D] hover:bg-[#131315] transition-all duration-500 relative overflow-hidden cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:bg-primary-container/10 transition-colors"></div>
            <div className="mb-12 relative z-10">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-6">api</span>
              <h3 className="text-2xl font-headline font-bold text-white uppercase tracking-tighter mb-4">API Reference</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Explore our RESTful endpoints, authentication patterns, and rate limiting policies for direct core interaction.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-primary-container font-headline font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all relative z-10">
              Read Docs <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>

          {/* SDKs Card */}
          <div className="bg-[#131315] p-10 group md:col-span-2 border border-[#1C1B1D] hover:bg-[#1C1B1D] transition-all duration-500 flex flex-col md:flex-row gap-10 items-start md:items-center relative cursor-pointer">
            <div className="flex-1">
              <span className="material-symbols-outlined text-4xl text-secondary-container mb-6">terminal</span>
              <h3 className="text-2xl font-headline font-bold text-white uppercase tracking-tighter mb-4">Software Development Kits</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 max-w-md">
                Official libraries for Node.js, Python, and Go. Accelerate your integration with pre-built modules for telemetry and node management.
              </p>
              <div className="inline-flex items-center gap-2 text-primary-container font-headline font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                Read Docs <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
            <div className="w-full md:w-64 aspect-video bg-black p-4 border border-primary-container/20 font-mono text-[10px] text-primary-container overflow-hidden">
              <div className="opacity-50">npm install @bachstage/core</div>
              <div className="text-white mt-2">const client = new BachStage({`{`}</div>
              <div className="ml-4">apiKey: process.env.API_KEY,</div>
              <div className="ml-4">region: 'monolith-alpha'</div>
              <div className="text-white">{`}`});</div>
            </div>
          </div>

          {/* CLI Tooling Card */}
          <div className="bg-[#131315] p-10 group border border-[#1C1B1D] hover:bg-[#1C1B1D] transition-all duration-500 relative cursor-pointer">
            <span className="material-symbols-outlined text-4xl text-white mb-6">keyboard_command_key</span>
            <h3 className="text-2xl font-headline font-bold text-white uppercase tracking-tighter mb-4">CLI Tooling</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Manage your entire stack from the command line. Provision nodes, check health, and deploy updates instantly.
            </p>
            <div className="inline-flex items-center gap-2 text-primary-container font-headline font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
              Read Docs <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>

          {/* Webhooks Card */}
          <div className="bg-[#09090B] p-10 group border border-[#1C1B1D] hover:bg-[#131315] transition-all duration-500 relative cursor-pointer">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-6">webhook</span>
            <h3 className="text-2xl font-headline font-bold text-white uppercase tracking-tighter mb-4">Webhooks</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Real-time event notifications. Subscribe to system changes, node failures, and threshold alerts for instant automation.
            </p>
            <div className="inline-flex items-center gap-2 text-primary-container font-headline font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
              Read Docs <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>

          {/* Network Status Pillar */}
          <div className="bg-[#09090B] group border border-[#1C1B1D] hover:bg-[#131315] transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-default">
            <div className="p-10">
              <h3 className="text-2xl font-headline font-bold text-white uppercase tracking-tighter mb-2">Network Health</h3>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-8">Current Global Latency</p>
            </div>
            <div className="w-full pt-12 pb-6 px-10 border-t border-primary-container/20 bg-gradient-to-b from-primary-container/10 to-transparent">
              <div className="text-6xl md:text-7xl font-headline font-black text-primary-container tracking-tighter">14.2ms</div>
              <div className="flex items-center gap-2 mt-4 text-[10px] font-bold text-primary-container uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span> Optimal Status
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Resource Section */}
        <section className="mt-32 border-l-4 border-secondary-container pl-8 md:pl-12 py-12 relative overflow-hidden bg-surface-container-low">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 mix-blend-overlay grayscale"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-headline font-bold text-white uppercase tracking-tighter mb-4">Infrastructure Security Vault</h2>
            <p className="text-on-surface-variant max-w-2xl mb-8">
              Deep-dive into our security protocols, end-to-end encryption standards, and hardware-level isolation for mission-critical deployments.
            </p>
            <Link to="/security" className="inline-block bg-secondary-container text-black font-bold uppercase tracking-tighter px-10 py-4 hover:bg-white transition-colors duration-300">
              Access Security Vault
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Docs;
