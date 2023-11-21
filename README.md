# TP-Docker-app-fullstack_server

## Notre TP à nous

Nous allons créer une application React avec un serveur NodeJS
Puis nous allons Dockeriser notre application

### Comment s'y prendre ?

1 - Créer un dossier TP-Docker-app-fullstack
2 - Créer une application NodeJS + TS et nommez le dossier : server
    - Créer un serveur express
    - port 3000
    - cors
    - body-parser json
    - routes 
        - GET /server/time -> renvoie l'heure du serveur
        - GET /hello/:name -> renvoie un message de bienvenue avec un nom passé en paramètre
3 - Dockeriser l'application server
    - Dockerfile
        - port 1992
        - .dockerignore
4 - Créer une application React + TS avec vite et nommez le dossier : client
    - Dans le composant App, ajouter un routing avec 2 routes
        - / 
            - afficher un formulaire pour un nom d'utilisateur
            - envoier le nom d'utilisateur à l'API sur la route /hello/:name
            - affichez le message de bienvenue renvoyé par le serveur
        - /time -> afficher l'heure du serveur (grâce à l'API)
5 - Dockeriser l'application client
    - Dockerfile
    - .dockerignore
    - Comment lancer une application "client" ?
6 - Lancer un container du serveur sur le port 2023
7 - Lancer un container du client sur le port 1992

## Docker compose ?

Après le cours sur docker compose essayer de dockeriser l'application avec docker compose
Mettez vous dans le dossier TP-Docker-app-fullstack
Créer un fichier docker-compose.yml
Et lancez la commande docker-compose up

## Docker compose 2 exemples

TP 2 - https://docs.docker.com/compose/gettingstarted/

TP 3 - https://openclassrooms.com/fr/courses/2035766-optimisez-votre-deploiement-en-creant-des-conteneurs-avec-docker/6211677-creez-un-fichier-docker-compose-pour-orchestrer-vos-conteneurs
