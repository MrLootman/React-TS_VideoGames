import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { VideoGame } from "./videoGames";

class VideoGamesRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM video_game");

    return rows;
  }

  async create(videoGame: VideoGame) {
    const [row] = await databaseClient.query<Result>(
      "INSERT INTO video_game (name, image) VALUES (?, ?)",
      [videoGame.name, videoGame.image],
    );

    return row.insertId;
  }
}

export default new VideoGamesRepository();
