# Puzzle - Fait fonctionner le serveur !

---

Jusqu'à présent, tu es parvenu à composer :
    - La requête GET (pour récupérer l'intégralité des jeux vidéos inscrits dans la base de donnée).
    - La requête POST (pour créer un nouveau jeu). 
    - La requête PUT (pour mettre à jour un jeu vidéo).

    - L'une permettant de récupérer les utilisateurs.
    - L'autre permettant de créer son compte.

## 1. Créer un jeu de données

Pour commencer avec la récupération des utilisateurs, tu vas devoir créer un jeu de données.
.
Pour cela, tu vas devoir éditer le fichier `schema.sql`, et ajouter les lignes concernant la création d'une table `user`, puis insérer au moins deux utilisateurs.

La table devra comporter au moins le champ `email` (VARCHAR 55) et le champ `password` (VARCHAR 255).

#### Euh... Pourquoi 255 pour le mot de passe ? 🤔

Eh bien c'est assez simple: Nous prévoyons toujours une grande capacité pour le mot de passe. En effet, dans l'idée, nous voulons l'information saisie par l'utilisateur soit transformée en une chaîne de caractère complexe et unique (on appelle ça un _hash_).

Pour comprendre à quoi ça ressemble, tu peux te rendre sur ce [lien](https://argon2.online/) pour écrire un mot de passe (essaye donc avec "1234") pour générer un hash.

‼️ Avant de cliquer sur le bouton `GENERATE HASH`, penses à cliquer sur la roue crantée comportant le label _Salt_.
La génération d'un _sel_ unique va augmenter la robustesse du mot de passe, et éviter notamment des attaques _brute force_ même les plus élaborées.

<ins>En résumé</ins>: 

__Jamais au grand jamais__ nous n'enregistrons des mots de passe en clair dans la base de données.
Par exemple, si un utilisateur entre "j'aimelagalette" dans le champ password de son formulaire d'inscription, il _faut_ que la valeur renseignée en base de données soit hashée.

_Dans le cadre de cet exercice_: Pour l'insertion du premier jeu de donnée dans le fichier `schema.sql`, privilégie un hash plutôt qu'un mot de passe ordinaire. Ce n'est que dans un second temps que nous rendrons opérationnel le processus de hashage.

    ❓<ins>Exemple</ins> : ("martine@gmail.com", "$argon2i$v=19$m=16,t=2,p=1$SXlQOHJldEljWDhKSWQ4dA$GcxBGY8SJ9lk4NJ5ywkuGQ")

L'exercice est terminé lorsque tu seras parvenu à effectuer la commande `npm run db:migrate` en insérant au moins deux utilisateurs avec leur email et leur mot de passe hashé "à la main".

## 2. Récupérer les utilisateurs

Inspire-toi de la manière dont le code est pensé pour la table `video_game` pour pouvoir récupérer (GET) tous les utilisateurs.

L'exercice est terminé lorsque tu seras en capacité d'exécuter la requête avec le fichier `client.http`.

## 3. Créer des utilisateurs

Inspire-toi de la manière dont le code est pensé pour la table `video_game` pour pouvoir créer (POST) un nouvel utilisateur.

L'exercice est terminé lorsque tu seras en capacité d'exécuter la requête avec le fichier `client.http`. Pour rappel: Tu dois transmettre un corps de requête au format JSON pour créer ce nouvel utilisateur.

        ❓<ins>Exemple</ins> : { "martine@gmail.com", "1234" }

## 4. Le middleware hashedPassword
 
Nous pouvons désormais créer un compte... Sauf qu'en l'état, rien ne permet de convertir la chaîne de caractère qu'est le mot de passe en un hash !

Commence donc par installer la dépendance argon2 :

```bash
    npm install argon2
```

En cliquant sur ce [lien](https://www.npmjs.com/package/argon2), et en t'inspirant des quelques lignes de code nécessaires, tu vas devoir créer un middleware intitulé `hashPassword`.

Tu vas pouvoir créer un dossier `services`, et y créer un fichier `auth.ts`. C'est dans ce fichier que se tiendront tous les middleware ayant un lien avec l'authentification (création de compte ou connexion).

Au bout du compte, tu vas devoir adapter le fichier `router.ts`, et écrire ou adapter les lignes suivantes:

```typescript
    import auth from "./services/auth";

    router.post("/api/user", auth.hashPassword, userActions.add);
```

## 5. Le middleware registerValidation

Super ! Rendu à cette étape, tu sais que le mot de passe arrive hashé en base de données.

Oui mais... De gros problèmes persistent:
    - Un utilisateur peut complètement écrire "1234", "qwerty" ou encore "password" et donc s'exposer à une attaque _brute force_.
    - Un utilisateur peut s'enregistrer plusieurs fois avec la même adresse mail.






Tout d'abord :

1. Exécute la commande `npm install` pour installer toutes les dépendances nécessaires au projet. 
2. Copie / colle le fichier `.env.sample`, et renomme la copie en `.env`.
3. Mets à jour les valeurs des variables `DB_USER` et `DB_USER` avec les informations te permettant de te connecter à MySQL. Egalement, mets à jour la valeur de la variable `DB_NAME`.
4. Exécute la commande `npm run db:migrate` pour exécuter le script se trouvant dans `server/database/schema.sql`.
5. Exécute la commande `npm run dev` pour lancer le client et le server.

## 🧠 _Exercice_ :

Ci-dessous, tu trouveras des fragments de code.

A toi de les disposer correctement pour faire en sorte que les trois jeux vidéos apparaissent côté client !

⚠️ __Choses importantes à savoir__ :

Pour pouvoir transmettre de la donnée du client vers le serveur, il faut impérativement activer un middleware intitulé `express.json()`. Celui-ci se trouve dans le fichier `server/src/app.ts`. La ligne est déjà codée, tu n'auras juste qu'à la décommenter pour la rendre active.

Tu pourras tester ta requête en installant l'extension VS Code `Rest Client`. Consulte le fichier `client.http` une fois les pièces du puzzle réunies, et tente la requête POST en cliquant sur le `Send Request` écrit au dessus de celle-ci.

---

### Les pièces du puzzle 🧩

### 1.

```typescript
    export interface VideoGame {
    name: string;
    image: string;
    }
```

### 2.

```typescript
  async create(videoGame: VideoGame) {
    // ...

    return row.insertId;
  }
```

### 3. 

```typescript
    const add: RequestHandler = async (req, res, next) => {
        // ...
    };
```

### 4.

```typescript
    const [row] = await databaseClient.query<Result>(
      // ...
    );
```

### 5.

```typescript
    import type { VideoGame } from "./videoGames";
```

### 6.

```typescript
    try {
        const { name, image } = req.body;
        // ...
    } catch (err) {
        res.status(500).send(err);
    }
```

### 7.

```typescript
    const addVideoGame = await videoGamesRepository.create({ name, image });
```

### 8.

```typescript
    import type { Rows, Result } from "../../../database/client";
```

### 9.

```typescript
    export default { browse, add };
```

### 10.

```typescript
    "INSERT INTO video_game (name, image) VALUES (?, ?)",
      [videoGame.name, videoGame.image]
```

### 11.

```typescript
    if (addVideoGame) {
      res
        .status(201)
        .send(`A video game named ${name} has been created succesfully`);
    } else {
      res.status(404).send("An error occured");
    }
```

### 12.

```typescript
    router.post("/api/video-game", videoGamesActions.add);

```


### Mais... Faut penser à quoi déjà ?! 🤔

1. Mon fichier .env côté serveur est-il à jour ? Contient-il des informations fiables pour me connecter à ma base de données SQL ?

2. Mon script de base de données est-il valide ? Vérification avec `npm run db:migrate`

3. Ai-je un jeu de données pour tester une requête ?
