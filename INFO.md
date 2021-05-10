# Installer un projet angular
npm install @angular/cli

# Créer un nouveau projet 

ng new monProjet

# Aller sur le dossier du projet
cd monProjet

# Ouvrir le serveur 

ng serve -o
(-o pour ouvrir directement dans le navigateur)

# Créer un nouveau composant

ng generate component nomDuComposant

# Créer un modèle (dans systme/modele)

ng generate interface

# Créer un guard (dans systme/securité)
# Permet de créer une sécurisation de l'espace administrateur

ng g guard dossier/nomquonveut

# Quand on récupere sur git un projet Angular, il nous faut récuperer toutes les dépendences (fichier package.json). 

npm install