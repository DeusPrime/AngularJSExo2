Appli de recherche d'emploi:

[Créer un formulaire de recherche de critères d'emploi]:
- mots clés (obligatoire)
- ville
- rayon (0, 8, 16, 24, 40, 80) km
- salaire mini (entre 1000 et 5000€)
- offres recommandées / ou OR + JDP / all
- gérer les erreurs (+ messages) et ne permettre la soumission que si champs valides

- API en POST
https://fr.jooble.org/api/<API KEY>
retourne les annonces par groupe de 20
prévoir pagination <<, <, > et >>
bouton reset du formulaire pour effacer les critères
attention, l'API refuse les paramètres vides ou nuls.
(pour la clé: https://fr.jooble.org/api/about)

- couleur différente selon le type de contrat
- lien dans nouvel onglet de l'annonce
- possibilité de stocker des annonces dans le LS
- possibilité de voir et supprimer les annonces du LS

Un service pour la gestion de l'API
un service pour la gestion du LS (annonces + params, dont page actuelle)
Pour utiliser REST API vous devez envoyer une requête HTTP POST à https://fr.jooble.org/api/<API KEY>

Exemple d'une requête JSON:
{
		"keywords": "account manager",
		"location": "London",
		"radius": "80",
		"salary": "5000",
		"page": "1"
 }

Description des champs de la requête
keywords - (obligatoirement) – les mots-clés pour la recherche
location - nom de ville pour la recherche
radius - rayon de recherche (0, 8, 16, 24, 40, 80) kilomètres
salary - limite inférieure du filtre de salaire. Le nombre entre 1000 - 5000 (€)
page - numéro de la page 
searchMode - mode de recherche
1 - Afficher les offres d'emploi recommandées + *JDP (La description complète des offres d'emploi sur Jooble sert à la expérience utilisateur)
2 - Afficher les offres d'emploi recommandées
3 - Afficher toutes les offres d'emploi (est à déconseiller)


Description des champs de la réponse 
totalCount - Nombre total de résultats selon la requête

Structure "job"
title - poste
location - nom de ville pour la recherche
snippet - une petite partie de la description 
salary - salaire
source - site-source
type - Type d'offre d’emploi (Tout, Temps plein, Intérimaire, Temps partiel, Stage, null)

