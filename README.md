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


- CC-04 : En tant que membre d'un projet, je souhaite pouvoir consulter la page d'un projet afin d'accéder à ses informations et travailler dessus.

    *Description :* La page d'un projet doit contenir les informations importantes comme le nom du projet, le créateur du projet, sa description, les redirections vers les différentes pages permettant de le gérer. Il doit y avoir plusieurs onglets (à l'horizontale) et la possibilité de rajouter des onglets dans le futur. L'onglet par défaut du projet doit être paramétrable.


- CC-05 : En tant qu'administrateur d'un projet, je souhaite avoir accès à des paramètres spéciaux de gestion du projet.

    *Description :* Depuis la page du projet, on doit pouvoir accéder à une page de paramètres. Les différentes catégories de paramètres sont présentées sous forme d'onglets (à la verticale). Les onglets présents seront détaillés dans d'autres issues.


- CC-06 : En tant qu'administrateur d'un projet, je souhaite pouvoir gérer les membres du projet depuis un onglet des paramètres afin de leur attribuer un ou des rôles, en ajouter ou en expulser.

    *Description :* Le créateur du projet ainsi que ceux en ayant la permission peuvent accéder à la gestion des membres. Des rôles peuvent être créés, supprimés, affectés/désaffectés à des membres, et des permissions leurs sont attribuées. Pour chaque permission, il y a trois modes étant Autorisé/Defaut/Interdit. Si un membre dispose d'au moins un rôle autorisant une action, il peut l'effectuer. Si un membre ne dispose que de Defaut, il peut également l'effectuer. Si un membre dispose d'au moins une Interdiction et zéro ou plus Defaut, il ne peut pas l'effectuer. Les permissions sont :
    - Gestion des membres
    - Gestion des permissions
    - Création d'issue
    - Edition d'issue
    - Suppression d'issue
    - Création de sprint
    - Edition de sprint
    - Suppression de sprint
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

- CC-07 : En tant que membre d'un projet, je souhaite pouvoir créer des issues afin de concevoir un backlog pour mon projet.

    *Description :* La page de projet doit proposer un onglet Backlog, d'où les membres pourront gérer les issues. Il doit être possible de cliquer sur une issue pour afficher toutes ses informations et les actions disponibles. Une issue contient les informations suivantes :
    - Un identifiant unique aux issues du projet, incrémental (automatique)
    - Un intitulé
    - Une description
    - Un responsable
    - Un sprint (facultatif)
    - Une valeur (facultatif)
    - Une priorité (facultatif)
  
    Une issue est par défaut Ouverte, mais elle pourra être fermée par la suite. Depuis l'onglet Backlog, on voit les issues ouvertes groupées en premier par ordre de création ascendante, puis de même pour le groupe des issues fermées.

- CC-08 : En tant que membre d'un projet, je souhaite pouvoir créer des sprints afin d'y organiser des tâches.

    *Description :* La page de projet doit proposer un onglet Sprints, avec une vue d'ensemble de la complétion de chacun selon les issues qu'il contient. Les sprints n'ont pas d'intitulé, seulement un numéro incrémental automatique. En cliquant sur un sprint, on est redirigé vers une page de gestion des tâches concernant ces issues Depuis la page d'un sprint, on doit pouvoir ajouter des issues qui ne sont pas déjà assignées à un sprint. Les sprints disposent également d'une date limite, le nombre de jours restants est donc affiché pour le sprint en cours, mis en évidence en premier. Les sprints achevés ne sont pas affichés, mais peuvent l'être grâce à une checkbox (toujours dans un ordre chronologique, faisant donc descendre ceux déjà affichés). Les sprints à venir sont indiqués à la suite de celui en cours.

- CC-09 : En tant que membre d'un projet, je souhaite pouvoir créer des tâches faisant référence à des issues et pouvant être dépendantes d'autres tâches afin de concevoir des sprint pour mon projet.

    *Description :* La page d'un sprint liste toutes les tâches associées aux issues du sprint. Il doit être possible de cliquer sur une tâche pour afficher toutes ses informations et les actions disponibles. On peut également cliquer sur une issue du sprint, ce qui affichera le même menu que si l'on était depuis la page des issues. On peut créer une tâche depuis ce menu. Les informations nécessaires pour une tâche sont :
    - Un identifiant unique aux tâches du projet, incrémental (automatique)
    - Un intitulé
    - Une description
    - Zéro, un ou plusieurs développeurs assignés
    - Une étiquette (facultatif)
    - Des dépendances avec d'autres tâches (facultatif)
    - Une durée arbitraire (facultatif)

- CC-10 : En tant que membre d'un projet, je souhaite pouvoir organiser les tâches selon leur état de complétion afin de toujours avoir une vue d'ensemble de l'avancée du projet.

    *Description :* Depuis la page d'un sprint, les tâches doivent pouvoir être organisées dans des tableaux définissant leur état. Par défaut, les tableaux présents sont : A faire, En cours, Terminé. Il doit être possible de créer un template de tableaux dans les préférences du projet, qui sera utilisé pour tout nouveau sprint créé.

- CC-11 : En tant que membre d'un projet, je souhaite pouvoir configurer des tests automatiques afin de m'assurer que les ajouts proposés fonctionnent ainsi que le reste du projet.

    *Description :* La page de projet doit proposer un onglet Tests, dans lequel il est possible de rajouter une entrée de test et de consulter les tests existants. Un test est un script (bash ou batch) qui permettra de lancer des instructions depuis un environnement, dont le but est de terminer avec le code 0 pour valider que la version du code actuellement testée répond aux critères du test. L'execution de tous ces tests en série permettront de vérifier l'état du code avant d'en accepter l'intégration dans une branche de release.

- CC-12 : En tant que membre d'un projet, je souhaite pouvoir annoter des releases correspondant à un tag ou un hash de commit afin d'effectuer des livraisons.

    *Description :* La page de projet doit proposer un onglet Releases, dans lequel la release la plus récente est disponible en premier, puis les précédentes sont listées à la suite. Les membres en ayant la permission peuvent également créer une nouvelle release en fournissant les informations suivantes :
    - Version
    - Commit hash
    - Etat (pre-release,stable)
    - Description / Changelog
    - La date est déduite de l'heure de création de la release
    - Fichiers (archives de code source, executables, ...)

- CC-13 : En tant que membre d'un projet, je souhaite pouvoir créer des documents sous plusieurs formats afin de produire de la documentation et des ressources nécessaires au projet.

    *Description :* La page de projet doit proposer un onglet Documents, dans lequel un espace de stockage en ligne permet l'hébergement ainsi que la consultation de documents variés, ainsi que leur édition. Il doit être possible de créer une arborescence de dossiers et de télécharger tout, ou bien un dossier, sous forme d'archive.

- CC-14 : En tant que membre d'un projet, je souhaite pouvoir créer des étiquettes afin de mieux trier les tâches.

    *Description :* Les étiquettes peuvent être attribuées à des tâches (depuis le menu d'étition de la tâche en question), chaque tâche peut avoir zéro, une ou plusieurs étiquettes. Une étiquette contient les informations suivantes :
    - Un titre
    - Une couleur

- CC-15 : En tant que membre d'un projet, je souhaite pouvoir rechercher des issues dans le backlog selon ses attributes afin de pouvoir trouver l'issue que je cherche même si il en existe un très grand nombre (des centaines).

    *Description :* L'onglet du Backlog doit proposer pour la recherche :
    - Une barre de texte permttant de chercher dans l'intitulié et l'identifiant des issues
    - Un dropdown permettant de chercher parmi les issues Ouvertes/Fermées/Les Deux

- CC-16 : En tant que membre d'un projet, je souhaite pouvoir consulter les tâches d'un sprint actif ou à venir qui n'ont pas été attribuées afin d'en prendre la charge et donner de l'avance au projet.

    *Description :* Afin d'éviter de ne pas avoir de travail à tout moment, il faut pouvoir efficacement s'attribuer des tâches et donc pouvoir les rechercher. Dans la page de projet, il faut rajouter un bouton redirigeant vers une page qui se spécialise dans la recherche de tâche selon les critères suivants :
    - Disponibilité (Pas de développeur assigné ou absent)
    - Dépendances (Pas de tâche non accomplie dont dépend les tâches à trouver)
    - Durée de la tâche (Trouver les tâches réalisables rapidement)
    - Temporalité du sprint (En cours, Suivant, Date limite)

- CC-17 : En tant que membre d'un ou plusieurs projets, je souhaite pouvoir consulter les tâches que je dois réaliser ensuite afin de me concentrer sur le travail le plus urgent.

    *Description :* Depuis l'espace personnel, il faut pouvoir avoir accès à un listing des tâches assignées à soi même. Les tâches pouvant être réalisées immédiatement doivent apparaître en haut. Pour permettre une utilisation avancée, ces options doivent être disponibles :
    - N'afficher que les tâches qui n'ont plus de dépendance
    - N'afficher que les tâches d'un sprint en cours
    - N'afficher que les tâches d'un projet en particulier
    - N'afficher que les tâches où je suis le seul assigné
    - Trier les tâches selon leur durée par rapport au temps restant du sprint associé
  
    Ces options doivent évidemment pouvoir être combinées.

- CC-18 : En tant qu'utilisateur, je souhaite pouvoir accéder au site web sous forme d'application afin d'avoir plus de liberté quant à mon workflow.

    *Description :* Le site web peut être enveloppé dans une application dont le but est simplement de se rendre sur ce site. Cela permettra au développeur non seulement de bénéficier d'une authentification permanente, mais également de dédier un programme au site de collaboration plutôt qu'un simple onglet de navigateur.

- CC-19 : En tant qu'utilisateur, je souhaite pouvoir choisir entre plusieurs thèmes de couleur pour le site afin de prendre de conserver un environnement de travail plus homogène selon mes préférences.

    *Description :* Le site web doit proposer différents thèmes de couleur (notamment clair et sombre), paramétrables depuis les préférences utilisateur de manière persistante à travers les appareils d'accès.

- CC-20 : En tant qu'utilisateur, je souhaite pouvoir ajouter d'autres utilisateurs à mes contacts afin de facilement retrouver les personnes avec qui je suis susceptible de travailler.

    *Description :* Depuis la page d'utilisateur, un bouton Ajouter un contact doit être présent permettant de recherche un utilisateur sur le site, et l'ajouter à sa liste de contacts. Ce n'est pas un système de "demande d'ami" mais plutôt un répertoire.

- CC-21 : En tant qu'utilisateur, je souhaite pouvoir gérer mes contacts en les catégorisant afin de rendre plus clair mon répertoire.

    *Description :* Depuis la page d'utilisateur, un bouton Répertoire doit être présent, redirigeant vers une page listant les contacts de manière groupée. Chaque contact peut être supprimé ou bien ajouté à un ou plusieurs groupes. Les groupes peuvent être créés à l'aide d'un bouton présent sur la page du répertoire. Un groupe peut seulement être nommé. On peut supprimer un groupe, mais cela ne supprime pas les contacts présents à l'intérieur.

- CC-22 : En tant que membre d'un projet, je souhaite pouvoir utiliser ma liste de contacts lorsque j'ajoute des membres ou même un groupe de contacts à ce projet afin de plus facilement constituer mon équipe sur de nouveaux projets.

    *Description :* Depuis la page de gestion des membres d'un projet, lorsque l'on ajoute un membre, on doit pouvoir cliquer sur un icone ouvrant le répertoire depuis lequel on peut sélectionner un ou plusieurs membres, ou un groupe. Le comportement de sélection doit être le même que dans un explorateur de fichiers. (Ctrl = Sélectionner un a un, Shift = Sélectionner une suite). On doit également pouvoir cliquer sur le nom d'un groupe pour remplacer la sélection actuelle par les contacts associés.