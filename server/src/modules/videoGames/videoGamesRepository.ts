// Fichier qui comportera les requêtes SQL relatives à la table video_game
import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class VideoGamesRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM video_game");

    return rows;
  }

  async readById(id: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM video_game WHERE id = ?",
      [id],
    );

    return rows[0];
  }

  async create(body: VideoGame) {
    const [rows] = await databaseClient.query<Result>(
      "INSERT INTO video_game (name, image) VALUES (?, ?)",
      [body.name, body.image],
    );

    return rows.affectedRows;
  }

  async delete(id: string) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM video_game WHERE id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new VideoGamesRepository();
