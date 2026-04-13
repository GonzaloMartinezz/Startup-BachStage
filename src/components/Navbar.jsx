import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const links = [
    { path: '/inicio', label: 'Inicio' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/showcase', label: 'Showcase' },
    { path: '/security', label: 'Security' },
    { path: '/docs', label: 'Docs' },
    { path: '/stories', label: 'Stories' },
    { path: '/tutorial', label: 'Tutorial' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/acerca', label: 'About' },
    { path: '/contacto', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 w-full z-50 rounded-none transition-all duration-300 flex justify-between items-center px-6 md:px-8 h-20 
        ${scrolled || mobileMenuOpen ? "bg-black/80 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(254,107,0,0.3)]" : "bg-transparent"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link to="/inicio" className="text-2xl font-black tracking-tighter text-white z-50">BachStage</Link>
        
        {/* Desktop Links */}
        <div className="hidden xl:flex gap-6 items-center">
          {links.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`font-label font-bold text-[11px] tracking-widest uppercase hover:text-primary-container transition-all duration-300 active:scale-95 ${isActive(link.path) ? 'text-primary-container border-b-[1.5px] border-secondary-container pb-1' : 'text-white/70'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 z-50">
          <Link to="/contacto" className="hidden md:inline-block bg-primary-container text-on-primary px-6 py-2 font-headline font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_20px_rgba(0,255,133,0.4)] transition-all cursor-pointer rounded-none">
            Get Started
          </Link>
          <button 
            className="xl:hidden text-white hover:text-primary-container transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 pb-10 px-8 overflow-y-auto flex flex-col xl:hidden"
          >
            <div className="flex flex-col gap-6 mt-8">
              {links.map((link, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.path}
                >
                  <Link 
                    to={link.path} 
                    className={`block font-headline font-bold text-2xl uppercase tracking-tighter ${isActive(link.path) ? 'text-primary-container' : 'text-white/80 hover:text-white'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto pt-10">
              <Link to="/contacto" className="block w-full text-center bg-primary-container text-on-primary px-6 py-4 font-headline font-bold text-lg tracking-widest uppercase cursor-pointer rounded-none">
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
