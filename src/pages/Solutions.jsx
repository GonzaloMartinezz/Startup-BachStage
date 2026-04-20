import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Solutions = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,82,39,0.5)_0%,rgba(0,0,0,1)_70%)]">
        <div className="w-full px-8 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
          <div className="md:col-span-8">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-primary-container font-label uppercase tracking-[0.3em] text-xs mb-6">Vertical Integration Mastery</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              ARCHITECTING <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-container to-white">OBSIDIAN</span> CORE.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-xl text-lg text-on-surface-variant leading-relaxed mb-10 font-light">
              We don't build generic software. We engineer domain-specific monoliths for industries that demand zero-latency, absolute security, and architectural precision.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col md:flex-row gap-4">
              <button className="bg-primary-container text-black px-10 py-5 font-bold uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(0,255,133,0.2)] hover:bg-white hover:text-black transition-colors cursor-pointer rounded-none">Explore Verticals</button>
              <Link to="/docs" className="border border-white/20 text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all text-center cursor-pointer">Documentation</Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="md:col-span-4 hidden md:block">
            <div className="border-l-2 border-primary-container pl-8 py-12">
              <div className="mb-12">
                <span className="block text-4xl font-headline font-black text-white mb-1">99.99%</span>
                <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">System Uptime Guarantee</span>
              </div>
              <div className="mb-12">
                <span className="block text-4xl font-headline font-black text-white mb-1">&lt;12ms</span>
                <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Core Execution Latency</span>
              </div>
              <div>
                <span className="block text-4xl font-headline font-black text-white mb-1">Tier-4</span>
                <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Security Infrastructure</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Medical Architecture Section (MolarFlow OS) */}
      <section className="w-full py-32 bg-surface">
        <div className="px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img className="w-full aspect-4/5 object-cover filter grayscale hover:grayscale-0 transition-all duration-700" alt="Surgical tech interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJNLSdyZx4Y07EkySYbP_Q-e1riouyVWB5XxuNNaxzTnc867b-za-deJZsZHCvCDI9wfjoiBedbFItrDgOr4hVKIN7eiTO18a3HNJLTPssiG-qKC4XDjEBB2H3E9a1FslKYBmsmNcDABDiqDEdEDZlGvbVGznKi9JGFkVJyIn73StWK37IkcdCWkUkJQtwyS9dnaynIZ8_6G8boT_9PUstDB7vUrSN4avXMeYWDc3D1iM2U6yuP9Xc4fPXg9sL_Grs5J_NpxWsGTs" />
            <div className="absolute -bottom-10 -right-4 md:-right-10 w-64 h-64 bg-surface-container-high p-8 shadow-2xl border-l-4 border-primary-container hidden sm:block">
              <span className="material-symbols-outlined text-primary-container text-5xl mb-4">dentistry</span>
              <h4 className="font-headline font-black text-xl mb-2 text-white">MolarFlow OS</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed font-light">Integrated medical operating system for high-volume surgical centers.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-primary-container font-label uppercase tracking-widest text-[10px] bg-primary-container/10 px-3 py-1 mb-6 inline-block">Medical Architecture</span>
            <h2 className="font-headline text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">PRECISION DIAGNOSTICS AT SCALE.</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 bg-surface-container-high border border-white/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container">biotech</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-white mb-2">Neural Scan Integration</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">Direct hardware-to-OS mapping for DICOM imaging, reducing diagnostic latency by 40% through edge-processing.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 bg-surface-container-high border border-white/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container">verified_user</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-white mb-2">HIPAA Monolith Security</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">Hardened kernel architecture ensuring patient data never leaves the encrypted local perimeter without multi-factor verification.</p>
                </div>
              </div>
            </div>
            <button className="mt-12 text-white font-bold text-xs uppercase tracking-widest border-b border-primary-container pb-2 hover:text-primary-container transition-colors cursor-pointer bg-transparent border-0 rounded-none inline-block">Request Case Study</button>
          </motion.div>
        </div>
      </section>

      {/* Real Estate Infrastructure (PrimeVault) */}
      <section className="w-full bg-surface-container-lowest py-32 border-y border-white/5">
        <div className="px-8 md:px-20 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mb-24">
            <span className="text-secondary-container font-label uppercase tracking-widest text-[10px] bg-secondary-container/10 px-3 py-1 mb-6 inline-block">Real Estate Infrastructure</span>
            <h2 className="font-headline text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">PRIMEVAULT:<br />THE ASSET BACKBONE.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-surface p-12 hover:bg-surface-container-high transition-all group">
              <span className="material-symbols-outlined text-secondary-container text-4xl mb-8 group-hover:scale-110 transition-transform">account_balance</span>
              <h3 className="font-headline font-bold text-2xl text-white mb-4">Liquidity Engine</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-light">Instantaneous settlement layers for commercial portfolio transactions exceeding $500M.</p>
              <ul className="text-[10px] font-label uppercase tracking-widest space-y-3 text-secondary-container/60">
                <li>• Real-time Ledger</li>
                <li>• Smart Escrow</li>
                <li>• Automated Compliance</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-surface p-12 hover:bg-surface-container-high transition-all group">
              <span className="material-symbols-outlined text-secondary-container text-4xl mb-8 group-hover:scale-110 transition-transform">apartment</span>
              <h3 className="font-headline font-bold text-2xl text-white mb-4">Asset Digital Twin</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-light">Full-spectrum digital modeling for physical assets, tracking maintenance and valuation in real-time.</p>
              <ul className="text-[10px] font-label uppercase tracking-widest space-y-3 text-secondary-container/60">
                <li>• IoT Integration</li>
                <li>• Predictive Valuation</li>
                <li>• Yield Analysis</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-surface p-12 hover:bg-surface-container-high transition-all group">
              <span className="material-symbols-outlined text-secondary-container text-4xl mb-8 group-hover:scale-110 transition-transform">shield_lock</span>
              <h3 className="font-headline font-bold text-2xl text-white mb-4">Title Sovereignty</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-light">Immutable chain-of-custody protocols for deed management and lien-free verification systems.</p>
              <ul className="text-[10px] font-label uppercase tracking-widest space-y-3 text-secondary-container/60">
                <li>• Zero-Knowledge Proofs</li>
                <li>• Instant Verification</li>
                <li>• Conflict Resolution</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fintech Infrastructure (Full Width Immersive) */}
      <section className="w-full min-h-screen bg-black relative flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img className="w-full h-full object-cover" alt="Financial networks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSThb8q_E1zTBCaI-KTJ2AYC0E8wNBiLPjJ4qHCJ_cbBcebCXmIT-XJUAFEPzOjR2FviRifP24ClDlWs-hPVsKBvKsjFmWXb-s1dRERc6FC0zKoPsRiZXPtKw_UjMIZq87WlUdv53Cc-q4bfBJcZkSEC_byhcwMOTkx0myWVKd0CNJ8SaIpwZi1Ul6qcdZYqJOLGvLXxyLfHqqRfCnvFGn11bySm0lrVWKBKy3pVmjqDZHtjP3LZ2RArLdcjs3s3Ap1CElP3G7MNM" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>
        <div className="relative z-10 px-8 md:px-20 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary-container font-label uppercase tracking-widest text-xs mb-6 block">Fintech Core Infrastructure</span>
              <h2 className="font-headline text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85]">TOTAL<br />CAPITAL<br />CONTROL.</h2>
              <p className="text-xl text-on-surface-variant max-w-md leading-relaxed mb-12 font-light">
                We deploy bespoke ledger systems that process millions of transactions per second with sub-millisecond finality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-t border-primary-container/30 pt-4">
                  <span className="block text-white font-bold mb-2">High Frequency</span>
                  <p className="text-xs text-on-surface-variant">Optimized for arbitrage and rapid-fire algorithmic trading flows.</p>
                </div>
                <div className="border-t border-primary-container/30 pt-4">
                  <span className="block text-white font-bold mb-2">Global Routing</span>
                  <p className="text-xs text-on-surface-variant">Intelligent cross-border liquidity pathfinding across 40+ fiat pairs.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-col justify-center">
              <div className="bg-surface-container-high/60 backdrop-blur-md p-1 border border-white/10">
                <div className="bg-[#09090B] p-8 md:p-12">
                  <h3 className="font-headline font-bold text-3xl text-white mb-6">BachStage Quantum Ledger</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                      <span className="text-on-surface-variant">Processing Speed</span>
                      <span className="text-primary-container font-mono">1.2M TPS</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                      <span className="text-on-surface-variant">Standard Latency</span>
                      <span className="text-primary-container font-mono">0.04ms</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                      <span className="text-on-surface-variant">Audit Logs</span>
                      <span className="text-primary-container font-mono">Immutable</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-on-surface-variant">Network Status</span>
                      <span className="flex items-center gap-2 text-primary-container font-mono">
                        <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                        NOMINAL
                      </span>
                    </div>
                  </div>
                  <button className="w-full mt-10 bg-white text-black py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary-container transition-colors cursor-pointer rounded-none">Initialize Integration</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Pillar Metric */}
      <section className="w-full bg-[#131315]">
        <div className="bg-linear-to-r from-black via-[#005227]/20 to-black w-full py-24 px-8 md:px-20 text-center">
          <span className="font-label text-[10px] tracking-[0.4em] uppercase text-on-surface-variant mb-6 block">Total Value Architected</span>
          <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }} className="font-headline text-[10vw] font-black text-primary-container leading-none tracking-tighter mb-4">
            $42.8B+
          </motion.div>
          <p className="font-label text-sm tracking-widest uppercase text-white/40">Across medical, real estate, and financial sectors globally</p>
        </div>
      </section>

    </main>
  );
};

export default Solutions;
