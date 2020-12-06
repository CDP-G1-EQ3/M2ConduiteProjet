# DoD pour les tâches du sprint
- La tâche a été implémenté
- Les tests unitaires ou e2e correspondantes ont été exécutés et elles passent
- La tâche a été push
- La tâche a été revue au moins un pair

# Liste des tâches
|  ID  | US ID | Task                                                         | Durée | Dépendance | DOD                                                          | État  | Assigné |
| :--: | :---: | :----------------------------------------------------------- | :---: | :--------: | ------------------------------------------------------------ | ----- | :-----: |
| 1 | 16 | Dans le fichier `backlog.ejs` ajouter un bouton "créer sprint". un click sur ce bouton devra rédiriger l'utilisateur au POST de `/sprint` (aucun paramètre n'est nécessaire). | 2 |  |  | DONE | elhadj |
| 2 | 16 | Ajouter une route POST (`/sprint`) pour la création d'un sprint. Le nom du sprint devra être généré automatiquement sous la forme "sprint X" où X est l'id du dernier élément dans la table cdp_sprint. Une fois le nouveau sprint crée, rédiriger l'utilisateur sur la page contenant le backlog au GET de `/backlog/{projectId}` | 2 |  |  | DONE | elhadj
| 3 | 16 | Ajouter une route PUT `sprint/{usId}/{sprintId}` permettant d'ajouter une U.S à un sprint. Une fois l'ajout effectué rediriger l'utilisateur au GET de `/backlog/{projectId}`. | 2 |  |  | DONE | elhadj
| 4 | 17 | Dans `backlog.ejs` ajouter un bouton "demarer sprint". un click sur ce bouton devra ouvrir une modale avec un formulaire pour renseigner la date de debut et la date de fin du sprint. Un bouton "demarer" (sur la modale) devra rediriger au PUT de `/sprint/start/{sprintId}` et un bouton "annuler" devra fermer la modale.| 2 |  |  | DONE |elhadj
| 5 | 17 | Ajouter une route PUT (`/sprint/start/{sprintId`) permettant de démarer un sprint. Cette route devra modifier le sprint dans la base de données en lui ajoutant une date de début, une date de fin et mettre l'état du sprint à "active". En fin rédiriger l'utilisateur sur la page affichant le sprint actif `sprintActif.ejs`. | 2 |  |  | DOING | elhadj
| 6 | 18 | Dans `task.ejs` ajouter un bouton "créer tâche". Un click sur ce bouton devra ouvri une modale contenant formulaire avec les champs description (textarea), durée ,User story (optionnel) et une dépendance (optionel). L'utilisateur devra pouvoir renseigner plusieurs dépendances si nécessaire si nécessaires. Un bouton "créer" sur la modale devra rediriger au ,POST de `/task` et un bouton annuler devra fermer la modale .| 2 |  |  | DOING | elhadj
| 7 | 18 | Ajouter une route POST `/task` pour la création d'une tâche. Par defaut l'état de la tâche doit être à "todo". Une fois la tâche crée rediriger l'utilisateur au get de `/task` | 2 |  |  | DOING | elhadj
| 8 | 19 | Dans `task.ejs` ajouter une liste permettant de lister les tâches d'un projet. Cette liste devra être filtrer selon que l'utilisateur veut afficher toutes les tâches ou bien les tâches du sprint actif. Ces tâches seront affiché dans 3 liste differentes selon leurs état (todo, doing, done). | 2 |  |  | DONE | Arnaud
| 9 | 08 | Dans `task.ejs` faire en sorte que les tâches puissent être déplacé d'un état à un autre en effectuant un glissé deposé. | 2 |  |  | DONE | Arnaud
| 10 | 19 | Ajouter une route GET `/task` permettant de recupérer la liste des tâches d'un projet. Cette route afficher la page `task.ejs` avec une variable contenant toutes les tâches du projet courant. | 2 |  |  | DONE | Arnaud
| 11 | 21 | Dans `task.ejs` faire en sorte qu'un click sur tâche affiche une modale contenant un formulaire prérempli avec les informations de la tâches. un bouton "modifier" (sur la modale) devra rédiriger au PUT de `/task/{taskId}` et un bouton `supprimer` devra rediriger au DELETE de `/task/{taskId}`. En fin un bouton "annuler" devra fermer la modale. | 2 |  |  | DONE | Arnaud
| 12 | 21 | Ajouter une route PUT et une route delete `/task/{taskId}` permettant modifier et de supprimer respectivement une tâche. Une fois la modification ou la suppression effectuée, rediriger l'utilisateur au GET de `/task`. | 2 |  |  | TODO |
| 13 | 26 | Dans `menu.ejs` créer un menu bootstrap contenant les items Projets(au GET de /project), backlog (au GET de /backlog), sprint actif (au GET de /sprint/actif), tâches (au GET de /task). | 2 |  |  | DONE |elhadj
| 14 | 26 | Dans `activeSprint.ejs` lister les user stories du sprint actif. Cette liste aura les champs description et etat. | 2 |  |  | TODO |
