import express from "express";

const router = express.Router();

/* ************************************************************************* */

import videoGamesActions from "./modules/videoGames/videoGamesActions";

router.get("/api/video-games", videoGamesActions.browse);
router.post("/api/video-games", videoGamesActions.add);

export default router;
