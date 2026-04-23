/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types';
import configData from './config.json';

export const SITE_CONFIG = configData.siteConfig;
export const WHATSAPP_NUMBER = SITE_CONFIG.whatsappNumber;
export const PRODUCTS: Product[] = configData.products;
