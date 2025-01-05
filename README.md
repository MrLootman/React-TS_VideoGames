# Puzzle - Fait fonctionner le serveur !

---

Dans cet atelier, tu vas devoir composer et réussir ta toute première requête GET, avec des informations
connectées en base de donnée !

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
