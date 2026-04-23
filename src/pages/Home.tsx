"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Link from 'next/link';
import { motion } from 'motion/react';
import { Star, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="flex flex-col gap-0">
      <section className="relative bg-brand-secondary overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-6">
                <Star size={14} className="text-brand-accent fill-brand-accent" />
                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">Smart TV et congélateurs en promo</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Smart TV et congélateurs <span className="text-brand-primary">à petit prix</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                Découvrez nos offres du moment: Smart TV 50 pouces et congélateurs de 100L à 700L. Commandez rapidement sur WhatsApp.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/produits"
                  className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all flex items-center gap-2 group shadow-xl shadow-brand-primary/20"
                >
                  Voir les produits
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Commander sur WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <img
                src={SITE_CONFIG.images.hero}
                alt="Smart TV"
                className="w-full h-auto rounded-3xl shadow-2xl skew-y-1 transform perspective-1000 rotate-y-3"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Zap size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Livraison Rapide</p>
                  <p className="font-display font-bold text-gray-900">À votre domicile</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-gray-100 rounded-3xl overflow-hidden shadow-inner">
                    <img src={SITE_CONFIG.images.aboutPresentation1} alt="Présentation produit" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="h-64 bg-brand-primary rounded-3xl p-6 text-white flex flex-col justify-end">
                    <ShieldCheck size={32} className="mb-4" />
                    <h3 className="font-display font-bold text-xl">Produits Certifiés</h3>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-64 bg-brand-secondary rounded-3xl p-6 text-white flex flex-col justify-end">
                    <Star size={32} className="mb-4 text-brand-accent fill-brand-accent" />
                    <h3 className="font-display font-bold text-xl">+500 Clients Satisfaits</h3>
                  </div>
                  <div className="h-48 bg-gray-100 rounded-3xl overflow-hidden shadow-inner">
                    <img src={SITE_CONFIG.images.aboutPresentation2} alt="Produits en boutique" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="font-display text-4xl font-black text-brand-secondary mb-6">
                Une boutique simple, pratique et accessible
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  {SITE_CONFIG.name} est une boutique spécialisée dans la présentation et la vente d’appareils électroménagers et d’équipements maison.
                </p>
                <p>
                  Notre objectif est de permettre à chaque client de découvrir facilement les produits disponibles, consulter leurs détails, puis commander rapidement via WhatsApp.
                </p>
                <p>
                  Nous misons sur une expérience simple : vous visitez le site, vous consultez les produits, puis vous nous contactez directement pour obtenir les informations de prix, disponibilité et livraison.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="font-semibold">Simplicité</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="font-semibold">Accessibilité</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="font-semibold">Réactivité</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="font-semibold">Proximité</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-black text-brand-secondary mb-4">
                Nos produits populaires
              </h2>
              <p className="text-gray-500 text-lg">
                Découvrez une sélection de produits parmi les plus demandés pour équiper votre maison.
              </p>
            </div>
            <Link href="/produits" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Tout voir <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-black text-brand-secondary mb-6">
            Vous cherchez un appareil pour votre maison ?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
            Consultez nos produits et contactez-nous directement sur WhatsApp pour passer votre commande.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-brand-primary/40 active:scale-95 transition-all inline-flex items-center gap-3"
          >
            Écrire sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
