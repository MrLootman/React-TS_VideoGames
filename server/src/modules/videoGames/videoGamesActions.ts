import type { RequestHandler } from "express";
import videoGamesRepository from "./videoGamesRepository";

const browse: RequestHandler = async (_, res) => {
  const videoGames = await videoGamesRepository.readAll();

  res.status(200).send(videoGames);
};

export default { browse };
