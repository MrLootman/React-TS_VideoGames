# Puzzle - Fais fonctionner le serveur !

---

Dans cet atelier, tu vas devoir composer et réussir ta toute première requête GET, avec des informations
connectées en base de donnée !

Tout d'abord :

1. Exécute la commande `npm install` pour installer toutes les dépendances nécessaires au projet. 
2. Copie / colle le fichier `.env.sample`, et renomme la copie en `.env`.
3. Mets à jour tes informations de connexion à ta base de données.
4. Exécute la commande `npm run db:migrate` pour exécuter le script se trouvant dans `server/database/schema.sql`.
5. Exécute la commande `npm run dev` pour lancer le client et le server.

## 🧠 _Exercice_ :

A présent, nous allons envisager une partie importante de l'application : **la possibilité pour un•e utilisateur•rice de se créer un compte**.

Dans un premier temps, nous allons concevoir une possibilité de se créer un compte en nous appuyant sur nos connaissances actuelles.

Tu vas donc devoir :

- Faire évoluer le fichier `schema.sql` pour faire apparaître une table `user`, avec au moins les champs suivants :
  - id
  - email
  - password

- Créer la logique avec le microframework `Express` permettant d'insérer une ligne dans la table `user`, le tout avec le client `bruno`. En d'autres termes, tu dois paramétrer une nouvelle requête depuis le logiciel `bruno`.

Exemple :

  - POST `http://localhost:3310/api/user`

---

Qui dit POST, dit opération d'écriture en base de données... dit corps de requête !

Un _body_ lui sera donné depuis `bruno` pour simuler une inscription :

```json
{
  "email": "toto@gmail.com",
  "password": "1234"
}
```

A toi de jouer ! 🚀 Tente d'écrire le code avec ce que tu as retenu, et n'hésite pas à considérer le contenu des fichiers `videoGamesActions` et `videoGamesRepository`.