
## Sprint 1

### User Stories

| ID | US | Difficulté | Planification
|:--:|----|:----------:|:------------:
| 01 | En tant que visiteur, je souhaite pouvoir enregistrer un compte utilisateur avec e-mail, identifiant, pseudonyme et un mot de passe fort afin de m'authentifier sur le site. | 2 | 1
| 02 | En tant qu'utilisateur, je souhaite pouvoir consulter les projet auxquels je participe et effectuer des recherches avancées afin de pouvoir facilement les retrouver. | 3 | 1
| 03 | En tant qu'utilisateur, je souhaite pouvoir créer un projet ayant un nom et une description afin d'ensuite en effectuer la planification et la gestion. | 2 | 1
| 04 | En tant que membre d'un projet, je souhaite pouvoir consulter la page d'un projet afin d'accéder aux différents onglets proposés et travailler dessus. | 2 | 1
| 07 | En tant que membre d'un projet, je souhaite pouvoir créer des US afin d'alimenter un backlog pour mon projet. | 2 | 1
| 08 | En tant que membre d'un projet, je souhaite pouvoir planifier des sprints depuis l'onglet sprints afin d'y organiser des tâches qui seront par défaut en "A faire", mais pourront être déplacées dans d'autres états (visuellement) comme "En cours" ou "Fait" par défaut. | 3 | 1
| 09 | En tant que membre d'un projet, je souhaite pouvoir créer des tâches faisant référence à des US et pouvant être dépendantes d'autres tâches afin de concevoir des sprint pour mon projet. | 2 | 1

### Tasks

| ID | US | Task | Dépendance
|:--:|:--:|------|:---------:
| 01 | 01 | Mettre en place le projet NodeJS / EJS |
| 02 | 01 | Mettre en place une base de données MariaDB |
| 03 | 01 | Créer le schéma d'un utilisateur. Les champs sont un identifiant unique sous forme de nombre incrémental, un identifiant unique sous forme de texte, un pseudonyme, une adresse e-mail, puis un mot de passe (crypté). | 02
| 04 | 01 | Créer l'endpoint login et register. Suite à la connexion ou l'enregistrement de l'utilisateur, le rediriger vers sa page de profile. | 01
| 05 | 01 | Créer le template login. La page doit être composée d'un formulaire permettant d'entrer son e-mail ou son identifiant ainsi que son mot de passe. Un lien doit être disponible pour aller sur la page d'inscription. | 01
| 06 | 01 | Créer le template register. La page doit être composée d'un formulaire permettant d'entrer un e-mail, un identifiant de connexion, un pseudonyme et un mot de passe fort avec validation. | 01