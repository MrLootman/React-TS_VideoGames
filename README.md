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
  async readById(id: string) {
    // ...

    return rows;
  }
```

#### 2.

```typescript
export default { browse, read };
```

#### 3. 

```typescript
const read: RequestHandler = async (req, res) => {
  const result = await videoGamesRepository.readById(req.params.id);

  // ...
}
```

#### 4.

```typescript
  else {
    res.status(404).json("This game doesn't exist");
  }
```

#### 5.

```typescript
const [rows] = await // ...
```

#### 6.

```typescript
  if (result.length !== 0) {
    res.json(result);
  } 
```

#### 7.

```typescript
import databaseClient, { type Rows } from "../../../database/client";
```

### 8.

```typescript
databaseClient.query<Rows>("SELECT * FROM video_game WHERE id = ?", [id]);
```

### 9.

```typescript
router.get("/video-games/:id", videoGamesAction.read);
```
---

### Mais... Faut penser à quoi déjà ?! 🤔

1. Mon fichier .env côté serveur est-il à jour ? Contient-il des informations fiables pour me connecter à ma base de données SQL ?

2. Mon script de base de données est-il valide ? Vérification avec `npm run db:migrate`

3. Ai-je un jeu de données pour tester une requête ?
