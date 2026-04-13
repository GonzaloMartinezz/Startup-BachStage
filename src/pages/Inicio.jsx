import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover grayscale brightness-[0.3]" alt="Monolithic dark futuristic architectural structure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLiJQcrJL2WmjuWX2TiPR9bzZs7ygUmjWOEY0AYo-kzrcO0p4O-7pxbnDRXre-znBbV5s5eUUe239FX9cuZVaWCS5mzCbTHxZ1LZB92uPCveXgLOp3epAwGhZpHRShsBecbng_fu1pvoY-JCwXvt7O9LZPSYngeSFd8-f858A30B6L6TVpicEMNSuVSR3G1CFU2p5EmpjQYoXu3-wBi44-etdGlPJqUJEnMqBEg4M4IY0GjG21SNN2ZBJn27mMliz8FFlhcTldiws" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-8 pb-24 md:pb-32 w-full max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="inline-block text-primary-container font-label font-bold text-xs tracking-[0.3em] uppercase mb-6 bg-primary-container/10 px-3 py-1">Precision Digital Architecture</span>
            <h1 className="font-headline font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.9] text-white tracking-tighter mb-12">
              SOLUCIONES <br /> <span className="text-primary-container">DIGITALES</span> <br /> ESCALABLES.
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <Link to="/contacto" className="inline-block bg-primary-container text-on-primary px-10 py-5 text-lg font-black uppercase tracking-tighter hover:bg-white transition-colors duration-300 rounded-none cursor-pointer">
                CRECER AHORA
              </Link>
              <p className="text-white/60 font-medium max-w-sm text-lg leading-tight">
                Negocios que buscan crecer bajo el estándar de la ingeniería de alto rendimiento.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Áreas de Dominio (Bento Grid) */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h2 className="font-headline font-bold text-5xl md:text-7xl text-white tracking-tighter uppercase">Áreas de <br /> Dominio</h2>
            </div>
            <div className="max-w-md">
              <p className="text-zinc-500 text-lg">Especialización sectorial para resultados de precisión. No hacemos sitios web, construimos activos digitales de alto impacto.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/5">
            {[
              { icon: 'dentistry', title: 'Odontología', desc: 'Sistemas de reserva y automatización para clínicas premium.', bg: 'bg-surface-dim' },
              { icon: 'domain', title: 'Real Estate', desc: 'Catálogos inmersivos y gestión de leads de alta conversión.', bg: 'bg-surface-container-low' },
              { icon: 'gavel', title: 'Servicios Legales', desc: 'Ecosistemas seguros y plataformas de autoridad jurídica.', bg: 'bg-surface-dim' },
              { icon: 'nutrition', title: 'Nutrición', desc: 'Apps progresivas y CRM especializado en salud.', bg: 'bg-surface-container-low' }
            ].map((niche, i) => (
              <div key={i} className={`group relative aspect-square ${niche.bg} p-10 flex flex-col justify-between hover:bg-primary-container transition-all duration-500 cursor-pointer border-r border-b border-white/5`}>
                <span className="material-symbols-outlined text-4xl text-primary-container group-hover:text-on-primary">{niche.icon}</span>
                <div>
                  <h3 className="font-headline font-bold text-2xl text-white group-hover:text-on-primary uppercase mb-2">{niche.title}</h3>
                  <p className="text-zinc-500 text-sm group-hover:text-on-primary/70">{niche.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Showcase */}
      <section className="py-32 px-8 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 w-full aspect-video bg-zinc-900 shadow-2xl border border-white/10 p-2">
              <div className="w-full h-full bg-surface-container-lowest relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-surface-variant flex items-center px-4 gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="ml-4 h-4 w-48 bg-black/40"></div>
                </div>
                <img className="w-full h-full object-cover pt-8 opacity-80" alt="Dashboard preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbVLxUGqEqefOHuUmBJvBpKmz-zdOmoYs5ahITwmtfA-nKDnomfqso_jp-mAWL5GW18Lp5ZnhsAUqS7CtauudY4_l9L9hvISVOiHFrJSF5ZT3VWablo3MUPrxSzQc73KqYBYGgpoVBSEbabPGIE_nCnalFeXdQakUlfPcYoCIzsIPXZxoAqVkQNan0oEZU3BpUufctOLBh6qHyYk0pi0FDtCYGNRYMN4eXbj4lPfWP2rkceT0Qymj2P1L6bM72jAKenVe4klXbQjc" />
              </div>
            </div>
            {/* Mobile Mockup */}
            <div className="absolute -bottom-16 -right-8 z-20 w-48 aspect-[9/19] bg-zinc-900 border-4 border-white/10 shadow-2xl overflow-hidden hidden md:block">
              <img className="w-full h-full object-cover" alt="Mobile interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxb-2gZl13Lh-w_y55k9eK9hzfAm9mye0yKeceBgxO0qyi_D7BsIemTSz1Q4a5qTewZyCVrPL3AKtXgxjzZQiUnXLFnqH7A2-gTY0dcpmm20IBR8uSsOZxAVkBiW8TwuOWc8Eeo189jousVrCxE7d5ua5lA5--Et5IaQLZ4uDUv5sCAV8Pl6EB5Bt2H78UmozlROxDZP7hUJEI-KKXTIvsFHDTLk1fcGL2Td9lOUgEuyiKSpoce4tFTWhN3lBuMACEJ1n67gdgy1s" />
            </div>
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-container/10 blur-[120px] rounded-full -z-10"></div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-secondary-container font-label font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Proprietary Tech</span>
            <h2 className="font-headline font-bold text-6xl text-white tracking-tighter uppercase mb-8">BachEngine <span className="text-primary-container">v2.0</span></h2>
            <p className="text-zinc-400 text-xl leading-relaxed mb-12">
              Nuestro motor propietario diseñado para la escalabilidad. Una infraestructura robusta que centraliza marketing, ventas y operaciones en una sola interfaz monolítica.
            </p>
            <ul className="space-y-6 mb-12">
              <li className="flex items-center gap-4 text-white font-bold tracking-tight">
                <span className="material-symbols-outlined text-primary-container">bolt</span> LATENCIA CERO EN RENDIMIENTO
              </li>
              <li className="flex items-center gap-4 text-white font-bold tracking-tight">
                <span className="material-symbols-outlined text-primary-container">shield_with_heart</span> SEGURIDAD NIVEL BANCARIO
              </li>
              <li className="flex items-center gap-4 text-white font-bold tracking-tight">
                <span className="material-symbols-outlined text-primary-container">query_stats</span> ANALYTICS EN TIEMPO REAL
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-headline font-bold text-5xl md:text-8xl text-white tracking-tighter uppercase">Inversión Digital</h2>
            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto uppercase tracking-widest text-sm font-bold">Escoge tu punto de entrada al ecosistema</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto border border-white/10">
            {/* Plan 1 */}
            <div className="p-16 bg-surface-dim border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-headline font-bold text-3xl text-white uppercase mb-4">Plan Landing Page</h3>
                <p className="text-zinc-500 mb-8 font-medium">Ideal para lanzamientos tácticos y validación de oferta.</p>
                <div className="text-5xl font-bold text-primary-container mb-12 font-headline tracking-tighter">$1.499 <span className="text-lg text-zinc-600 font-normal line-through ml-2">/ mensual</span> <span className="text-sm border ml-2 border-primary-container px-2 py-1 uppercase tracking-widest leading-none">Pago único</span></div>
                <ul className="space-y-4 mb-12">
                  <li className="flex gap-3 text-zinc-300 text-sm"><span className="material-symbols-outlined text-primary-container text-sm">check</span> Diseño Custom 100% Obsidian</li>
                  <li className="flex gap-3 text-zinc-300 text-sm"><span class="material-symbols-outlined text-primary-container text-sm">check</span> Optimización de Conversión (CRO)</li>
                  <li className="flex gap-3 text-zinc-300 text-sm"><span class="material-symbols-outlined text-primary-container text-sm">check</span> Hosting Premium Integrado</li>
                </ul>
              </div>
              <Link to="/contacto" className="inline-block text-center w-full border-2 border-primary-container text-primary-container py-4 font-bold uppercase tracking-widest hover:bg-primary-container hover:text-on-primary transition-all rounded-none cursor-pointer">Seleccionar</Link>
            </div>
            {/* Plan 2 */}
            <div className="p-16 bg-white flex flex-col justify-between">
              <div>
                <div className="bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-block mb-4">Recomendado</div>
                <h3 className="font-headline font-bold text-3xl text-black uppercase mb-4">Plan Web Pro + Plataforma SaaS</h3>
                <p className="text-zinc-600 mb-8 font-medium">Estructura para empresas listas para centralizar su poder.</p>
                <div className="text-5xl font-bold text-black mb-12 font-headline tracking-tighter">Custom <span className="text-lg text-zinc-400 font-normal">/ suscripción</span></div>
                <ul className="space-y-4 mb-12">
                  <li className="flex gap-3 text-zinc-800 text-sm"><span className="material-symbols-outlined text-black text-sm">check</span> BachEngine v2.0 Integrado</li>
                  <li className="flex gap-3 text-zinc-800 text-sm"><span className="material-symbols-outlined text-black text-sm">check</span> Multi-Usuario & Base de Datos Propia</li>
                  <li className="flex gap-3 text-zinc-800 text-sm"><span className="material-symbols-outlined text-black text-sm">check</span> Backend con Node.js & Panel Admin</li>
                </ul>
              </div>
              <Link to="/contacto" className="inline-block text-center w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-primary-container hover:text-on-primary transition-all rounded-none cursor-pointer">Agendar Llamada</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre / CTA */}
      <section className="py-48 px-8 bg-black relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#00FF85_0%,_transparent_50%)] blur-[120px]"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-headline font-bold text-5xl md:text-9xl text-white tracking-tighter leading-[0.8] mb-16 uppercase">¿LISTO PARA EL SIGUIENTE NIVEL?</h2>
          <Link to="/contacto" className="inline-block bg-primary-container text-on-primary px-16 py-8 text-2xl font-black uppercase tracking-tighter hover:scale-110 hover:shadow-[0_0_50px_rgba(0,255,133,0.5)] transition-all duration-300 rounded-none cursor-pointer">
            INICIAR PROYECTO
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Inicio;
