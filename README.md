# Manuella à Petitprix (Next.js)

Ce projet a été migré de Vite vers **Next.js App Router**.

## Prérequis

- Node.js 20+
- npm 10+

## Lancer en local

1. Installer les dépendances:
   ```bash
   npm install
   ```
2. Démarrer en développement:
   ```bash
   npm run dev
   ```
3. Ouvrir `http://localhost:3000`

## Build production

```bash
npm run build
npm run start
```

## Déploiement Vercel

Configurer Vercel ainsi:

- Framework Preset: `Next.js`
- Root Directory: racine du dépôt (`.`)
- Build Command: `npm run build`
- Install Command: `npm install`

Si Vercel garde un ancien cache après migration, relancer un déploiement avec **Clear build cache**.

## Images locales

- Toutes les images du projet sont servies via `public/images`.
- Les chemins sont référencés dans `src/config.json` sous la forme `/images/...`.
