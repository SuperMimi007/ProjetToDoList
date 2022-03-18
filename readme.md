


# Introduction

Creation d'un dossier TODOV4 permettant l'accès à une page web d'une todo list 


# Installation
installer node
installer
express
installer mysql

# Utilisation 
1. aller dans l'invit commande 
2. indiquer cd + chemin d'accès au fichier app.js
3. lancer le serveur avec node app.js
4. un message s'affiche indiquant que le port est en écoute et affiche : Connection au port 3000
5. allez sur le web et indiquer l'adresse de connection : http://localhost:3000/get-todo



app js : 
- permet la connection à Express 
- un app.get pour se connecter à la base SQL et récupérer les données dans la page web
- 3 app.post => 
créer des taches
modifier des taches
supprimer des taches
- app.listen connection au port 

db_utils.js
- permet la connection à la base SQL 
- 4 fonctions impactant les données de la base SQL =>       
récupérer les données de la base    
créer des taches
modifier des taches
supprimer des taches

