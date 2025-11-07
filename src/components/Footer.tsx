'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Consultor</h3>
            <p className="text-slate-300 mb-4">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-primary transition-colors">
                  {tNav('home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-primary transition-colors">
                  {tNav('about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-primary transition-colors">
                  {tNav('services')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-300 hover:text-primary transition-colors">
                  {tNav('pricing')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('services')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-slate-300 hover:text-primary transition-colors">
                  {tNav('services')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-300 hover:text-primary transition-colors">
                  {tNav('testimonials')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-primary transition-colors">
                  {tNav('contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© {currentYear} Consultor. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
