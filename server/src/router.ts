import express from "express";

const router = express.Router();

/* ************************************************************************* */

import videoGamesActions from "./modules/videoGames/videoGamesActions";

router.get("/api/video-game", videoGamesActions.browse);
router.post("/api/video-game", videoGamesActions.add);

import userActions from "./modules/user/userActions";
import auth from "./services/auth";
import validation from "./services/validation";

router.get("/api/user", userActions.browse);

router.post(
  "/api/user",
  validation.checkRegister,
  validation.registerValidation,
  auth.hashPassword,
  userActions.add,
);

export default router;
