# Conduite de projet G1-E3

## Backlog

- CC-01 : En tant que visiteur, je souhaite pouvoir enregistrer un compte utilisateur afin d'en devenir un

    *Description :* L'application sous forme de site web accueille le visiteur sur une page de connexion/inscription. Les données nécessaires pour créer un compte utilisateur sont :
    - Adresse mail *(unique)*
    - Identifiant d'utilisateur *(unique)* *(lettres, nombres, underscore, dash)*
    - Pseudonyme visible *(non unique)*
    - Mot de passe fort

- CC-02 : En tant qu'utilisateur, je souhaite pouvoir créer un projet afin d'ensuite en effectuer la planification et la gestion

    *Description :* Lorsque l'utilisateur est connecté, il est par défaut redirigé sur la liste de ses projets, d'où il peut en créer un nouveau. Un projet nécessite les informations suivantes :
    - Nom de projet *(unique à l'utilisateur)* *(lettres, nombres, underscore, dash)*
    - Description de projet
    - Membres et leurs permissions *(facultatif, possibilité d'en rajouter ensuite)*
- CC-03 : En tant que créateur d'un projet, je souhaite pouvoir gérer les membres du projet afin de leur attribuer un ou des rôles, en ajouter ou en expulser

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
- CC-04 : En tant que membre d'un projet, je souhaite pouvoir créer des issues afin de concevoir un backlog pour mon projet
- CC-05 : En tant que membre d'un projet, je souhaite pouvoir créer des tâches faisant référence à des issues et pouvant être dépendantes d'autres tâches afin de concevoir des sprint pour mon projet
- CC-06 : En tant que membre d'un projet, je souhaite pouvoir organiser les tâches en différents sprints puis selon leur état de complétion afin de toujours avoir une vue d'ensemble de l'avancée du projet
- CC-07 : En tant que membre d'un projet, je souhaite pouvoir édicter des tests écrits qui pourront être rattachés à des tâches afin de permettre aux développeurs de vérifier que leur travail correspond à ce qui est demandé
- CC-08 : En tant que membre d'un projet, je souhaite pouvoir annoter des releases correspondant à un tag ou un hash de commit afin d'effectuer des livraisons
- CC-09 : En tant que membre d'un projet, je souhaite pouvoir créer des pages de documentation afin de rédiger certains documents