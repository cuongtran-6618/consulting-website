'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Pricing() {
  const t = useTranslations('pricing');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: t('starter.name'),
      description: t('starter.description'),
      price: t('starter.price'),
      features: [
        t('starter.features.0'),
        t('starter.features.1'),
        t('starter.features.2'),
        t('starter.features.3'),
        t('starter.features.4'),
      ],
    },
    {
      name: t('professional.name'),
      description: t('professional.description'),
      price: t('professional.price'),
      features: [
        t('professional.features.0'),
        t('professional.features.1'),
        t('professional.features.2'),
        t('professional.features.3'),
        t('professional.features.4'),
        t('professional.features.5'),
      ],
      popular: true,
    },
    {
      name: t('corporate.name'),
      description: t('corporate.description'),
      price: t('corporate.price'),
      features: [
        t('corporate.features.0'),
        t('corporate.features.1'),
        t('corporate.features.2'),
        t('corporate.features.3'),
        t('corporate.features.4'),
        t('corporate.features.5'),
        t('corporate.features.6'),
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-lg font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {t('cta')}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
