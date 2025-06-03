// Fichier qui comportera les requêtes SQL relatives à la table video_game
import databaseClient, { type Rows } from "../../../database/client";

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
}

export default new VideoGamesRepository();
