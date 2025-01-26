import express from "express";

const router = express.Router();

/* ************************************************************************* */

import videoGamesActions from "./modules/videoGames/videoGamesActions";

router.get("/api/video-games", videoGamesActions.browse);

export default router;
