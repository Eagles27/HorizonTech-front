# HorizonTech - Plateforme d'Encouragement pour les Carrières Scientifiques

Bienvenue sur le référentiel GitHub d'HorizonTech - Frontend.

La plateforme "HorizonTech" répond à un besoin pressant de promouvoir les carrières scientifiques et technologiques auprès des jeunes femmes en France. Malgré des avancées encourageantes, les disparités persistent, notamment avec seulement 22,22% d'étudiantes à l'ECE. Cette solution web vise à informer, inspirer et connecter les jeunes filles avec des modèles professionnels féminins, appelées "marraines". La plateforme offre des échanges instantanés, distinguant son approche des forums traditionnels. Ciblant un public de 14 à 70 ans, le projet prévoit le développement de maquettes et de la plateforme, avec le soutien potentiel de l'association "Elles Bougent". L'accent est mis sur l'innovation au service des associations existantes, excluant actuellement un partenariat direct avec "Elles Bougent", mais ouvrant la voie à une collaboration future. En somme, "HorizonTech" offre des fonctionnalités clés telles que la consultation de métiers, la recherche de marraines et les discussions interactives.

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

## Choix technologiques

En termes de langage de programmation, nous avons opté pour TypeScript. Pour le développement front-end, notre choix s'est orienté vers ReactJS, boosté par Vite en tant que librairie avancée.

## Structure du code

Pour la structuration du code, le développement de notre solution reposera sur une approche efficiente, favorisant la réutilisation de composants atomiques, moléculaires et organiques, assurant ainsi une cohérence et une maintenabilité accrues tout au long du processus de conception. Les composants atomiques pourront être des cartes ou des boutons, situés dans le dossier “/composants/atoms”. Les composants moléculaires regrouperont plusieurs composants atomiques et seront dans le dossier “/composants/molecules”. Les composants organiques contiendront des éléments molécules dans le dossier “/composants/organisms”.

## Minimum Viable Product (MVP)

Pour construire cette plaforme nous avons d'abord réalisé une [maquette sur Figma](https://www.figma.com/file/VV0BEJh4jwQf1BppeBbB5K/Wireframe-HorizonTech?type=design&node-id=0-1&mode=design&t=1Fn8McvCqCWK1TxT-0).

## Auteurs

- [Eagles27](https://github.com/Eagles27)
- [audreybrthlt](https://github.com/audreybrthlt)
- [clemencebellet](https://github.com/clemencebellet)
- [isa6ellechen](https://github.com/isa6ellechen)
- Edouard Oprea

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
