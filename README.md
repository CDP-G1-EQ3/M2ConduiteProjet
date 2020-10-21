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

- Un dépôt principal `Release`, possédé par l'organisation
- Un fork par développeur
    - Une branche par feature
    - Pull Request acceptée vers release = Feature complète
    - Plusieurs développeurs sur une feature : Même nom de branche, merge/PR pour synchroniser.

## Backlog

-
-