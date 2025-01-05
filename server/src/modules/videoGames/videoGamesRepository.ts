import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

class VideoGamesRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM video_game");

    return rows;
  }
}

export default new VideoGamesRepository();
