import { ShoppingCart, Star, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedSection from './AnimatedSection';

const PRODUCTS = [
  {
    id: 1,
    name: "Taladro Percutor Bosch GSB 13 RE",
    price: 85000,
    category: "Herramientas Eléctricas",
    rating: 4.8,
    image: "https://picsum.photos/seed/power-drill/400/400"
  },
  {
    id: 2,
    name: "Set de Llaves Combinadas Stanley",
    price: 32000,
    category: "Herramientas Manuales",
    rating: 4.9,
    image: "https://picsum.photos/seed/wrench-set/400/400"
  },
  {
    id: 3,
    name: "Amoladora Angular DeWalt 4 1/2",
    price: 72000,
    category: "Herramientas Eléctricas",
    rating: 4.7,
    image: "https://picsum.photos/seed/angle-grinder/400/400"
  },
  {
    id: 4,
    name: "Caja de Herramientas Reforzada",
    price: 15000,
    category: "Almacenamiento",
    rating: 4.5,
    image: "https://picsum.photos/seed/toolbox-hardware/400/400"
  },
  {
    id: 5,
    name: "Destornillador Inalámbrico 12V",
    price: 45000,
    category: "Herramientas Eléctricas",
    rating: 4.6,
    image: "https://picsum.photos/seed/cordless-screwdriver/400/400"
  },
  {
    id: 6,
    name: "Nivel Láser Autonivelante",
    price: 58000,
    category: "Medición",
    rating: 4.9,
    image: "https://picsum.photos/seed/laser-level/400/400"
  }
];

export default function ProductSection() {
  return (
    <AnimatedSection id="productos" className="py-16 bg-slate-950/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 text-center md:text-left">
          <div className="flex-1">
            <h2 className="font-display text-3xl font-bold mb-3">Productos Destacados</h2>
            <p className="text-slate-400 max-w-xl mx-auto md:mx-0">
              Equipamiento profesional para tus proyectos. Calidad certificada y garantía oficial en cada compra.
            </p>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            {['Todos', 'Eléctricas', 'Manuales', 'Hogar'].map((cat) => (
              <button 
                key={cat}
                className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border border-slate-700 hover:bg-brand-primary hover:border-brand-primary hover:text-slate-900 transition-all shrink-0"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-800"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold shadow-sm">
                  <Star size={12} className="text-brand-primary fill-brand-primary" />
                  {product.rating}
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-primary mb-2 block">
                  {product.category}
                </span>
                <h3 className="font-bold text-lg mb-4 line-clamp-1 group-hover:text-brand-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 line-through">$ {(product.price * 1.2).toLocaleString('es-AR')}</span>
                    <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                      $ {product.price.toLocaleString('es-AR')}
                    </span>
                  </div>
                  <button className="bg-slate-900 dark:bg-brand-primary text-white dark:text-slate-900 p-3 rounded-xl hover:scale-110 active:scale-95 transition-all shadow-lg shadow-slate-900/10">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 font-bold text-brand-primary hover:gap-4 transition-all">
            Ver todos los productos <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
