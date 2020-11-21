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
|01 | En tant que visiteur, je souhaite pouvoir créer un compte en renseignant une adresse mail, un pseudonyme, un mot de passe et une confirmation du mot de passe à fin de créer et de gérer mes projets. Toutes les informations à renseigner sont obligatoires. |  | 2 | Ouverte |
| 02 | En tant qu'utilisateur, je souhaite pouvoir me connecter à mon compte en renseignant mon e-mail et mot de passe afin d'avoir accès à mes projets. |  | 2 | Ouverte |
|03 | En tant qu'utilisateur, je souhaite accéder à une liste de mes projets contenant comme champs le nom du projet, sa description courte et le propriétaire du projet afin de pouvoir acceder à un projet qui m'interesse |  | 2 | Ouverte |
| 04 | En tant qu'utilisateur, je souhaite cliquer sur un des noms de champs de la liste de projets auxquels je participe afin de trier alphabétiquement la liste selon le champ choisi. |  | 2 | Ouverte |
| 05 | En tant qu'utilisateur, je souhaite effectuer une recherche dans la liste de projets auxquels je participe en fonction de leur nom afin de retrouver facilement un projet qui m'interesse. |  | 3 | Ouverte |
|06 | En tant qu'utilisateur, je souhaite pouvoir créer un projet en renseignant un nom (obligatoire) et une description (optionel) afin de pouvoir faire une gestion agile sur mon projet. |  | 2 | Ouverte |
|07 | En tant qu'administrateur d'un projet (créateur, ou membre ayant obtenu la permission d'un autre administrateur), je souhaite accéder aux informations du projet (son nom, sa description, le chef du projet) afin de pouvoir les modifier. |  | 1 | Ouverte |
|08 | En tant qu'administrateur d'un projet, je souhaite pouvoir accéder à une page de gestion des membres depuis les paramètres du projet afin d'attribuer des rôles, ajouter des membres ou en expulser. |  | 2 | Ouverte |
|09 | En tant qu'administrateur d'un projet, je souhaite pouvoir déplacer une ou plusieurs tâches de l'état doing à l'état todo à fin de pouvoir gérer les tâches d'un utilisateur expulsé ou indisponible durant un sprint. |  | 2 | Ouverte |
|10 | En tant que membre d'un projet, je souhaite pouvoir créer une User storie en renseignant sa description(obligatoire), sa priorité et sa difficulté afin de pouvoir constituer un backlog. |  |     3      | Ouverte |
|11 | En tant que membre d'un projet, je souhaite pouvoir modifier ou supprimer des User stories afin de pouvoir de corriger d'éventuelles erreurs. |  |     3      | Ouverte |
|12 | En tant que membre d'un projet, je souhaite accéder au backlog contenant la liste de toutes les Users Stories avec les champs description, identifiant, importance et difficulté afin de pouvoir les gérer (modification, supression, trie). | | 2 | Ouverte |
|13 | En tant que membre d'un projet, je souhaite pouvoir créer un sprint et d' y ajouter des Users stories afin de pouvoir le demarrer. Le nom du sprint sera générer automatiquement sous la forme "sprint X" (où X est un nombre qui réprenste le nombre courant de sprints) | | 2 | Ouverte |
|14 | En tant que créateur d'une US, je souhaite pouvoir la fermer à fin de préciser que sa réalisation est terminée. | | 1 | Ouverte |
|15 | En tant que membre d'un projet, je souhaite pouvoir demarrer un sprint en indiquant la durée et la date de debut du sprint. |  | 3 | Ouverte |
|16 | En tant que membre d'un projet, je souhaite pouvoir créer des tâches faisant référence à des US et pouvant être dépendantes d'autres tâches afin de concevoir des sprints pour mon projet. |  | 2 | Ouverte |
|17 | En tant que membre d'un projet, je souhaite pouvoir afficher les tâches filtrable par ceux dont les U.S sont dans un sprint, ceux dont les U.S ne sont pas dans un sprint ou bien les afficher toutes à fin de voir l'avancée du projet. |  | 3 | Ouverte |
|18 | En tant que membre d'un projet, je souhaite pouvoir créer des étiquettes afin de mieux trier les tâches. |  | 3 | Ouverte |
|19 | En tant que membre d'un projet, je souhaite pouvoir modifier ou supprimer des tâches a fin de corriger d'éventuelles erreurs. |  | 3 | Ouverte |
|20 | En tant que membre d'un projet, je souhaite pouvoir configurer des tests automatiques afin de m'assurer que les ajouts proposés fonctionnent ainsi que le reste du projet. |  | 9 | Ouverte |
|21| En tant que membre d'un projet, je souhaite pouvoir annoter des releases correspondant à un tag ou un hash de commit afin d'effectuer des livraisons. |  | 1 | Ouverte |
|22 | En tant que membre d'un projet, je souhaite pouvoir créer des documents sous plusieurs formats afin de produire de la documentation et des ressources nécessaires au projet. |  | 5 | Ouverte |
|23 | En tant que membre d'un projet, je souhaite pouvoir rechercher des US dans le backlog selon leurs types (bug, nouvelle fonctionnalités, refactoring)  afin de pouvoir trouver les U.S qui m'interesse très rapidement. |  | 5 | Ouverte |
|24 | En tant qu'utilisateur, je souhaite pouvoir ajouter, modifier ou supprimer d'autres utilisateurs à mes contacts afin de facilement retrouver les personnes avec qui je suis susceptible de travailler. |  | 3 | Ouverte |
|25 | En tant que membre d'un projet, je souhaite pouvoir utiliser ma liste de contacts lorsque j'ajoute des membres ou même un groupe de contacts à ce projet afin de plus facilement constituer mon équipe sur de nouveaux projets. |  | 5 | Ouverte |
|26 | En tant que membre d'un projet, je souhaite pouvoir consulter des statistiques sur le projet afin d'en voir l'avancée, la fréquence des retards/avances ... |  | 5 | Ouverte |