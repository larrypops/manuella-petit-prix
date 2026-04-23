/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src={SITE_CONFIG.logo.footer} alt={SITE_CONFIG.name} className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-xl tracking-tight">
                {SITE_CONFIG.name.split(' ')[0]} <span className="text-brand-primary">{SITE_CONFIG.name.split(' ').slice(1).join(' ')}</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre boutique de référence pour l'électroménager et les équipements maison à petit prix au Cameroun.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/produits" className="hover:text-white transition-colors">Produits</Link></li>
              <li><Link href="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Produits</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/produits" className="hover:text-white transition-colors">Smart TV 50 pouces</Link></li>
              <li><Link href="/produits" className="hover:text-white transition-colors">Congélateur 200L (Innova/Oscar)</Link></li>
              <li><Link href="/produits" className="hover:text-white transition-colors">Congélateur Oscar 210L</Link></li>
              <li><Link href="/produits" className="hover:text-white transition-colors">Gamme congélateurs 100L à 700L</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="bg-brand-primary/20 text-brand-primary p-1 rounded-sm text-xs font-bold mt-1">L</span>
                <span>Lundi - Samedi: 8h - 19h</span>
              </li>
              <li>+237 6 54 06 23 55</li>
              <li>Cameroun</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Manuella Petitprix. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-400">Confidentialité</a>
            <a href="#" className="hover:text-gray-400">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
