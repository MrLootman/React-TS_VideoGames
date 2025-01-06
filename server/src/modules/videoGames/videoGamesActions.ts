import type { RequestHandler } from "express";

import videoGamesRepository from "./videoGamesRepository";

const browse: RequestHandler = async (req, res) => {
  const videoGames = await videoGamesRepository.readAll();

  res.json(videoGames);
};

const add: RequestHandler = async (req, res) => {
  try {
    const addVideoGame = await videoGamesRepository.create(req.body);

    if (addVideoGame) {
      res
        .status(201)
        .send(
          `Video game named ${req.body.name} has been created successfully`,
        );
    } else {
      res.status(404).send("An error occured");
    }
  } catch (err) {
    console.error(err);
  }
};

export default { browse, add };
