# React Booking Project

Ce projet permet de réserver un séjour dans un hotel, de choisir d'ajouter un show durant le séjour, et de passer commande.

## Fonctionnalités notables :

- Le choix du show n'est pas obligatoire
- On peut accéder au panier directement depuis le bouton panier, avec le montant qui se met à jour selon ce que l'on sélectionne
- On peut choisir une date seulement à partir de la date courante, le choix d'une date inférieur à la date actuelle est logiquement impossible
- Le state est géré globalement avec la librairie Redux
- L'application est codé en TypeScript
- L'application utilise une librairie de simulation de backend (json-server) afin d'effectuer des requêtes asynchrones sur des routes, et récupérer la data
- Il faut renseigner son nom, prénom, adresse postale et adresse email afin de valider la commande
- Il y a des guards qui vérifient et empêchent les comportements indésirables (se rendre sur la page /shows sans passer par la sélection d'un hôtel est impossible, se rendre sur la page de validation de commande est impossible si le panier est vide)
- Des tests unitaires permettent de simuler et tester le bon fonctionnement de l'application