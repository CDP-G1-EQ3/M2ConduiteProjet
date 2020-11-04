
## Sprint 1

### User Stories

| ID | US | Difficulté
|:--:|----|:----------:
| 01 | En tant que visiteur, je souhaite pouvoir enregistrer un compte utilisateur avec e-mail, identifiant, pseudonyme et un mot de passe fort afin de m'authentifier sur le site. | 2
| 02 | En tant qu'utilisateur, je souhaite pouvoir consulter les projet auxquels je participe et effectuer des recherches avancées afin de pouvoir facilement les retrouver. | 3
| 03 | En tant qu'utilisateur, je souhaite pouvoir créer un projet ayant un nom et une description afin d'ensuite en effectuer la planification et la gestion. | 2
| 04 | En tant que membre d'un projet, je souhaite pouvoir consulter la page d'un projet afin d'accéder aux différents onglets proposés et travailler dessus. | 2
| 07 | En tant que membre d'un projet, je souhaite pouvoir créer des US afin d'alimenter un backlog pour mon projet. | 2
| 08 | En tant que membre d'un projet, je souhaite pouvoir planifier des sprints depuis l'onglet sprints afin d'y organiser des tâches qui seront par défaut en "A faire", mais pourront être déplacées dans d'autres états (visuellement) comme "En cours" ou "Fait" par défaut. | 3
| 09 | En tant que membre d'un projet, je souhaite pouvoir créer des tâches faisant référence à des US et pouvant être dépendantes d'autres tâches afin de concevoir des sprint pour mon projet. | 2

### Tasks

| ID | US | Task | Durée | Dépendance
|:--:|:--:|------|:-----:|:---------:
| T01 | 01 | Mettre en place le projet NodeJS / EJS | 2 | 
| T02 | 01 | Mettre en place une base de données MariaDB | 3 | 
| T03 | 01 | Créer le schéma d'un utilisateur. Les champs sont un identifiant unique sous forme de nombre incrémental, un identifiant unique sous forme de texte, un pseudonyme, une adresse e-mail, puis un mot de passe (crypté). | 1 | T02
| T04 | 01 | Créer l'endpoint login/register. Si aucun parametre n'est fourni, présenter la page de connexion/enregistrement respectivement. Suite à la connexion ou l'enregistrement de l'utilisateur, le rediriger vers sa page de profile. Les paramètres attendus sont ceux correspondant au schéma utilisateur. | 3 | T03
| T05 | 01 | Créer le template login. La page doit être composée d'un formulaire permettant d'entrer son e-mail ou son identifiant ainsi que son mot de passe. Un lien doit être disponible pour aller sur la page d'inscription. | 2 | T01
| T06 | 01 | Créer le template register. La page doit être composée d'un formulaire permettant d'entrer un e-mail, un identifiant de connexion, un pseudonyme et un mot de passe fort avec validation. | 3 | T01
| T07 | 02 | Créer l'endpoint profile. Si aucun identifiant n'est fourni, présenter le profile de l'utilisateur actuellement connecté. Si l'utilisateur n'est pas connecté et qu'aucun identifiant n'est fourni, ou que l"identifiant est introuvable, rediriger vers une page 404. | 3 | T03
| T08 | 02 | Créer le template d'une page de profile. La page doit contenir la liste des projets de l'utilisateur. Chaque entrée doit contenir le titre (cliquable, redirige vers la page du projet en question) ainsi que sa description courte, et à qui appartient le projet. Il faudra également être en mesure de rechercher un projet en prenant en compte titre, description, propriétaire. Les projets sont affichés du plus récent au plus ancien en terme de dernière modification. | 5 | T01
| T09 | 03 | Créer le schéma d'un projet. Les champs sont un identifiant unique incrémental, un nom de projet, une description. Créer une association entre projet et utilisateur, en rajoutant un champ correspondant à une enumeration de rôle. | 1 | T02
| T10 | 03 | Créer l'endpoint projet, qui doit permettre non seulement de consulter un projet mais aussi d'en créer un nouveau. | 3 | T09
| T11 | 03 | Créer le template de création d'un projet. Les champs à remplir sont les mêmes que ceux présentés dans le schéma d'un projet. | 3 | T09 
| T12 | 04 | Créer le template d'un projet. La page doit contenir les informations importantes comme le nom du projet, le créateur du projet, sa description, les redirections vers les différentes pages permettant de le gérer. Il doit y avoir plusieurs onglets (à l'horizontale) et la possibilité de rajouter des onglets dans le futur. L'onglet par défaut du projet doit être paramétrable. | 5 | T01
| T13 | 07 | Créer le schéma d'une US. Les champs sont un identifiant unique composé par le projet, un intitulé, une difficulté et une clé étrangère facultative sur un sprint. | 1 | T02
| T14 | 07 | Rajouter le constructeur de l'onglet Backlog à l'endpoint projet. | 2 | T01
| T15 | 07 | Créer le template de l'onglet backlog. Le backlog liste les US du projet et affiche les informations disponibles dans la base de données. | 2 | T01
| T16 | 08 | Créer le schéma d'un Sprint. Le champ est uniquement un identifiant unique  incrémental composé par le projet. Ce numéro correspond au numéro du sprint pour ce projet. | 1 | T02
| T17 | 08 | Créer le schéma d'un tableau de sprint. Les champs sont un identifiant unique composé par un sprint et d'un titre. | 1 | T02
| T18 | 08 | Créer le schéma d'une task. Les champs sont un identifiant unique composé par le projet, un intitulé, une durée, une clé étrangère facultative sur une US et une clé étrangère sur un tableau de sprint. | 1 | T02
| T19 | 08 | Créer une association entre task nommée dependency, qui permettra de gérer les dépendances entre task. | 1 | T02
| T20 | 08 | Rajouter le constructeur de l'onglet Sprint à l'endpoint projet. | 2 | T01
| T21 | 08 | Créer le template de l'onglet sprint. Cet onglet liste les sprints et leur taux de complétion. En cliquant sur un sprint, on accède à une vue complète des tableaux comportant les tâches du sprint. Par défaut, les tableaux sont "A faire", "En cours" et "Terminé". Il est possible de renommer ces tableaux, d'en rajouter et d'en supprimer. Il n'est pas possible de supprimer un tableau si il est le dernier présent ou qu'il contient encore des tâches. | 5 | T01
| T22 | 09 | Créer le template d'édition/création d'une tâche. Ce formulaire est composé des champs demandés dans le schéma d'une tâche. | 3 | T01
| T23 | 09 | Ajouter le constructeur d'une tâche à l'endpoint d'un projet. | 2 | T01