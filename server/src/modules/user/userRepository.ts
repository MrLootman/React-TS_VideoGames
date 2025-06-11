// Fichier qui comportera les requêtes SQL relatives à la table video_game
import databaseClient, { type Result } from "../../../database/client";

class UserRepository {
  async create(body: User) {
    const [rows] = await databaseClient.query<Result>(
      "INSERT INTO user (email, password) VALUES (?, ?)",
      [body.email, body.password],
    );

    return rows.affectedRows;
  }
}

export default new UserRepository();
