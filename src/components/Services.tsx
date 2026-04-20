import { Truck, Wrench, ShieldCheck, Clock, CreditCard, Headphones } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SERVICES = [
  {
    icon: Truck,
    title: "Envíos en el Día",
    description: "Si estás en CABA, recibís tu pedido en menos de 24 horas. Gratis en compras mayores a $50.000."
  },
  {
    icon: Wrench,
    title: "Asesoramiento Técnico",
    description: "Nuestro equipo de expertos te ayuda a elegir la herramienta correcta para cada trabajo."
  },
  {
    icon: ShieldCheck,
    title: "Garantía Extendida",
    description: "Todos nuestros productos cuentan con garantía oficial y servicio técnico autorizado."
  },
  {
    icon: Clock,
    title: "Retiro Express",
    description: "Comprá online y retirá en nuestro local de Once en menos de 1 hora."
  },
  {
    icon: CreditCard,
    title: "Financiación",
    description: "Aceptamos todas las tarjetas. Cuotas sin interés en productos seleccionados."
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Nuestro chatbot con IA y equipo humano están listos para resolver tus dudas."
  }
];

export default function Services() {
  return (
    <AnimatedSection id="servicios" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold mb-3">Nuestros Servicios</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Más que una ferretería, somos tu socio estratégico en cada obra, reparación o proyecto de hogar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-brand-primary transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-slate-900 transition-all">
                <service.icon size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
