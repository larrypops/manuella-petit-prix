"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-brand-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-6">
            Contactez-nous
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Vous souhaitez obtenir des informations sur un produit, vérifier une disponibilité ou lancer une commande ?
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100">
              <h3 className="font-display font-bold text-2xl text-brand-secondary mb-8">Coordonnées</h3>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="bg-brand-primary/10 p-3 rounded-2xl shrink-0 text-brand-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">WhatsApp / Téléphone</p>
                    <p className="font-bold text-gray-900">{SITE_CONFIG.whatsappNumber}</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="bg-brand-primary/10 p-3 rounded-2xl shrink-0 text-brand-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Localisation</p>
                    <p className="font-bold text-gray-900">Cameroun</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="bg-brand-primary/10 p-3 rounded-2xl shrink-0 text-brand-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Horaires</p>
                    <p className="font-bold text-gray-900">Lundi - Samedi: 8h - 19h</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-50">
                <p className="text-sm font-medium text-gray-500 italic">
                  "Nous vous invitons à nous écrire directement sur WhatsApp pour une réponse rapide."
                </p>
              </div>
            </div>

            <div className="bg-brand-secondary p-8 rounded-[2rem] text-white">
              <h4 className="font-display font-bold mb-4 flex items-center gap-2">
                <MessageSquare size={18} className="text-brand-primary" />
                Notre activité
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Électroménager et équipements maison à petit prix. Nous facilitons l'accès aux meilleures marques pour tous les budgets.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-center items-center text-center h-full">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-[#25D366] mb-8 animate-pulse">
                <Phone size={48} className="fill-current" />
              </div>
              <h2 className="font-display text-4xl font-black text-brand-secondary mb-6">
                Discussion Immédiate
              </h2>
              <p className="text-gray-500 text-lg max-w-md mb-12">
                Pour toute demande concernant un produit, un prix ou une livraison, contactez-nous directement.
              </p>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-sm bg-[#25D366] text-white py-6 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-2xl shadow-green-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Discuter sur WhatsApp
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
