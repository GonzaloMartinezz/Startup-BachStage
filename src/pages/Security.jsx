import React from 'react';
import { motion } from 'framer-motion';

const Security = () => {
  return (
    <main className="pt-20 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center px-8 md:px-20 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <img className="w-full h-full object-cover" alt="Encrypted server node" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKpoARvqIzWD37GghZ-VRoBv_D3XfUPeBnTvc7KdU9hVTYuXrhB_1IuNxdVSAZ9p95qooyrWbh3GlJc_ZTPbsYDrU2H5L9eDJ_ekH-LuDTUnXhBIjFidIq8UugUlwVDnbfLToTkAC2PZLczm25z09nkI1rsd0grLQw8HNip1cbR-aRXoSO_LY4nzil-Y24dmgIrAeE8yFkyLyJMMqZ0MlLKe8hPTNi9orTp1_KO2Ua1-Q5tIt985PmBSF71LCXLk13yDQqQQIMS1Y" />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-3 py-1 bg-primary-container text-black font-label text-[10px] tracking-[0.2em] font-bold mb-6">INTERNAL CLEARANCE REQUIRED</div>
            <h1 className="text-7xl md:text-9xl font-headline font-bold tracking-tighter text-white leading-[0.85] mb-8">
              TITAN<br />PROTOCOLS
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
              Uncompromising architecture for the global entertainment industry. We secure the infrastructure that powers the world's most elite performers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid: Security Layers */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/5">
          {/* Card 1 */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-white/5 hover:bg-surface-container-low transition-all group cursor-pointer bg-[#0e0e10]">
            <div className="mb-12">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4 block">lock</span>
              <h3 className="text-2xl font-headline font-bold text-white mb-4">AES-256 Encryption</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">Military-grade cryptographic standards applied at rest and in transit across all monolith clusters.</p>
            </div>
            <div className="font-label text-[10px] tracking-widest text-primary-container font-bold uppercase space-y-1">
              <div className="flex justify-between"><span>BIT-DEPTH</span><span>256-BIT</span></div>
              <div className="flex justify-between"><span>CIPHER</span><span>FIPS 140-2</span></div>
              <div className="flex justify-between"><span>LATENCY</span><span>&lt;0.2MS</span></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-white/5 hover:bg-surface-container-low transition-all group cursor-pointer bg-[#0e0e10]">
            <div className="mb-12">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4 block">shield_with_heart</span>
              <h3 className="text-2xl font-headline font-bold text-white mb-4">mTLS Auth</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">Mutual Transport Layer Security ensures that every micro-service connection is verified and encrypted.</p>
            </div>
            <div className="font-label text-[10px] tracking-widest text-primary-container font-bold uppercase space-y-1">
              <div className="flex justify-between"><span>PROTOCOL</span><span>TLS 1.3</span></div>
              <div className="flex justify-between"><span>HANDSHAKE</span><span>ASYMMETRIC</span></div>
              <div className="flex justify-between"><span>REVOCATION</span><span>OCSP STAPLING</span></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-white/5 hover:bg-surface-container-low transition-all group cursor-pointer bg-[#0e0e10]">
            <div className="mb-12">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4 block">verified_user</span>
              <h3 className="text-2xl font-headline font-bold text-white mb-4">SOC2 Compliance</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">Continuous auditing of our trust service criteria for security, availability, and processing integrity.</p>
            </div>
            <div className="font-label text-[10px] tracking-widest text-primary-container font-bold uppercase space-y-1">
              <div className="flex justify-between"><span>TYPE</span><span>SOC2 TYPE II</span></div>
              <div className="flex justify-between"><span>AUDIT</span><span>REAL-TIME</span></div>
              <div className="flex justify-between"><span>REDUNDANCY</span><span>99.999%</span></div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-10 hover:bg-surface-container-low transition-all group cursor-pointer bg-[#0e0e10]">
            <div className="mb-12">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4 block">admin_panel_settings</span>
              <h3 className="text-2xl font-headline font-bold text-white mb-4">RBAC Redefined</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">Granular Role-Based Access Control mapped to your organizational structure with zero-trust defaults.</p>
            </div>
            <div className="font-label text-[10px] tracking-widest text-primary-container font-bold uppercase space-y-1">
              <div className="flex justify-between"><span>ACCESS</span><span>ZERO-TRUST</span></div>
              <div className="flex justify-between"><span>IDENTITY</span><span>SAML 2.0</span></div>
              <div className="flex justify-between"><span>LOGGING</span><span>IMMUTABLE</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Server Chip Section */}
      <section className="relative w-full h-[600px] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img className="absolute inset-0 w-full h-full object-cover z-0" alt="Server chip" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeQavuvu71UY1LtXVUFbX9CPo-L9ZAOMAGOyoQqbALhCF5mxZhLmX0tQ1pnUEMpznkq5QWlzoR12AxKDxZaJ368ec4gC2zyX9L0DqNC0L911Qi9BzHPbXZ2VGvpG7_uVETrNO9nXlrLl3gkhCXLLMLdRrKFKYcDueIU93Wrp41syZdiBGFpR6mQm4LlyXBGDX5qbGmsWbQRAFB6oUZ1ejOLCcKID-VHOjBOauS0CmmCb4R3YLEb43iGULhCSppFWFC360qlp61o6Q" />
        <div className="relative z-20 px-8">
          <div className="mb-12 h-px w-24 bg-primary-container mx-auto"></div>
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-white tracking-tighter mb-6">CORE RESILIENCE</h2>
          <p className="text-primary-container font-label text-xs tracking-[0.4em] uppercase mb-12">Monolithic architectural integrity</p>
          <button className="bg-primary-container text-black px-12 py-5 font-headline font-bold tracking-tighter uppercase hover:shadow-[0_0_40px_rgba(0,255,133,0.3)] transition-all cursor-pointer rounded-none">
            Review Whitepaper
          </button>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="bg-[#09090b] py-24 px-8 md:px-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <div className="w-full">
            <div className="bg-[radial-gradient(at_0%_0%,#005227_0px,transparent_50%),radial-gradient(at_100%_100%,#09090b_0px,transparent_50%)] p-12 border-l-4 border-primary-container">
              <div className="text-xs font-label tracking-widest text-primary-container mb-2 uppercase">Uptime Performance</div>
              <div className="text-6xl md:text-7xl font-headline font-bold text-white tracking-tighter">99.999%</div>
              <div className="mt-4 text-zinc-500 text-[10px] font-label tracking-widest uppercase">Global Availability Index</div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[radial-gradient(at_0%_0%,#005227_0px,transparent_50%),radial-gradient(at_100%_100%,#09090b_0px,transparent_50%)] p-12 border-l-4 border-primary-container">
              <div className="text-xs font-label tracking-widest text-primary-container mb-2 uppercase">Threat Detection</div>
              <div className="text-6xl md:text-7xl font-headline font-bold text-white tracking-tighter">&lt;14MS</div>
              <div className="mt-4 text-zinc-500 text-[10px] font-label tracking-widest uppercase">Heuristic Analysis Window</div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[radial-gradient(at_0%_0%,#005227_0px,transparent_50%),radial-gradient(at_100%_100%,#09090b_0px,transparent_50%)] p-12 border-l-4 border-primary-container">
              <div className="text-xs font-label tracking-widest text-primary-container mb-2 uppercase">Encrypted Nodes</div>
              <div className="text-6xl md:text-7xl font-headline font-bold text-white tracking-tighter">14,280</div>
              <div className="mt-4 text-zinc-500 text-[10px] font-label tracking-widest uppercase">Active Secure Instances</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Security;
