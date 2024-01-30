# HorizonTech - Plateforme d'Encouragement pour les Carrières Scientifiques

Bienvenue sur le référentiel GitHub d'HorizonTech - Frontend.
La plateforme "HorizonTech" répond à un besoin pressant de promouvoir les carrières scientifiques et technologiques auprès des jeunes femmes en France. Malgré des avancées encourageantes, les disparités persistent, notamment avec seulement 22,22% d'étudiantes à l'ECE. Cette solution web vise à informer, inspirer et connecter les jeunes filles avec des modèles professionnels féminins, appelées "marraines". La plateforme offre des échanges instantanés, distinguant son approche des forums traditionnels. Ciblant un public de 14 à 70 ans, le projet prévoit le développement de maquettes et de la plateforme, avec le soutien potentiel de l'association "Elles Bougent". L'accent est mis sur l'innovation au service des associations existantes, excluant actuellement un partenariat direct avec "Elles Bougent", mais ouvrant la voie à une collaboration future. En somme, "HorizonTech" offre des fonctionnalités clés telles que la consultation de métiers, la recherche de marraines et les discussions interactives, résumées dans la Figure 1 du document d'origine.

## Configuration du Projet

- Clonez le référentiel localement : git clone https://github.com/VotreNom/HorizonTech-Frontend.git
- Accédez au répertoire du frontend : cd HorizonTech-Frontend
- Installez les dépendances : npm install

## Exécution de l'Application

- Pour démarrer l'application, utilisez la commande : npm start
- L'application sera accessible à l'adresse : http://localhost:3000

## Fonctionnalités Principales

- Interface utilisateur pour la création de profils et la navigation
- Plateforme de mise en relation entre filleules et marraines
- Messagerie instantanée pour des conseils personnalisés
- Métier-Pédia

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
