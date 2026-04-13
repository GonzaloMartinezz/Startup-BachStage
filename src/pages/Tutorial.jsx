import React from 'react';
import { motion } from 'framer-motion';

const Tutorial = () => {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="px-8 md:px-24 mb-32 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-primary-container font-label font-bold uppercase tracking-[0.3em] text-xs block mb-4">Master the Monolith</span>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter leading-none text-white mb-8">
            PLATFORM <br /><span className="text-primary-container">ONBOARDING</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
            Welcome to the core. This guide will walk you through the architectural foundations of the BachStage ecosystem. Follow the steps precisely to unlock enterprise-grade performance.
          </p>
        </div>
      </section>

      {/* Step 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center border-t border-white/5">
        <div className="p-8 md:p-24 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-secondary-container font-label font-bold text-4xl block mb-2 tracking-tighter">Paso #1</span>
            <h2 className="text-5xl font-bold font-headline text-white uppercase tracking-tighter mb-6">Initialize Core</h2>
            <div className="w-16 h-1 bg-primary-container mb-8"></div>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Begin by authenticating your environment. Access the BachStage Console and configure your primary workspace parameters. This defines the operational scope of your entire monolith.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-sm font-label font-bold uppercase tracking-widest text-primary-container">
                <span className="material-symbols-outlined text-xs">check_circle</span> Create Organization Profile
              </li>
              <li className="flex items-center gap-4 text-sm font-label font-bold uppercase tracking-widest text-primary-container">
                <span className="material-symbols-outlined text-xs">check_circle</span> Define Access Tiers
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="bg-[#131315] h-full flex items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,#00FF85_0%,transparent_50%)]"></div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative w-[320px] aspect-[9/19] bg-black border-[8px] border-white/10 shadow-2xl z-10 rounded-[2rem]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/10 rounded-b-xl"></div>
            <img className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 rounded-[1.5rem]" alt="Profile setup screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg9IceU6nBYKPDEv2_dN7vOmrm796tbG1PstS3PZB3GN4mgYiKu_PWE2QgiHYqt1zTSB79DRDONxn4xdAsu51pWzoRM8_B-XO1MCOGda_lCivj-40ufIb4Cw8dUTRUBgSHPrDFnYR5eX-LJLHyJIQcwba14iTUBwHnmViViymymDKFvQ9GaQRxwYRVmr6sYZA1vPA9UZJmXQUpUiTOCI_acgscdQCKefNXZ9iirCZ7dfqbGvcU6XWq-A1eAfKqTvYgyqppmFn_kcY" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-[1.5rem]"></div>
          </motion.div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center border-t border-white/5">
        <div className="order-2 md:order-1 bg-[#09090B] h-full flex items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_30%_70%,#FE6B00_0%,transparent_50%)]"></div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative w-[320px] aspect-[9/19] bg-black border-[8px] border-white/10 shadow-2xl z-10 rounded-[2rem]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/10 rounded-b-xl"></div>
            <img className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 rounded-[1.5rem]" alt="Data analytics charts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ9an4UBW2-wYz1vCuuMiNWu3iMflQqOfgKY8jRHBX0fbGqTKYoTj56mIoLsvMH2hKpuSoN_2X3jWSL1G3QfZlui36NQmgAsS497HH36oWeOJAJVv2SiXTtfJiW21fX4fLhWmZjYfzT7lobEsYGiVNPcLFtFyU64szKloZyh95HgYHEo5azDccvttXwRt20WaFbxYVqkkR8T7vRBGFVOGewRx5sQGJ5blnF5tOsFPfn7lq3GT2BSc0UQcoXL_c9XIjkG84R8M-XDw" />
          </motion.div>
        </div>
        <div className="order-1 md:order-2 p-8 md:p-24 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-secondary-container font-label font-bold text-4xl block mb-2 tracking-tighter">Paso #2</span>
            <h2 className="text-5xl font-bold font-headline text-white uppercase tracking-tighter mb-6">Inject Streams</h2>
            <div className="w-16 h-1 bg-primary-container mb-8"></div>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Connect your data pipelines. BachStage supports asynchronous ingestion from multiple cloud providers. Secure your keys and establish the handshake between your existing infrastructure and the Console.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1C1B1D] p-6">
                <span className="block text-3xl font-bold text-primary-container mb-2">99.9%</span>
                <span className="block text-[10px] uppercase tracking-widest text-white/40">Uptime Sla</span>
              </div>
              <div className="bg-[#1C1B1D] p-6">
                <span className="block text-3xl font-bold text-primary-container mb-2">&lt;2ms</span>
                <span className="block text-[10px] uppercase tracking-widest text-white/40">Latency Peak</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center border-t border-white/5">
        <div className="p-8 md:p-24 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-secondary-container font-label font-bold text-4xl block mb-2 tracking-tighter">Paso #3</span>
            <h2 className="text-5xl font-bold font-headline text-white uppercase tracking-tighter mb-6">Deploy Network</h2>
            <div className="w-16 h-1 bg-primary-container mb-8"></div>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Finalize the deployment by activating your network nodes. Monitor real-time performance through the BachStage Insights dashboard and scale your capacity with a single command.
            </p>
            <button className="bg-primary-container text-black font-label font-bold uppercase tracking-widest px-8 py-4 w-full md:w-max transition-all hover:shadow-[0_0_20px_rgba(0,255,133,0.3)] cursor-pointer rounded-none">
              Launch Dashboard
            </button>
          </motion.div>
        </div>
        <div className="bg-[#131315] h-full flex items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-b from-[#00FF85] to-transparent"></div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative w-[320px] aspect-[9/19] bg-black border-[8px] border-white/10 shadow-2xl z-10 rounded-[2rem]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/10 rounded-b-xl"></div>
            <img className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 rounded-[1.5rem]" alt="Deployment confirmation screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxdlKYeSL_b_U-2GKdryjgWC8MIFqiNVkgJFPqeAl9Si1l895TSNAOx11NkmOo1Zl_XI6LDWQZ4kj5BfIaHR3VuBUKXvVNweLEnGykrnrVDZ_aN9d7lB_vwwV0X1T6k6Il38eJlMbBAHhaeEC7dOsnFer4LC-Md50gcc5ONAFJzH-NtkBIQDVgeCzDt3SmwnMKyaWxQx9-I0Jl6oYZi8C7eraMEChg6qz9KPQUuyA2slOegQEGP9rflYeeFeK9jTqYcd3qPecXVAM" />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Tutorial;
