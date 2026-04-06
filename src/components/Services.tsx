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
    <AnimatedSection id="servicios" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Más que una ferretería, somos tu socio estratégico en cada obra, reparación o proyecto de hogar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-primary transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-slate-900 transition-all">
                <service.icon size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
