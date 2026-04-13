import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 rounded-none bg-[#09090B] flex flex-col md:flex-row justify-between items-center px-8 py-12">
      <div className="mb-8 md:mb-0 text-center md:text-left">
        <div className="text-lg font-black text-white mb-2">BachStage</div>
        <p className="font-body text-[10px] tracking-[0.2em] font-medium uppercase text-zinc-600">© {new Date().getFullYear()} BachStage. All rights reserved.</p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 mb-8 md:mb-0">
        <Link to="#" className="font-body text-[10px] tracking-[0.2em] font-medium uppercase text-zinc-600 hover:text-primary-container transition-colors duration-200 opacity-80 hover:opacity-100">Privacy Policy</Link>
        <Link to="#" className="font-body text-[10px] tracking-[0.2em] font-medium uppercase text-zinc-600 hover:text-primary-container transition-colors duration-200 opacity-80 hover:opacity-100">Terms</Link>
        <Link to="/contacto" className="font-body text-[10px] tracking-[0.2em] font-medium uppercase text-zinc-600 hover:text-primary-container transition-colors duration-200 opacity-80 hover:opacity-100">Contact</Link>
        <Link to="/contacto" className="font-body text-[10px] tracking-[0.2em] font-medium uppercase text-zinc-600 hover:text-primary-container transition-colors duration-200 opacity-80 hover:opacity-100">Socials</Link>
      </div>
    </footer>
  );
};

export default Footer;
