import { useState, useEffect } from 'react';
import { Hammer, ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#productos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="bg-brand-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Hammer className="text-slate-900" size={24} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            ONCE<span className="text-brand-primary">EXPRESS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 pl-4 border-l border-slate-700">
            <button className="relative p-2 rounded-full hover:bg-slate-800 transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 mt-4 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium py-2 border-b border-slate-50 dark:border-slate-800"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between py-2">
                <span className="font-medium">Carrito</span>
                <ShoppingCart size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
