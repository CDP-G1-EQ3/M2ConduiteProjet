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
|:--:|----|:----------:|:------------:|:------------:|
|01 | En tant que visiteur, je souhaite accéder à une page de d'inscription qui permet d'enregistrer un compte utilisateur avec e-mail (obligatoire, unique), un pseudonyme (obligatoire, 24 caractères max) et un mot de passe (obligatoire, 8 caractères minimum, au moins un chiffre et un caractère spécial) afin de m'authentifier sur le site. La page sera dotée d'un bouton "S'enregistrer" qui valide le formulaire, et d'un bouton "Se connecter" qui mène à la page de connexion au cas où je possèderais déjà un compte. |  | 2 | Todo |
|02 | En tant qu'utilisateur, je souhaite accéder à une page contenant une liste des projet auxquels je participe (sous la forme Nom du projet, Description courte, Propriétaire du projet) et une barre de recherche (par Nom, Description et Propriétaire) afin de pouvoir facilement les retrouver. Je souhaite trier la liste alphabétiquement en cliquant sur un des noms de champs et accéder à la page d'un projet en cliquant sur ce dernier dans la liste. |  | 3 | Todo |
|03 | En tant qu'utilisateur, je souhaite pouvoir créer un projet ayant un nom et une description afin d'ensuite en effectuer la planification et la gestion. |  | 2 | Todo |
|04 | En tant que membre d'un projet, je souhaite pouvoir consulter la page d'un projet afin d'accéder aux différents onglets proposés et travailler dessus. |  | 2 | Todo |
|05 | En tant qu'administrateur d'un projet (créateur, ou membre ayant obtenu la permission par un créateur ou un autre administrateur), je souhaite avoir accès à une page des paramètres du projet. |  | 1 | Todo |
|06 | En tant qu'administrateur d'un projet, je souhaite pouvoir gérer les membres du projet depuis un onglet des paramètres afin de leur attribuer un ou des rôles, en ajouter ou en expulser. |  | 2 | Todo |
|07 | En tant que membre d'un projet, je souhaite pouvoir créer des US afin d'alimenter un backlog pour mon projet. |  | 2 | Todo |
|08 | En tant que membre d'un projet, je souhaite pouvoir planifier des sprints depuis l'onglet sprints afin d'y organiser des tâches qui seront par défaut en "A faire", mais pourront être déplacées dans d'autres états (visuellement) comme "En cours" ou "Fait" par défaut. |  | 3 | Todo |
|09 | En tant que membre d'un projet, je souhaite pouvoir créer des tâches faisant référence à des US et pouvant être dépendantes d'autres tâches afin de concevoir des sprint pour mon projet. |  | 2 | Todo |
|10 | En tant que membre d'un projet, je souhaite pouvoir organiser les tâches selon leur état de complétion afin de toujours avoir une vue d'ensemble de l'avancée du projet. |  | 3 | Todo |
|11 | En tant que membre d'un projet, je souhaite pouvoir configurer des tests automatiques afin de m'assurer que les ajouts proposés fonctionnent ainsi que le reste du projet. |  | 9 | Todo |
|12 | En tant que membre d'un projet, je souhaite pouvoir annoter des releases correspondant à un tag ou un hash de commit afin d'effectuer des livraisons. |  | 1 | Todo |
|13 | En tant que membre d'un projet, je souhaite pouvoir créer des documents sous plusieurs formats afin de produire de la documentation et des ressources nécessaires au projet. |  | 5 | Todo |
|14 | En tant que membre d'un projet, je souhaite pouvoir créer des étiquettes afin de mieux trier les tâches. |  | 3 | Todo |
|15 | En tant que membre d'un projet, je souhaite pouvoir rechercher des US dans le backlog selon ses attributs afin de pouvoir trouver l'US que je cherche même si il en existe un très grand nombre (des centaines). |  | 5 | Todo |
|16 | En tant que membre d'un projet, je souhaite pouvoir consulter les tâches d'un sprint actif ou à venir qui n'ont pas été attribuées afin d'en prendre la charge et donner de l'avance au projet. |  | 3 | Todo |
|17 | En tant que membre d'un ou plusieurs projets, je souhaite pouvoir consulter les tâches que je dois réaliser ensuite afin de me concentrer sur le travail le plus urgent. |  | 5 | Todo |
|18 | En tant qu'utilisateur, je souhaite pouvoir accéder au site web sous forme d'application afin d'avoir plus de liberté quant à mon workflow. |  | 9 | Todo |
|19 | En tant qu'utilisateur, je souhaite pouvoir ajouter d'autres utilisateurs à mes contacts afin de facilement retrouver les personnes avec qui je suis susceptible de travailler. |  | 3 | Todo |
|20 | En tant qu'utilisateur, je souhaite pouvoir gérer mes contacts en les catégorisant afin de rendre plus clair mon répertoire. |  | 3 | Todo |
|21 | En tant que membre d'un projet, je souhaite pouvoir utiliser ma liste de contacts lorsque j'ajoute des membres ou même un groupe de contacts à ce projet afin de plus facilement constituer mon équipe sur de nouveaux projets. |  | 5 | Todo |
|22 | En tant que membre d'un projet, je souhaite pouvoir consulter des statistiques sur le projet afin d'en voir l'avancée, la fréquence des retards/avances ... |  | 5 | Todo |
|23 | En tant que membre d'un projet, je souhaite pouvoir consulter le diagramme de Pert d'un sprint ou du projet entier à ce jour afin de visualiser le chemin critique à tout moment |  | 5 | Todo |

