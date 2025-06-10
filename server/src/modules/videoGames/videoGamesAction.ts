// Fichier qui comportera le traitement des requêtes et le formatage des réponses

import type { RequestHandler } from "express";
import videoGamesRepository from "./videoGamesRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await videoGamesRepository.readAll();

  res.json(result);
};

const read: RequestHandler = async (req, res) => {
  const result = await videoGamesRepository.readById(req.params.id);

  if (result) {
    res.json(result);
  } else {
    res.status(404).json("This game doesn't exist");
  }
};

const add: RequestHandler = async (req, res) => {
  if (req.body.name === "" || req.body.image === "") {
    res.sendStatus(400);
    return;
  }

  const result = await videoGamesRepository.create(req.body);

  if (result) {
    res.status(201).json(`${req.body.name} has been created successfully`);
  } else {
    res.status(404).json("This game doesn't exist");
  }
};

const destroy: RequestHandler = async (req, res) => {
  const deleteVideoGame = await videoGamesRepository.delete(req.params.id);

  if (deleteVideoGame) {
    res.status(200).json("A video game has been successfully deleted !");
  } else {
    res.status(404).json("Impossible to delete a video game");
  }
};

export default { browse, read, add, destroy };
