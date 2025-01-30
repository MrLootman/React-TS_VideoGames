import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class videoGamesRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM video_game");

    return rows;
  }

  async create(videoGames: { name: string; image: string }) {
    try {
      const [result] = await databaseClient.query<Result>(
        `INSERT INTO video_game (name, image) VALUES ("${videoGames.name}", "${videoGames.image}")`,
      );
      return result.insertId;
    } catch (error) {
      console.error("Erreur SQL détectée :", error);
    }
  }
}

export default new videoGamesRepository();
