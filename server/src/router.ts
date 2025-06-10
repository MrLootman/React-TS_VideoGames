import express from "express";
import videoGamesAction from "./modules/videoGames/videoGamesAction";

const router = express.Router();

// Ci-dessous, les routes API

router.get("/video-games", videoGamesAction.browse);
router.get("/video-games/:id", videoGamesAction.read);
router.post("/video-games", videoGamesAction.add);
router.delete("/video-games/:id", videoGamesAction.destroy);

export default router;
