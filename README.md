# Conduite de projet G1-E3

## Architecture du projet

- Serveur NodeJS avec ejs
    - `/index.js` - Point d'entrée (`node index.js`)
    - `/server/` - Back-end nodejs
    - `/template/` - Front-end ejs
    - `/data/` - Contient les ressources
    - `/data/css` - Contient le code css
    - `/data/img` - Contient les fichiers d'image
- Base de données MariaDB

## Environnement de travail

- Un [dépôt principal](https://github.com/CDP-G1-EQ3/M2ConduiteProjet "lien vers le dépôt principal") `Release`, possédé par l'organisation
- Un [fork du repo release](https://github.com/Adrriii/M2ConduiteProjet "lien vers le fork du repo release"), où les développeurs collaborent
    - Une branche par feature
    - Pull Request acceptée vers Release = Feature à jour et fonctionnelle
    - Plusieurs développeurs sur une feature : Même nom de branche, merge/PR pour synchroniser.

## Backlog

-
-