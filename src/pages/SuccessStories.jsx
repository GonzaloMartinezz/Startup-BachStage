import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SuccessStories = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <main className="bg-black text-on-surface min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-8 overflow-hidden bg-[radial-gradient(at_0%_0%,#005227_0%,transparent_50%),radial-gradient(at_100%_100%,#09090B_0%,transparent_50%)]">
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-label text-primary-container tracking-[0.2em] mb-4 text-xs font-bold uppercase">
            Benchmark Authority
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-headline text-[clamp(4rem,10vw,8rem)] leading-[0.85] font-extrabold tracking-tighter text-white mb-8">
            SYSTEM<br />IMPACT
          </motion.h1>
          <div className="max-w-2xl">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-on-surface-variant font-light leading-relaxed">
              Quantifiable dominance across high-frequency industries. Our architecture is the bedrock for the world's most demanding digital infrastructures.
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#3b4b3d 1px, transparent 1px), linear-gradient(90deg, #3b4b3d 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </header>

      {/* Industry Section: Fintech Prime */}
      <section className="min-h-screen flex flex-col md:flex-row items-stretch border-t border-white/5 bg-black">
        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="mb-12">
              <span className="inline-block px-3 py-1 bg-primary-container text-black text-[10px] font-bold tracking-widest mb-6 uppercase">Sector: Global Finance</span>
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter italic">Fintech Prime</h2>
              <p className="text-on-surface-variant text-lg max-w-md">Engineering zero-latency execution for high-frequency trading platforms. Performance without compromise.</p>
            </div>
            {/* Data Pillar */}
            <div className="w-full bg-surface-container-low p-12 border-l-4 border-primary-container relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-9xl">show_chart</span>
              </div>
              <p className="font-label text-[10px] tracking-widest text-primary-container font-bold mb-2 uppercase">Core Metric</p>
              <div className="font-headline text-7xl md:text-8xl font-black text-primary-container tracking-tighter">99.9%</div>
              <p className="text-white font-bold text-xl uppercase tracking-tight">UPTIME RELIABILITY</p>
            </div>
            <div className="mt-12">
              <button className="bg-primary-container text-black px-8 py-4 font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_20px_rgba(0,255,133,0.3)] transition-all active:scale-95 cursor-pointer rounded-none">
                VIEW CASE STUDY
              </button>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 bg-surface-container overflow-hidden relative">
          <motion.img style={{ y: y1 }} className="absolute -top-20 -bottom-20 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Fintech server hardware" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzkOlgc185iKp2e2y6Yk4EUJ7s6WPA3lh4gJ-lF4SLMzwQjBlVsfTVb6aija_glT5EvuktIMIN2taXHMPWohDmOr73FLfsjs0uJpewW9zhEArCLs06KhXyD7Tvc8Z3ixxbOrZK2hnN-h1-ts44zT2VtU6HTI8opERmxawfCFNNt33zt1OeVXiUar4sM8gXCKceVD7bG7vEABqQOXb6GUtiYbAeKyZIiR1ZCWgo2FE9AFznzm3A-iuWNxsaf-zjIByuM8k7Wcm_3Ms" />
        </div>
      </section>

      {/* Industry Section: HealthFlow */}
      <section className="min-h-screen flex flex-col md:flex-row-reverse items-stretch bg-surface-dim">
        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="mb-12">
              <span className="inline-block px-3 py-1 bg-secondary-container text-white text-[10px] font-bold tracking-widest mb-6 uppercase">Sector: Bio-Informatics</span>
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter italic">HealthFlow</h2>
              <p className="text-on-surface-variant text-lg max-w-md">Processing petabytes of genomic data with sub-second retrieval times. Accelerating the future of medicine.</p>
            </div>
            {/* Data Pillar */}
            <div className="w-full bg-surface-container-highest p-12 border-l-4 border-secondary-container relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-9xl">database</span>
              </div>
              <p className="font-label text-[10px] tracking-widest text-secondary-container font-bold mb-2 uppercase">Throughput Capacity</p>
              <div className="font-headline text-7xl md:text-8xl font-black text-secondary-container tracking-tighter">1.2B</div>
              <p className="text-white font-bold text-xl uppercase tracking-tight">REAL-TIME QUERIES</p>
            </div>
            <div className="mt-12">
              <button className="border border-white/20 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all active:scale-95 cursor-pointer rounded-none">
                EXPLORE ARCHITECTURE
              </button>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 bg-surface-container-low overflow-hidden relative">
          <motion.img style={{ y: y2 }} className="absolute -top-20 -bottom-20 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="DNA data nodes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsr4T5dCYhlpaOFkwHTS1s8ugg1NgGvf5JuXVwr_iJkkPRgO4XbpNiBjuXQC7_MAs0s-1uHbgcFPzHvQi12vcpEYzdfcUNxuPGIhg9QlgGpWDCyJWVup464TnLo9a7gxv6P1xEH1ryDsh0JsE73ISsnB6QGJ0X3Occg06HPIGitSDYqT7NEMoADm3NKC-5aw9htjyD2cfAhGcwFframygBGnOBiMLz2uLYNpWNlXu7CQPhm9PHVWbEKCNfJSV1xyG1rFdP7HG6BF4" />
        </div>
      </section>

      {/* Industry Section: RealEstate Vault */}
      <section className="min-h-screen flex flex-col md:flex-row items-stretch border-t border-white/5 bg-black">
        <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="mb-12">
              <span className="inline-block px-3 py-1 bg-white text-black text-[10px] font-bold tracking-widest mb-6 uppercase">Sector: Luxury PropTech</span>
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter italic">RealEstate Vault</h2>
              <p className="text-on-surface-variant text-lg max-w-md">Secure, immutable transaction ledgers for multi-billion dollar asset transfers globally.</p>
            </div>
            {/* Data Pillar */}
            <div className="w-full bg-surface-container-low p-12 border-l-4 border-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-9xl">security</span>
              </div>
              <p className="font-label text-[10px] tracking-widest text-white font-bold mb-2 uppercase">Asset Protection</p>
              <div className="font-headline text-7xl md:text-8xl font-black text-white tracking-tighter">$42B</div>
              <p className="text-white/60 font-bold text-xl uppercase tracking-tight">MANAGED ASSETS</p>
            </div>
            <div className="mt-12">
              <button className="bg-white text-black px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-all active:scale-95 cursor-pointer rounded-none">
                SECURITY AUDIT
              </button>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 bg-surface-container overflow-hidden relative">
          <motion.img style={{ y: y1 }} className="absolute -top-20 -bottom-20 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Real Estate architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_z0JmFzx8DOsAEYve3mLukywrwZ-Ycpu46oTd9kIwQWglK0A6i8ng9QoPe6x9vmtBpXyECaL9tqQWDavRJzVb_1xNm1swrNyK0y75l8xXl_5YKi0ww5MDEIuVOF7aDvIHjBYJ25PzIdDjlfmJilnaySwTxaUXBhAl79PlCpIMaPoAZdU8mk1RH-UgPmR5bP97ZnZRzLIuhbn3sBUV2yanKQENnatEZRFwhnnhdaiozI9RCKvqVvbwiNjwKW6l30B63vLeFMESF8k" />
        </div>
      </section>
    </main>
  );
};

export default SuccessStories;
