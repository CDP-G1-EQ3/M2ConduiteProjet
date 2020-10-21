# Conduite de projet G1-E3

## Backlog

- CC-01 : En tant que visiteur, je souhaite pouvoir enregistrer un compte utilisateur afin d'en devenir un.

    *Description :* L'application sous forme de site web accueille le visiteur sur une page de connexion/inscription. Les données nécessaires pour créer un compte utilisateur sont :
    - Adresse mail *(unique)*
    - Identifiant d'utilisateur *(unique)* *(lettres, nombres, underscore, dash)*
    - Pseudonyme visible *(non unique)*
    - Mot de passe fort

- CC-02 : En tant qu'utilisateur, je souhaite pouvoir consulter les projet auxquels je participe afin de pouvoir facilement les retrouver.

    *Description :* Lorsque l'utilisateur est connecté, il est par défaut redirigé sur la liste de ses projets. Chaque entrée doit contenir le titre (cliquable, redirige vers la page du projet en question) ainsi que sa description courte et à qui appartient le projet. Il faudra également être en mesure de rechercher un projet en prenant en compte titre, description, propriétaire. Les projets sont affichés du plus récent au plus ancien en terme de dernière modification.

- CC-03 : En tant qu'utilisateur, je souhaite pouvoir créer un projet afin d'ensuite en effectuer la planification et la gestion.

    *Description :* La page des projets de l'utilisateur doit contenir un bouton redirigeant vers une page de création d'un projet. Un projet nécessite les informations suivantes :
    - Nom de projet *(unique à l'utilisateur)* *(lettres, nombres, underscore, dash)*
    - Description de projet
    - Membres et leurs permissions *(facultatif, possibilité d'en rajouter ensuite)*

- CC-04 : En tant que créateur d'un projet, je souhaite pouvoir gérer les membres du projet afin de leur attribuer un ou des rôles, en ajouter ou en expulser.

    *Description :* Le créateur du projet ainsi que ceux en ayant la permission peuvent accéder à la gestion des membres. Des rôles peuvent être créés, supprimés, affectés/désaffectés à des membres, et des permissions leurs sont attribuées. Pour chaque permission, il y a trois modes étant Autorisé/Defaut/Interdit. Si un membre dispose d'au moins un rôle autorisant une action, il peut l'effectuer. Si un membre ne dispose que de Defaut, il peut également l'effectuer. Si un membre dispose d'au moins une Interdiction et zéro ou plus Defaut, il ne peut pas l'effectuer. Les permissions sont :
    - Gestion des membres
    - Gestion des permissions
    - Création d'issue
    - Edition d'issue
    - Suppression d'issue
    - Création de tâche
    - Edition de tâche
    - Suppression de tâche
    - Création de test
    - Edition de test
    - Suppression de test
    - Création de documentation
    - Edition de documentation
    - Suppression de documentation

    La permission par défaut pour un membre sans rôle est l'interdition de gérer les membres et les permissions, avec le reste en Defaut. Un administrateur dispose de toutes les permissions en Autorisé.

- CC-05 : En tant que membre d'un projet, je souhaite pouvoir créer des issues afin de concevoir un backlog pour mon projet.

    *Description :* La page de projet doit proposer un onglet Backlog, d'où les membres pourront gérer les issues. Il doit être possible de cliquer sur une issue pour afficher toutes ses informations et les actions disponibles. Une issue contient les informations suivantes :
    - Un identifiant unique aux issues du projet, incrémental (automatique)
    - Un intitulé
    - Une description
    - Un responsable
    - Un sprint (facultatif)
    - Une valeur (facultatif)
    - Une priorité (facultatif)

- CC-06 : En tant que membre d'un projet, je souhaite pouvoir créer des sprints afin d'y organiser des tâches.

    *Description :* La page de projet doit proposer un onglet Sprints, avec une vue d'ensemble de la complétion de chacun selon les issues qu'il contient. Les sprints n'ont pas d'intitulé, seulement un numéro incrémental automatique. En cliquant sur un sprint, on est redirigé vers une page de gestion des tâches concernant ces issues Depuis la page d'un sprint, on doit pouvoir ajouter des issues qui ne sont pas déjà assignées à un sprint. Voir CC-08.

- CC-07 : En tant que membre d'un projet, je souhaite pouvoir créer des tâches faisant référence à des issues et pouvant être dépendantes d'autres tâches afin de concevoir des sprint pour mon projet.

    *Description :* La page d'un sprint liste toutes les tâches associées aux issues du sprint. Il doit être possible de cliquer sur une tâche pour afficher toutes ses informations et les actions disponibles. On peut également cliquer sur une issue du sprint, ce qui affichera le même menu que si l'on était depuis la page des issues. On peut créer une tâche depuis ce menu. Les informations nécessaires pour une tâche sont :
    - Un identifiant unique aux tâches du projet, incrémental (automatique)
    - Un intitulé
    - Une description
    - Zéro, un ou plusieurs développeurs assignés
    - Une étiquette (facultatif)
    - Des dépendances avec d'autres tâches (facultatif)

- CC-08 : En tant que membre d'un projet, je souhaite pouvoir organiser les tâches selon leur état de complétion afin de toujours avoir une vue d'ensemble de l'avancée du projet.

    *Description :* Depuis la page d'un sprint, les tâches doivent pouvoir être organisées dans des tableaux définissant leur état. Par défaut, les tableaux présents sont : A faire, En cours, Terminé. Il doit être possible de créer un template de tableaux dans les préférences du projet, qui sera utilisé pour tout nouveau sprint créé.

- CC-09 : En tant que membre d'un projet, je souhaite pouvoir édicter des tests écrits qui pourront être rattachés à des tâches afin de permettre aux développeurs de vérifier que leur travail correspond à ce qui est demandé.

    *Description :* 

- CC-10 : En tant que membre d'un projet, je souhaite pouvoir annoter des releases correspondant à un tag ou un hash de commit afin d'effectuer des livraisons.

    *Description :* 

- CC-11 : En tant que membre d'un projet, je souhaite pouvoir créer des pages de documentation afin de rédiger certains documents.

    *Description :* 