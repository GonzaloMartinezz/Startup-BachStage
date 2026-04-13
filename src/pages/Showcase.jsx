import React from 'react';
import { motion } from 'framer-motion';

const Showcase = () => {
  return (
    <main className="pt-20 bg-black min-h-screen">
      {/* Hero Section: The Engine Alpha */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#09090B]">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,#00FF85_1px,transparent_0)]" style={{ backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block px-3 py-1 mb-6 bg-primary-container/10 border-l-2 border-primary-container">
                <span className="text-primary-container text-[10px] font-bold uppercase tracking-[0.2em] font-headline">System Architecture: Engine Alpha</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black text-white font-headline leading-[0.85] tracking-tighter mb-8">
                PRECISION<br /><span className="text-[#00FF85]">BRUTALISM</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-xl mb-12 font-light leading-relaxed">
                High-performance data orchestration for the 22nd-century enterprise. Uncompromising structural integrity meets neon-charged velocity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-primary-container text-black px-10 py-5 font-headline font-black text-lg tracking-tighter uppercase hover:shadow-[0_0_30px_rgba(0,255,133,0.3)] transition-all cursor-pointer rounded-none">
                  Initialize Shell
                </button>
                <button className="border border-white/20 px-10 py-5 font-headline font-bold text-lg tracking-tighter uppercase text-white hover:bg-white/5 transition-all cursor-pointer rounded-none">
                  Documentation
                </button>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative bg-surface-container-lowest border border-white/5 p-6 shadow-[0_0_40px_-10px_rgba(0,255,133,0.15)] overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-[#FE6B00]"></div>
                  <div className="w-3 h-3 bg-zinc-700"></div>
                  <div className="w-3 h-3 bg-zinc-700"></div>
                </div>
                <div className="text-[10px] text-zinc-500 font-headline uppercase tracking-widest">Active Thread: A-01</div>
              </div>
              <div className="space-y-6 relative z-10">
                <div className="h-40 w-full bg-surface-container overflow-hidden border border-white/5">
                  <div className="w-full h-full opacity-40 bg-gradient-to-t from-primary-container/20 to-transparent flex items-end p-4">
                    <div className="flex items-end gap-1 w-full h-24">
                      {['40%', '70%', '55%', '90%', '65%', '80%', '100%'].map((h, i) => (
                        <motion.div key={i} className="flex-1 bg-primary-container" initial={{ height: 0 }} animate={{ height: h }} transition={{ duration: 1, delay: i * 0.1 }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1c1b1d] p-4 border border-white/5">
                    <div className="text-[10px] text-zinc-500 font-headline uppercase mb-1">Response</div>
                    <div className="text-2xl font-bold font-headline text-white">12ms</div>
                  </div>
                  <div className="bg-[#1c1b1d] p-4 border border-white/5">
                    <div className="text-[10px] text-zinc-500 font-headline uppercase mb-1">Load</div>
                    <div className="text-2xl font-bold font-headline text-primary-container">0.04%</div>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-zinc-500 font-mono text-[10px] leading-relaxed">
                    &gt; EXECUTING ALPHA_PROTOCOL...<br />
                    &gt; SYSTEM STATUS: NOMINAL<br />
                    &gt; ENCRYPTION: AES-512_QUANTUM<br />
                    &gt; UPTIME: 99.999%
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgwl6U9Xn_JopuS6vTxg97rl5lGPbRGaYdx9IstY0SvPMXkaAUVjik4nNQyiaxYGs8Fj4WFmbG6my5ZnKWczKLGZE_YBE0ktLPwErOC8Ec2MrPRMLL4u9WL-EnNhEEmgxAOYIlgamlIWbWsq6ovKIgWHqfXSSQupt_LLEROcRl6gz6boikwFR9YbnvczfwjVhuJs7ZxpOAWcxloo5qqPlLGu6LeDZ3XpNGRMSfdjKobmL4ZoRrNTtThkwQVXf6rHLqPXOgIjiWaJQ')]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Pillar Section */}
      <section className="bg-black py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              { label: "Throughput", value: "4.8", unit: "TB/s", desc: "Massive data ingestion pipelines built on the Alpha core.", color: "text-secondary-container" },
              { label: "Edge Nodes", value: "842", unit: "Units", desc: "Global distribution network with sub-millisecond propagation.", color: "text-primary-container" },
              { label: "Reliability", value: "5/9s", unit: "SLA", desc: "Military-grade uptime guarantees for critical infrastructure.", color: "text-white" }
            ].map((stat, i) => (
              <div key={i} className="bg-black p-12 hover:bg-white/5 transition-colors cursor-default">
                <span className={`text-[10px] ${stat.color} font-headline uppercase tracking-[0.3em] font-black block mb-4`}>{stat.label}</span>
                <div className="text-7xl font-black text-white font-headline tracking-tighter mb-4">{stat.value}<span className="text-3xl text-zinc-700 ml-2">{stat.unit}</span></div>
                <p className="text-zinc-500 text-sm max-w-xs">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid: Technical Features */}
      <section className="bg-black py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white font-headline tracking-tighter uppercase leading-none">Modular<br />Architecture</h2>
            </div>
            <div className="md:text-right">
              <div className="text-zinc-500 font-headline uppercase text-[10px] tracking-widest mb-2">Build for Scale</div>
              <div className="h-1 w-24 bg-secondary-container md:ml-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-surface-container-low p-10 relative overflow-hidden group border border-white/5 hover:border-white/20 transition-all cursor-pointer">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-6">dynamic_feed</span>
                <h3 className="text-3xl font-black text-white font-headline tracking-tight uppercase mb-4">Real-Time Sync Engine</h3>
                <p className="text-zinc-400 max-w-md leading-relaxed">Proprietary conflict resolution algorithms ensure data consistency across thousands of concurrent nodes without the latency tax.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-30 transition-opacity">
                <img className="w-full h-full object-cover" alt="Network visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoFhqiukrwEipcDPBYepMar3L0jIZufjpmz6IyrlwEP2QTpuLgg-YKyyuiv_gP0ZViqSTxl4eCRZ_LN4cqRY5YO-WMGQv6gaggvkcBDAgFfoUoPXYfk8syQ5cUffTLgo4TX1Y5djpgrZzxYxoZuCcUOLKr72xnmFhOPgjCUtx9-YKzGFFNuOMx6cZlJKk4UUdwWW7BJm3Fdx2FvO8vtW3XPAxJpxzcEcuw2-ZCcX6rDAbu8vcp8HC_yK08K0g4Gq7vhZLJunqaQYw" />
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-low p-10 border-l-4 border-secondary-container hover:bg-surface-container-high transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-secondary-container mb-6">bolt</span>
              <h3 className="text-3xl font-black text-white font-headline tracking-tight uppercase mb-4">Turbo API</h3>
              <p className="text-zinc-400 leading-relaxed">Native GraphQL support with automatic schema generation and edge-caching.</p>
            </div>
            <div className="md:col-span-4 bg-primary-container p-10 hover:brightness-110 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-black mb-6">terminal</span>
              <h3 className="text-3xl font-black text-black font-headline tracking-tight uppercase mb-4">Alpha SDK</h3>
              <p className="text-black/80 font-medium leading-relaxed">Developer-first toolchain for React, Vue, and Rust. Type-safe by default.</p>
            </div>
            <div className="md:col-span-8 bg-[#1c1b1d] p-10 flex flex-col md:flex-row gap-8 items-center group cursor-pointer border border-white/5 hover:border-white/20">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl text-white mb-6">query_stats</span>
                <h3 className="text-3xl font-black text-white font-headline tracking-tight uppercase mb-4">Predictive Analytics</h3>
                <p className="text-zinc-400 leading-relaxed">Integrated ML models that forecast resource exhaustion before it happens.</p>
              </div>
              <div className="flex-1 w-full h-40 bg-black border border-white/5 flex items-center justify-center p-4">
                <div className="w-full h-full bg-primary-container/10 flex items-center justify-center border border-primary-container/30 group-hover:bg-primary-container/20 transition-all">
                  <span className="text-[10px] text-primary-container font-headline tracking-widest uppercase">Visualizing_Future_State</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-container py-24 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
          <span className="text-[15rem] md:text-[30rem] font-black font-headline text-black leading-none select-none tracking-tighter">ALPHA</span>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <h2 className="text-6xl md:text-9xl font-black text-black font-headline tracking-tighter uppercase mb-12">Engine Alpha</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-black text-primary-container px-12 py-6 font-headline font-black text-lg md:text-xl tracking-tighter uppercase hover:bg-black/80 transition-all w-full sm:w-auto cursor-pointer rounded-none">
              Start Building Now
            </button>
            <button className="border-4 border-black text-black px-12 py-6 font-headline font-black text-lg md:text-xl tracking-tighter uppercase hover:bg-black hover:text-primary-container transition-all w-full sm:w-auto cursor-pointer rounded-none">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Showcase;
