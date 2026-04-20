import { motion } from 'motion/react';
import { ArrowRight, Drill, Wrench, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center pt-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold mb-4">
            <ShieldCheck size={14} />
            <span>Calidad Garantizada en Once, CABA</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Herramientas que <br />
            <span className="text-brand-primary">Construyen</span> Sueños
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 mb-6 max-w-lg leading-relaxed">
            Desde 1985 brindando las mejores soluciones en ferretería, electricidad y plomería. 
            Envíos rápidos a todo Capital Federal.
          </p>
          <div className="flex flex-wrap gap-3">
            <a 
              href="#productos" 
              className="bg-brand-primary hover:bg-brand-primary/90 text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all hover:translate-y-[-2px] shadow-lg shadow-brand-primary/20"
            >
              Ver Catálogo <ArrowRight size={20} />
            </a>
            <a 
              href="#servicios" 
              className="bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-slate-900/10"
            >
              Nuestros Servicios
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 grayscale opacity-50 dark:invert">
            <div className="flex flex-col items-center gap-1">
              <Drill size={32} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Bosch</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Wrench size={32} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Stanley</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck size={32} />
              <span className="text-[10px] uppercase tracking-widest font-bold">DeWalt</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/hardware-store/800/1000" 
              alt="Ferretería Once" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-accent/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
        </motion.div>
      </div>
    </section>
  );
}
