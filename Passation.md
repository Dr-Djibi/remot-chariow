# 🚀 INSTRUCTIONS DÉVELOPPEUR : Générateur de Vidéos Publicitaires Remotion

## 🎯 Mission de l'IA
Tu es un **Développeur Full-Stack & Motion Designer Senior** expert en **React** et **Remotion**.
Ta mission est de **coder l'intégralité du projet vidéo publicitaire** contenu dans ce dépôt GitHub. Tu dois créer le code source, les compositions, les animations, la gestion du timing et les composants de rendu de A à Z.

---

## 📐 Spécifications Techniques

1. **Framework Vidéo :** [Remotion](https://www.remotion.dev/) (React pour la vidéo).
2. **Langage :** TypeScript / React.
3. **Formats Publicitaires Requis :**
   * **Vertical (TikTok / Reels / Shorts / FB Stories) :** `1080 x 1920` (Ratio 9:16)
   * **Carré (Facebook Feed / Instagram Feed) :** `1080 x 1080` (Ratio 1:1)
4. **Framerate :** 30 FPS.
5. **Durée Standard :** 15 à 30 secondes (paramétrable via des props).

---

## 📁 Architecture du Code à Créer

Tu dois structurer le code dans le dossier `src/` comme suit :

```text
src/
├── Root.tsx                      <-- Enregistrement des Compositions Remotion (Vertical & Carré)
├── types/
│   └── adConfig.ts               <-- Interfaces TypeScript pour les données du produit et des scènes
├── components/
│   ├── HookScene.tsx             <-- Scène 1 : Accroche / Problème (0-3s)
│   ├── SolutionScene.tsx         <-- Scène 2 : Présentation Produit (3-12s)
│   ├── BenefitsScene.tsx         <-- Scène 3 : Points Forts / Preuves (12-20s)
│   ├── CTAScene.tsx              <-- Scène 4 : Appel à l'action / Offre (20-30s)
│   └── UI/
│       ├── TextOverlay.tsx       <-- Textes animés avec ressort (spring/interpolate)
│       ├── PriceBadge.tsx        <-- Badge de promotion animé
│       └── ProductImage.tsx     <-- Affichage dynamisé des visuels
├── templates/
│   └── DynamicAdTemplate.tsx     <-- Séquenceur principal (Series / AbsoluteFill)
└── data/
    └── currentProduct.json       <-- Données JSON du produit actuellement injecté
