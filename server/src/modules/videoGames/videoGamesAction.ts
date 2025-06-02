// Fichier qui comportera le traitement des requêtes et le formatage des réponses

import type { RequestHandler } from "express";
import videoGamesRepository from "./videoGamesRepository";

const browse: RequestHandler = async (req, res) => {
  const result = await videoGamesRepository.readAll();

  res.json(result);
};

export default { browse };
