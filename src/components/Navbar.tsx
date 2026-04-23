"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { SITE_CONFIG } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Produits', path: '/produits' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/produits') {
      return pathname.startsWith('/produits');
    }

    return pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group" id="logo-link">
              <img src={SITE_CONFIG.logo.header} alt={SITE_CONFIG.name} className="w-10 h-10 object-contain group-hover:rotate-6 transition-transform" />
              <span className="font-display font-bold text-xl tracking-tight text-brand-secondary">
                {SITE_CONFIG.name.split(' ')[0]} <span className="text-brand-primary">{SITE_CONFIG.name.split(' ').slice(1).join(' ')}</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  isActive(link.path) ? 'text-brand-primary' : 'text-gray-600'
                }`}
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-secondary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2"
              id="nav-cta-whatsapp"
            >
              Commander
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((open) => !open)}
              className="text-gray-600 hover:text-brand-primary p-2"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-brand-primary/10 text-brand-primary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-brand-primary text-white py-3 rounded-xl block text-center font-bold"
                  id="mobile-nav-cta-whatsapp"
                >
                  Commander sur WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
