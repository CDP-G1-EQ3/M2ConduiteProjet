## Installation

Se positionner dans le répertoire code :
`cd code`

Construire le docker :

`docker-compose up --build --force-recreate --renew-anon-volumes`

Lancer le docker lorsqu'il est déjà construit : 

`docker-compose up -d`

Se rendre sur la page d'accueil du projet : 

[http://localhost/](http://localhost/)

phpmyadmin (gestion de la base de données) : 

[http://localhost:8080/](http://localhost:8080/) 

Identifiants par défaut pour phpmyadmin : cdp/cdp, modifiables dans docker-compose.yml

## exécution des tests

Se positionner dans le répertoire code :
`cd code`
lancer les tests :
`npx jasmine web/test/e2e/spec/*.js`