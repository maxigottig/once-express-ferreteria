import { Hammer, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Footer() {
  return (
    <AnimatedSection id="contacto" className="bg-slate-900 text-slate-100 pt-16 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-brand-primary p-2 rounded-lg">
                <Hammer className="text-slate-900" size={24} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                ONCE<span className="text-brand-primary">EXPRESS</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tu ferretería de confianza en el corazón de Once. 
              Más de 40 años brindando soluciones a profesionales y hobbistas.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-slate-900 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#inicio" className="hover:text-brand-primary transition-colors">Inicio</a></li>
              <li><a href="#productos" className="hover:text-brand-primary transition-colors">Productos</a></li>
              <li><a href="#servicios" className="hover:text-brand-primary transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-brand-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-primary shrink-0" size={18} />
                <span>Av. Pueyrredón 450, Once, <br />Capital Federal, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-primary shrink-0" size={18} />
                <span>+54 11 4567-8900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-primary shrink-0" size={18} />
                <span>info@onceexpress.com.ar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Ferretería Once Express. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
