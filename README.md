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

A toi de les disposer correctement pour être en mesure d'insérer un nouveau jeu vidéo dans la base de données !

💡 A noter que tu peux simuler la requête client avec le logiciel _Bruno_ 🐶

---

### Les pièces du puzzle 🧩

#### 1.

```typescript
async (req, res) =>  {
```

#### 2.

```typescript
("/video-games", videoGamesAction.add);
```

#### 3. 

```typescript
const [result] = await databaseClient.query<Result>("INSERT INTO video_game (name, image) VALUES (?, ?)"
```

#### 4.

```typescript
export default { browse, read, add };
```

#### 5.

```typescript
const add: RequestHandler =
```

#### 6.

```typescript
router.post
```

#### 7.

```typescript
if (insertVideoGame) {
  res.status(201).json(`${req.body.name} has been created`);
} else {
  res.status(404).json("Impossible to create a video game");
}
```

#### 8.

```typescript
async create(body: VideoGame) {

```

### 9.

```typescript
const insertVideoGame = await videoGamesRepository.create(req.body);
```

### 10.

```typescript
interface VideoGame {
  name: string;
  image: string;
}
```

### 11.

```typescript
interface VideoGame {
  name: string;
  image: string;
}
```

### 12.

```typescript
, [body.name, body.image]);

  return result.affectedRows;
}
```
---

### Mais... Faut penser à quoi déjà ?! 🤔

1. Mon fichier .env côté serveur est-il à jour ? Contient-il des informations fiables pour me connecter à ma base de données SQL ?

2. Mon script de base de données est-il valide ? Vérification avec `npm run db:migrate`

3. Ai-je un jeu de données pour tester une requête ?
