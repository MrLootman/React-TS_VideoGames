// Fichier qui comportera les requêtes SQL relatives à la table video_game
import databaseClient, {
  type Rows,
  type Result,
} from "../../../database/client";

class UserRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");

    return rows;
  }

  async create(body: User) {
    const [rows] = await databaseClient.query<Result>(
      "INSERT INTO user (email, password) VALUES (?, ?)",
      [body.email, body.password],
    );

    return rows.affectedRows;
  }
}

export default new UserRepository();
