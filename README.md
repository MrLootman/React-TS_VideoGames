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

A toi de les disposer correctement pour être en mesure de supprimer un jeu vidéo existant dans la base de données !

__Cependant !__ 😩 Gros problème : La requête SQL n'a pas été rédigée ! Il va te falloir trouver par toi-même comment écrire cette requête, en t'inspirant de la façon de faire des autres requêtes déjà existantes dans ce projet.

💡 A noter que tu peux simuler la requête client avec le logiciel _Bruno_ 🐶

En sélectionnant le verbe HTTP `DELETE` et le endpoint `http://localhost:3310/api/video-games/3`, tu vas pouvoir envoyer ta demande de suppression d'un jeu vidéo dont l'id est celui passé en paramètre d'URL.

Tu auras réussi l'exercice lorsque le message renvoyé par Bruno sera `"A video game has been successfully deleted !"`.

---

### Les pièces du puzzle 🧩

#### 1.

```typescript
async (req, res) =>  {
```

#### 2.

```typescript
("/video-games/:id", videoGamesAction.destroy);
```

#### 3. 

```typescript
const [result] = await databaseClient.query<Result>("Requête SQL à écrire"
```

#### 4.

```typescript
export default { browse, read, add, destroy };
```

#### 5.

```typescript
const destroy: RequestHandler =
```

#### 6.

```typescript
router.delete
```

#### 7.

```typescript
  if (deleteVideoGame) {
    res.status(200).json("A video game has been successfully deleted !");
  } else {
    res.status(404).json("Impossible to delete a video game");
  }
}
```

#### 8.

```typescript
async delete(id: string) {

```

### 9.

```typescript
const deleteVideoGame = await videoGamesRepository.delete(req.params.id);
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
, [id]);

  return result.affectedRows;
}
```

### 12.

```typescript
import databaseClient, { type Result, type Rows } from "../../../database/client";
```
---

### Mais... Faut penser à quoi déjà ?! 🤔

1. Mon fichier .env côté serveur est-il à jour ? Contient-il des informations fiables pour me connecter à ma base de données SQL ?

2. Mon script de base de données est-il valide ? Vérification avec `npm run db:migrate`

3. Ai-je un jeu de données pour tester une requête ?
