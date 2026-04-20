import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-surface-container-high border-l-2 border-primary-container mb-6">
            <span className="text-[0.75rem] font-label uppercase tracking-[0.2em] text-primary-container font-bold">SYSTEM_PRICING_V4.0</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-white mb-8 leading-none">
            ENGINEERED FOR <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-primary-container to-secondary-container">PERFORMANCE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
            Select your architecture. High-contrast precision deployments for modern digital infrastructure.
          </p>
        </div>
      </section>

      {/* Pricing Columns */}
      <section className="px-8 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 border border-outline-variant/20">
          {/* Plan A: Landing Page */}
          <div className="bg-surface p-12 flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors duration-500">
            <div>
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h2 className="text-2xl font-headline font-bold text-white mb-2 uppercase tracking-widest">Plan A</h2>
                  <p className="text-on-surface-variant font-label text-xs tracking-widest">LANDING_PAGE_DEPLOYMENT</p>
                </div>
                <div className="text-right">
                  <span className="text-5xl font-headline font-bold text-white">$499</span>
                  <span className="block text-xs font-label text-outline-variant uppercase tracking-tighter mt-1">Single Deployment</span>
                </div>
              </div>
              <ul className="space-y-6 mb-16">
                {[
                  "High-Performance Static Build",
                  "Obsidian Dark Mode Native",
                  "SEO Monolith Optimization",
                  "Edge Network Hosting (1 Year)"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 group/item">
                    <span className="material-symbols-outlined text-primary-container text-xl">check_circle</span>
                    <span className="text-on-surface font-body font-medium tracking-tight group-hover/item:text-white transition-colors">{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-4 group/item opacity-40">
                  <span className="material-symbols-outlined text-outline-variant text-xl">cancel</span>
                  <span className="text-on-surface font-body line-through">SaaS Functional Integrations</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-5 border border-outline-variant text-white font-headline font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-all cursor-pointer">
              Initialize Protocol
            </button>
          </div>

          {/* Plan B: Web Pro/SaaS */}
          <div className="bg-surface-container-lowest p-12 flex flex-col justify-between relative group overflow-hidden border-2 border-primary-container/20">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/5 blur-[100px] pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="bg-primary-container text-on-primary text-[0.6rem] font-bold px-2 py-0.5 mb-2 inline-block uppercase tracking-widest">Recommended</div>
                  <h2 className="text-2xl font-headline font-bold text-white mb-2 uppercase tracking-widest">Plan B</h2>
                  <p className="text-primary-container font-label text-xs tracking-widest">WEB_PRO_SAAS_ARCHITECTURE</p>
                </div>
                <div className="text-right">
                  <span className="text-5xl font-headline font-bold text-white">$1,299</span>
                  <span className="block text-xs font-label text-outline-variant uppercase tracking-tighter mt-1">Starting Infrastructure</span>
                </div>
              </div>
              <ul className="space-y-6 mb-16">
                {[
                  "Full Stack SaaS Framework",
                  "Dynamic Database & Auth Flow",
                  "Custom Component Library",
                  "API First Integration Layer",
                  "Priority CI/CD Pipeline Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 group/item">
                    <span className="material-symbols-outlined text-primary-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="text-on-surface font-body font-semibold tracking-tight transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="relative w-full py-5 bg-primary-container text-on-primary font-headline font-bold uppercase tracking-[0.2em] text-sm hover:shadow-[0_0_40px_rgba(0,255,133,0.4)] transition-all cursor-pointer">
              Initialize Protocol
            </button>
          </div>
        </div>
      </section>

      {/* Technical Comparison Table */}
      <section className="px-8 py-24 bg-surface-dim relative overflow-hidden bg-[radial-gradient(#1c1b1d_1px,transparent_1px)] bg-size-[24px_24px]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-headline font-bold text-white mb-16 text-center tracking-tighter">TECHNICAL SPECIFICATIONS</h3>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant/30">
                  <th className="py-6 font-label text-xs text-outline-variant uppercase tracking-widest">Hardware Attribute</th>
                  <th className="py-6 font-label text-xs text-primary-container uppercase tracking-widest text-center">Plan A</th>
                  <th className="py-6 font-label text-xs text-secondary-container uppercase tracking-widest text-center">Plan B</th>
                </tr>
              </thead>
              <tbody className="text-on-surface">
                {[
                  { attr: "Response Latency", a: "< 150ms", b: "< 50ms" },
                  { attr: "Bandwidth Quota", a: "100 GB", b: "Unlimited" },
                  { attr: "Database Nodes", a: "—", b: "Multi-Region Redundant" },
                  { attr: "Security Layer", a: "Standard SSL", b: "Advanced Encryption + WAF" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/10 hover:bg-surface-container/30 transition-colors">
                    <td className="py-8 font-headline font-bold text-sm tracking-widest uppercase">{row.attr}</td>
                    <td className="py-8 text-center text-sm font-body font-medium">{row.a}</td>
                    <td className="py-8 text-center text-sm font-body font-medium">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Metric Pillar Section */}
      <section className="py-32 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-linear-to-r from-[#005227] to-background p-16 flex flex-col md:flex-row justify-between items-center gap-12 border-l-8 border-primary-container">
            <div className="flex-1">
              <span className="font-label text-xs text-primary-container tracking-[0.3em] font-bold block mb-4 uppercase">System Efficiency</span>
              <h4 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tighter leading-tight">
                OPTIMIZED FOR <br />99.99% UPTIME
              </h4>
            </div>
            <div className="text-center md:text-right">
              <div className="text-7xl md:text-9xl font-headline font-black text-primary-container leading-none">0.2s</div>
              <p className="font-label text-xs text-on-surface-variant tracking-widest mt-4 uppercase">Average Load Time Monolith Deploy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Imagery Showcase */}
      <section className="px-8 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="aspect-square bg-surface-container-low overflow-hidden">
            <img alt="Cybersecurity interface" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCubXNythpIxgmC4zvMWoBP4rRNlcyAEYrAg3gd8b2a7DMk0Le_wYTaTmiYI2ffijpmOtw34qH5_Az1iw8mtKd0Amwh4yhSikppYhWyL-o7MLQv27L-tbTllUkcNquUvEBtBCpgrG5vr4XheWyD2dvehqrfl--knvXQ3Y4b19ptjZjxJjuJq_EcyGY5oQfg_FvbcmuGAuTQG5zJEFzbHq0SP3gTnYr_vcWt3eZ4HX8RJq6XgF31c_RsiWrz26i_YYVMr_seFeMprgQ" />
          </div>
          <div className="aspect-square bg-surface-container-low overflow-hidden">
            <img alt="Blockchain visualization" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwxnoyekUrJN6qvEKpmJlBlbPmtxGAPsuaiBWLX5YkOmRXRpETEQ5YwBgMaBZJG3cvF2B-2U_4WPQZaURFdsS4SYDm-RNEPTUalG27jnp9-5pCVS_xXB8IEUlFyEuIrTRm0CIiQ8b3nnQ0QfAbJWxIiTP5zcbD8NtK4jr2b8KqKkdDwLDttilSsK_N8mLSYAGEFeoExY8F-FCGBw2WvFPmTrCRiBl_fvUE6k9gEg3sjLWBgJlGvgb9pimW4zuVnlfgv-gJ8IuoS6s" />
          </div>
          <div className="aspect-square bg-surface-container-low overflow-hidden">
            <img alt="Microchip macro" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8g2LB5ZdLgTM6-IlLhwcVbALvZOkrxm3K_zEzqcW7gcjkMoIAgBUICMI-CkMv018v5-fDJAmOhKn-FYgh8ksdLpZCRP4NpzqW3FCZjlmyI430MO8gNt03KgR2UC1eNoTpjmiIChswLjarmcFt8Hn-MgyiLBKHV9iO2fJ06jhbD92owFlYQunW64_glXneihKD_eL4VMnwq4bTRAploQddLPMooVuYKsx6UlbELX-kez_kARdh_Sht6QET_ynJ1vCfAVHqY4Fp4Do" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
