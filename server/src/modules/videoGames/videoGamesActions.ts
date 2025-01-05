import type { RequestHandler } from "express";

import videoGamesRepository from "./videoGamesRepository";

const browse: RequestHandler = async (req, res) => {
  const videoGames = await videoGamesRepository.readAll();

  res.json(videoGames);
};

export default { browse };
