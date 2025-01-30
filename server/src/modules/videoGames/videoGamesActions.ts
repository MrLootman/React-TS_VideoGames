import type { RequestHandler } from "express";
import videoGamesRepository from "./videoGamesRepository";

const browse: RequestHandler = async (_, res) => {
  const videoGames = await videoGamesRepository.readAll();

  res.status(200).send(videoGames);
};

const add: RequestHandler = async (req, res) => {
  try {
    const videoGames = await videoGamesRepository.create(req.body);

    if (videoGames) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export default { browse, add };
