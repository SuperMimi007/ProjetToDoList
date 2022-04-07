
# MIMI TODO LIST

## Introduction

Ce projet consiste en la création d'une todolist dans lequel nous pouvons faire des ajouts, des modifications et des suppressions de taches.
Il est possible d'ajouter le nom de la personne en charge, la priorité, le statut et la deadline.
5 versions ont été nécessaire afin de faire évoluer ce projet

Installation

Afin d'utiliser le projet sur la page web, il vous faudra effectuer les installations suivantes : 
node / express / mysql /jest /json

--- 

## Utilisation 
Afin 'accéder à la page web il faudra effectuer la commande suivante : 
1. aller dans l'invit commande 
2. indiquer cd + chemin d'accès au fichier app.js
3. lancer le serveur avec node app.js
4. un message s'affiche indiquant que le port est en écoute & affiche : Connection au port 3000
5. allez sur le web et indiquer l'adresse de connection : http://localhost:3000/get-todo

--- 

## Descriptif du projet 
1. Dossier Public => comprends le fichier style.css
2. app js => permet la connection à Express 
app.get pour se connecter à la base SQL et récupérer les données dans la page web
app.post pour créer, modifier, supprimer des taches
app.listen connection au port 
3. db_utils.js => permet la connection à la base SQL 
fonctions impactant les données de la base SQL : récupérer les données de la base  (création, modification & suppresion)   
4. html.js
contient la partie front, visible de l'utilisateur
5. react.html
Utilisation de la methode react pour le projet
6. readme.md
7. prioTache.test.js

--- 

## License & copyright 
© Emilie 
