import databaseClient, { type Rows } from "../../../database/client";

class videoGamesRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM video_game");

    return rows;
  }
}

export default new videoGamesRepository();
