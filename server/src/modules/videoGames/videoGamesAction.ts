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

export default { browse, read };
