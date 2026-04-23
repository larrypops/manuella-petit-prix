"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export default function About() {
  const values = [
    { title: 'Simplicité', icon: CheckCircle2 },
    { title: 'Accessibilité', icon: CheckCircle2 },
    { title: 'Réactivité', icon: CheckCircle2 },
    { title: 'Proximité', icon: CheckCircle2 },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-brand-secondary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:40px_40px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-black text-white mb-6"
          >
            À propos de <span className="text-brand-primary">{SITE_CONFIG.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Votre partenaire de confiance pour équiper votre foyer avec qualité et économie.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed font-normal">
            <p className="mb-8">
              {SITE_CONFIG.name} est une boutique spécialisée dans la présentation de téléviseurs, appareils électroménagers et équipements utiles pour la maison.
            </p>
            <p className="mb-8 font-medium italic border-l-4 border-brand-primary pl-6 bg-gray-50 py-6 rounded-r-2xl">
              Nous avons mis en place ce site pour permettre à nos clients de découvrir facilement les produits disponibles dans un espace moderne, clair et professionnel.
            </p>
            <p className="mb-12">
              Notre approche est simple : présenter les produits, faciliter la consultation des détails, puis permettre une prise de contact rapide via WhatsApp. Nous voulons offrir une expérience plus directe, plus pratique et plus fluide à toutes les personnes qui recherchent des appareils pour leur maison.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
            <div className="p-10 bg-gray-900 rounded-[2.5rem] text-white">
              <Target className="text-brand-primary mb-6" size={40} />
              <h3 className="font-display font-bold text-2xl mb-4">Notre mission</h3>
              <p className="text-gray-400">
                Proposer des produits utiles et accessibles à travers une expérience simple et rapide.
              </p>
            </div>
            <div className="p-10 bg-brand-primary rounded-[2.5rem] text-white">
              <Eye className="text-white mb-6" size={40} />
              <h3 className="font-display font-bold text-2xl mb-4">Notre vision</h3>
              <p className="text-white/80">
                Faciliter la découverte et la commande de produits électroménagers grâce à une présentation claire et moderne.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Heart className="text-brand-primary mx-auto mb-6" size={40} />
            <h3 className="font-display font-bold text-3xl text-brand-secondary mb-12">Nos valeurs</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-brand-primary font-bold">{v.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
