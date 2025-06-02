// Fichier qui comportera les requêtes SQL relatives à la table video_game
import databaseClient, { type Rows } from "../../../database/client";

class VideoGamesRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM video_game");

    return rows;
  }
}

export default new VideoGamesRepository();
