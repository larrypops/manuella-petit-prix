"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Link from 'next/link';
import { motion } from 'motion/react';
import { ShoppingCart, CheckCircle2, ArrowLeft, Share2 } from 'lucide-react';
import { SITE_CONFIG, PRODUCTS } from '../constants';

interface ProductDetailProps {
  id: string;
}

export default function ProductDetail({ id }: ProductDetailProps) {
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="bg-white min-h-screen grid place-items-center px-4">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-brand-secondary mb-4">Produit introuvable</h1>
          <p className="text-gray-500 mb-6">Ce produit n'existe pas ou n'est plus disponible.</p>
          <Link href="/produits" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary text-white font-semibold">
            <ArrowLeft size={18} />
            Retour aux produits
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/produits"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Retour aux produits
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-100 border border-gray-100 p-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-2xl bg-gray-100 overflow-hidden border border-gray-100 opacity-50 cursor-not-allowed p-2">
                  <img src={product.imageUrl} alt={`${product.name} aperçu ${i}`} className="w-full h-full object-contain blur-[1px]" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                En stock
              </span>
              <button className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-brand-primary transition-colors">
                <Share2 size={20} />
              </button>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-secondary mb-6 leading-tight">
              {product.name}
            </h1>

            <div className="mb-8">
              <p className="font-display text-3xl font-bold text-brand-primary">
                {product.price || 'Contactez-nous pour le prix'}
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-gray-600 leading-relaxed font-medium">
                  {product.shortDescription}
                </p>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-500 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-display font-bold text-brand-secondary mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full"></span>
                Caractéristiques
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-50">
                    <CheckCircle2 size={18} className="text-brand-primary shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-brand-primary/20 hover:shadow-brand-primary/40 active:scale-[0.98] transition-all"
              >
                <ShoppingCart size={24} />
                Commander sur WhatsApp
              </a>
              <p className="text-center text-xs text-gray-400 font-medium">
                Paiement à la livraison possible • Livraison à domicile
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
