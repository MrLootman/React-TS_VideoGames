import express from "express";

const router = express.Router();

/* ************************************************************************* */

import videoGamesActions from "./modules/videoGames/videoGamesActions";

router.get("/api/video-game", videoGamesActions.browse);
router.post("/api/video-game", videoGamesActions.add);

export default router;
