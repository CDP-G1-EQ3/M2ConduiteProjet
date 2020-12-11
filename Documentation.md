## Documentation

### Architecture du projet

* db : Base de données MariaDB
    * `sql` : Scripts lancés pour la construction de la base de données
* web : Application web
    * `index.js` : point d'entrée de l'application
    * `config` : configuration du serveur web
    * `server` : back-end de l'application
    * `template` : templates pour le front-end de l'application
    * `data` : ressources du front-end
        * `data/css` : fichiers CSS
        * `data/js` : scripts JavaScript
    * `test` : tests de l'application

#### Détails du back-end (répertoire `web/server`)
* `routes` : Définition des routes de l'api
* `models` : Définition des interactions avec la base de données
* `controllers` : Définition des contrôleurs (lien entre routes et models)