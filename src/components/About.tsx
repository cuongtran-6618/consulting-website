'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Briefcase, TrendingUp } from 'lucide-react';

export function About() {
  const t = useTranslations('about');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: TrendingUp, value: '10+', label: t('experience') },
    { icon: Users, value: '10+', label: t('clients') },
    { icon: Briefcase, value: '10+', label: t('projects') },
    // { icon: Award, value: '50+', label: t('awards') },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-primary font-semibold mb-4">{t('subtitle')}</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300"
            >
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
