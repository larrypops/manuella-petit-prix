"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { SITE_CONFIG } from '../constants';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {product.price && (
          <div className="absolute top-4 left-4 bg-brand-secondary/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            {product.price}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href={`/produits/${product.id}`}
            className="w-full bg-gray-900 text-white text-center py-3 rounded-xl text-sm font-bold hover:bg-black transition-colors"
          >
            Voir le produit
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-brand-primary/10 text-brand-primary text-center py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all"
          >
            <ShoppingCart size={16} />
            Commander
          </a>
        </div>
      </div>
    </div>
  );
}
