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

|ID | US | Importance | Difficulté | État |
|:--:|----|:------------:|:--:|----|
|01 | En tant que visiteur, je souhaite pouvoir créer un compte en renseignant une adresse mail, un pseudonyme, un mot de passe et une confirmation du mot de passe afin de créer et de gérer mes projets. Toutes les informations à renseigner sont obligatoires. | minimale | 2 | Ouverte |
| 02 | En tant qu'utilisateur, je souhaite pouvoir me connecter à mon compte en renseignant mon e-mail et mot de passe afin d'avoir accès à mes projets. | minimale | 2 | Ouverte |
|03 | En tant qu'utilisateur, je souhaite pouvoir créer un projet en renseignant un nom (obligatoire) et une description (optionnel) afin de pouvoir faire une gestion agile sur mon projet. | haute | 2 | Ouverte |
| 04 | En tant qu'utilisateur, je souhaite effectuer une recherche dans la liste de projets auxquels je participe en fonction de leur nom afin de retrouver facilement un projet qui m'intéresse. | minimale | 3 | Ouverte |
|05 | En tant qu'utilisateur, je souhaite accéder à une liste de mes projets contenant comme champs le nom du projet, sa description courte et le propriétaire du projet afin de pouvoir accéder au projet qui m'intéresse | haute | 2 | Ouverte |
|06 | En tant qu'administrateur d'un projet (créateur, ou membre ayant obtenu la permission d'un autre administrateur), je souhaite accéder aux informations du projet (son nom, sa description, le chef du projet) afin de pouvoir les modifier. | faible | 1 | Ouverte |
|07 | En tant qu'administrateur d'un projet, je souhaite pouvoir accéder à une page de gestion des membres depuis les paramètres du projet afin d'attribuer des rôles, ajouter des membres ou en expulser. | minimale | 2 | Ouverte |
|08 | En tant qu'administrateur d'un projet, je souhaite pouvoir déplacer une ou plusieurs tâches d'un état à un autre afin d'organiser mes tâches. Les états pour une tâche sont todo, doing et done | haute | 2 | Ouverte |
|09 | En tant que membre d'un projet, je souhaite pouvoir créer une User Story en renseignant sa description (obligatoire), sa priorité et sa difficulté afin de pouvoir constituer un backlog. | haute |     3      | Ouverte |
|10 | En tant que membre d'un projet, je souhaite pouvoir modifier ou supprimer des User Stories afin de pouvoir corriger d'éventuelles erreurs. | haute |     3      | Ouverte |
|11 | En tant que membre d'un projet, je souhaite accéder au backlog contenant la liste de toutes les User Stories avec les champs description, identifiant, importance et difficulté afin de pouvoir les gérer (modification, suppression, tri). | haute | 2 | Ouverte |
|12 | En tant qu'administrateur d'un projet ou créateur d'une US, je souhaite pouvoir la fermer afin de préciser que sa réalisation est terminée. | faible | 1 | Ouverte |
|13 | En tant que membre d'un projet, je souhaite pouvoir rechercher des US dans le backlog selon leur description afin de pouvoir trouver très rapidement les U.S qui m'intéressent. | minimale | 5 | Ouverte |
|14 | En tant que membre d'un projet, je souhaite pouvoir limiter le nombre de User Stories à afficher en même temps dans le backlog à 100, 500 ou toutes les U.S afin de pouvoir les consulter sous forme de pagination (les 100 suivant ou bien les 100 précédents par exemple). | minimale | 3 | Ouverte |
|15 | En tant que membre d'un projet, je souhaite pouvoir trier les U.S du backlog selon leur importance ou leur difficulté. | minimale | 2 | Ouverte |
|16 | En tant que membre d'un projet, je souhaite pouvoir créer un sprint et y ajouter des User Stories afin de pouvoir le démarrer. Le nom du sprint sera généré automatiquement sous la forme "sprint X" (où X est un nombre qui représente le nombre courant de sprints) | haute | 2 | Ouverte |
|17 | En tant que membre d'un projet, je souhaite pouvoir démarrer un sprint en indiquant la durée et la date de début du sprint. | faible | 3 | Ouverte |
|18 | En tant que membre d'un projet, je souhaite pouvoir créer des tâches faisant référence à des US et pouvant être dépendantes d'autres tâches afin de concevoir des sprints pour mon projet. | haute | 2 | Ouverte |
|19 | En tant que membre d'un projet, je souhaite pouvoir afficher les tâches et les filtrer selon que les U.S associées sont dans un sprint ou pas afin de voir l'avancée du projet. | haute | 3 | Ouverte |
|20 | En tant que membre d'un projet, je souhaite pouvoir créer des étiquettes en renseignant un nom afin de mieux trier les tâches. | faible | 3 | Ouverte |
|21 | En tant que membre d'un projet, je souhaite pouvoir modifier ou supprimer des tâches afin de corriger d'éventuelles erreurs. | haute | 3 | Ouverte |
|22 | En tant qu'utilisateur, je souhaite pouvoir ajouter, modifier ou supprimer d'autres utilisateurs à mes contacts afin de facilement retrouver les personnes avec qui je suis susceptible de travailler. | minimale | 3 | Ouverte |
|23 | En tant que membre d'un projet, je souhaite pouvoir utiliser ma liste de contacts lorsque j'ajoute des membres ou même un groupe de contacts à ce projet afin de plus facilement constituer mon équipe sur de nouveaux projets. | minimale | 5 | Ouverte |
|24 | En tant que membre d'un projet, je souhaite pouvoir uploader des fichiers sous plusieurs formats (zip, targ.gz, pdf, md) et de leur attribuer un titre, une description et un tag afin de constituer les releases et les documentations de mes projets. La description et le tag sont optionnels pour un fichier de documentation. | minimale | 3 | Ouverte |
|25 | En tant que membre d'un projet, je souhaite pouvoir télécharger ou supprimer tout fichier uploadé afin de corriger d'éventuelles erreurs. | minimale | 3 | Ouverte |
|26 | En tant que membre d'un projet, je souhaite pouvoir me déplacer entre les differentes fonctionnalités (projets, backlog, sprints, tâches) en utilisant un menu afin de faciliter l'utilisation de l'application. | minimale | 3 | Ouverte |