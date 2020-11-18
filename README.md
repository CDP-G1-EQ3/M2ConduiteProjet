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
|:--:|----|:------------:|----|----|
|01 | En tant que visiteur, je souhaite accéder à un formulaire de création de compte contenant les champs : <br />- e-mail (obligatoire, unique)<br />- pseudonyme (obligatoire) <br />- mot de passe fort (obligatoire)<br />puis cliquer sur le bouton "S'enregistrer" afin de m'inscrire sur le site. |  | 2 | Ouverte |
| 02 | En tant qu'utilisateur, je souhaite accéder à un formulaire de connexion contenant les champs e-mail et mot de passe puis cliquer sur le bouton "Se connecter" afin de m'identifier sur le site. |  | 2 | Ouverte |
|03 | En tant qu'utilisateur, je souhaite accéder à une liste de mes projets contenant les champs nom du projet, description courte et propriétaire du projet puis cliquer sur un des projets de la liste afin d'accéder à la page de ce projet |  | 2 | Ouverte |
| 04 | En tant qu'utilisateur, je souhaite cliquer sur un des noms de champs de la liste de projets auxquels je participe afin de trier alphabétiquement la liste selon le champ choisi. |  | 2 | Ouverte |
| 05 | En tant qu'utilisateur, je souhaite effectuer une recherche dans la liste de projets auxquels je participe en fonction de leur nom, description et propriétaire afin de réduire la liste aux termes que je cherche. |  | 3 | Ouverte |
|07 | En tant qu'utilisateur, je souhaite accéder à un formulaire de création de projet contenant les champs nom du projet (obligatoire) et description (optionnel) puis cliquer sur le bouton "Créer le projet" afin de créer un projet. |  | 2 | Ouverte |
|09 | En tant qu'administrateur d'un projet (créateur, ou membre ayant obtenu la permission par un créateur ou un autre administrateur), je souhaite accéder aux paramètres d'un projet depuis la page de celui-ci afin de les modifier. |  | 1 | Ouverte |
|10 | En tant qu'administrateur d'un projet, je souhaite accéder à un onglet de gestion des membres depuis les paramètres du projet afin d'attribuer des rôles, ajouter des membres ou en expulser. |  | 2 | Ouverte |
|11 | En tant que membre d'un projet, je souhaite accéder à un formulaire de création d'User Story (US) contenant les champs description (obligatoire), type (optionnel), importance (optionnel), difficulté (optionnel)  ainsi qu'un bouton "Valider" afin d'ajouter une US au backlog de mon projet. |  | 2 | Ouverte |
|12 | En tant que membre d'un projet, je souhaite qu'un numéro soit attribué automatiquement (de manière incrémentale) aux US que je crée afin de les identifier de manière unique. | | 1 | Ouverte |
|13 | En tant que membre d'un projet, je souhaite accéder à un backlog contenant les champs ID, description, importance et difficulté depuis la page du projet afin de consulter les US du projet. | | 2 | Ouverte |
|14 | En tant que membre d'un projet, je souhaite remplir les champs importance (minimale, normale ou maximale) et difficulté d'une US afin de la qualifier (une US ne sera qualifiée que lorsque ces trois champs seront complétés). | | 2 | Ouverte |
|15 | En tant que membre d'un projet, je souhaite que les US affichées dans le backlog soient séparées selon qu'elles sont en attente de qualification, qualifiées, planifiées, réalisées ou fermées afin de mieux visualiser le travail restant. | | 2 | Ouverte |
|16 | En tant que membre d'un projet, je souhaite cliquer sur le bouton "Créer un sprint" depuis le backlog pour accéder à un formulaire contenant les champs nom (obligatoire) et description (optionnel) puis cliquer sur le bouton "Valider" afin d'ajouter un sprint. | | 2 | Ouverte |
|17 | En tant que membre d'un projet, je souhaite pouvoir déplacer une US qualifiée du backlog vers un sprint afin de la planifier. | | 2 | Ouverte |
|18 | En tant que créateur d'une US, je souhaite cliquer sur le bouton "Fermer l'US" afin de fermer l'US que j'ai créée lorsque sa réalisation est terminée et que je suis satisfait de la solution apportée. | | 1 | Ouverte |
| |                                                              | |  |  |
| | En tant que membre d'un projet, je souhaite pouvoir planifier des sprints depuis l'onglet sprints afin d'y organiser des tâches qui seront par défaut en "A faire", mais pourront être déplacées dans d'autres états (visuellement) comme "En cours" ou "Fait" par défaut. |  | 3 | Ouverte |
| | En tant que membre d'un projet, je souhaite pouvoir créer des tâches faisant référence à des US et pouvant être dépendantes d'autres tâches afin de concevoir des sprint pour mon projet. |  | 2 | Ouverte |
| | En tant que membre d'un projet, je souhaite pouvoir organiser les tâches selon leur état de complétion afin de toujours avoir une vue d'ensemble de l'avancée du projet. |  | 3 | Ouverte |
| | En tant que membre d'un projet, je souhaite pouvoir configurer des tests automatiques afin de m'assurer que les ajouts proposés fonctionnent ainsi que le reste du projet. |  | 9 | Ouverte |
| | En tant que membre d'un projet, je souhaite pouvoir annoter des releases correspondant à un tag ou un hash de commit afin d'effectuer des livraisons. |  | 1 | Ouverte |
| | En tant que membre d'un projet, je souhaite pouvoir créer des documents sous plusieurs formats afin de produire de la documentation et des ressources nécessaires au projet. |  | 5 | Ouverte |
| | En tant que membre d'un projet, je souhaite pouvoir créer des étiquettes afin de mieux trier les tâches. |  | 3 | Ouverte |
| | En tant que membre d'un projet, je souhaite pouvoir rechercher des US dans le backlog selon ses attributs afin de pouvoir trouver l'US que je cherche même si il en existe un très grand nombre (des centaines). |  | 5 | Ouverte |
| | En tant que membre d'un projet, je souhaite pouvoir consulter les tâches d'un sprint actif ou à venir qui n'ont pas été attribuées afin d'en prendre la charge et donner de l'avance au projet. |  | 3 | Ouverte |
| | En tant que membre d'un ou plusieurs projets, je souhaite pouvoir consulter les tâches que je dois réaliser ensuite afin de me concentrer sur le travail le plus urgent. |  | 5 | Ouverte |
| | En tant qu'utilisateur, je souhaite pouvoir accéder au site web sous forme d'application afin d'avoir plus de liberté quant à mon workflow. |  | 9 | Ouverte |
| | En tant qu'utilisateur, je souhaite pouvoir ajouter d'autres utilisateurs à mes contacts afin de facilement retrouver les personnes avec qui je suis susceptible de travailler. |  | 3 | Ouverte |
| | En tant qu'utilisateur, je souhaite pouvoir gérer mes contacts en les catégorisant afin de rendre plus clair mon répertoire. |  | 3 | Ouverte |
| | En tant que membre d'un projet, je souhaite pouvoir utiliser ma liste de contacts lorsque j'ajoute des membres ou même un groupe de contacts à ce projet afin de plus facilement constituer mon équipe sur de nouveaux projets. |  | 5 | Ouverte |
| | En tant que membre d'un projet, je souhaite pouvoir consulter des statistiques sur le projet afin d'en voir l'avancée, la fréquence des retards/avances ... |  | 5 | Ouverte |
| | En tant que membre d'un projet, je souhaite pouvoir consulter le diagramme de Pert d'un sprint ou du projet entier à ce jour afin de visualiser le chemin critique à tout moment |  | 5 | Ouverte |

