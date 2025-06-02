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

Ci-dessous, tu trouveras des fragments de code.

A toi de les disposer correctement pour faire en sorte que les trois jeux vidéos apparaissent côté client !

---

### Les pièces du puzzle 🧩

#### 1.

```typescript
import videoGamesAction from "./modules/videoGames/videoGamesAction";

router.get("/video-games", videoGamesAction.browse);
```

#### 2.

```typescript
const browse: RequestHandler = async (req, res) => {
  const videoGames = await videoGamesRepository.readAll();

  // ...
}
```

#### 3. 
```typescript
import type { RequestHandler } from "express";

import videoGamesRepository from "./videoGamesRepository";
```

#### 4.

```typescript
export default { browse };
```

#### 5.

```typescript
class VideoGamesRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM video_game");

    // ...
  }
}
```

#### 6.

```typescript
import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";
```

#### 7.

```typescript
res.json(videoGames);
```

### 8.

```typescript
return rows;
```

### 9.

```typescript
export default new VideoGamesRepository();
```
---

### Mais... Faut penser à quoi déjà ?! 🤔

1. Mon fichier .env côté serveur est-il à jour ? Contient-il des informations fiables pour me connecter à ma base de données SQL ?

2. Mon script de base de données est-il valide ? Vérification avec `npm run db:migrate`

3. Ai-je un jeu de données pour tester une requête ?
