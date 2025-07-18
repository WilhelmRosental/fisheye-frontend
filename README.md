# Fisheye - Portfolios de photographes professionnels

## Description

Fisheye est une plateforme web moderne qui présente les portfolios de photographes professionnels. L'application permet aux utilisateurs de découvrir des artistes talentueux et de trouver le photographe idéal pour leurs projets.

## Fonctionnalités

- **Page d'accueil** : Affichage de tous les photographes disponibles
- **Pages photographes** : Galeries individuelles avec médias (photos/vidéos)
- **Interface moderne** : Design responsive et accessible
- **Navigation intuitive** : Parcours utilisateur fluide

## Structure du projet

```
fisheye-frontend/
├── assets/           # Images, icônes et ressources
├── css/             # Styles CSS
├── data/            # Données JSON des photographes
├── scripts/         # Code JavaScript
│   ├── api/         # Gestion des API
│   ├── factories/   # Factories pour créer les objets
│   ├── models/      # Modèles de données
│   ├── templates/   # Templates pour l'affichage
│   └── utils/       # Utilitaires
├── index.html       # Page d'accueil
└── photographer.html # Page photographe
```

## Installation et utilisation

1. **Cloner le projet** (si applicable)
2. **Ouvrir le fichier** `index.html` dans votre navigateur
3. **Naviguer** sur le site pour découvrir les photographes

## Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles et mise en page responsive
- **JavaScript ES6+** : Logique métier et interactions
- **WebP** : Format d'image optimisé

## Compatibilité

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Architecture

L'application suit une architecture modulaire :
- **API** : Gestion des données via fetch
- **Factories** : Création d'objets photographes et médias
- **Templates** : Génération du HTML dynamique
- **Utils** : Fonctionnalités utilitaires (lightbox, formulaires)
