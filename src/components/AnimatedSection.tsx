import { motion } from 'motion/react';
import { ReactNode, useMemo } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  // Randomly decide if it comes from left or right
  const direction = useMemo(() => (Math.random() > 0.5 ? 1 : -1), []);

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, x: direction * 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        opacity: { duration: 0.5 }
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
