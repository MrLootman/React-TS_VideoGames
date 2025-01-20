import express from "express";

const router = express.Router();

/* ************************************************************************* */

import videoGamesActions from "./modules/videoGames/videoGamesActions";
import verify from "./services/verify";

router.get("/api/video-game", videoGamesActions.browse);
router.post("/api/video-game", verify.checkAuth, videoGamesActions.add);

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

// Authentification :
router.post(
  "/api/user/auth",
  validation.checkPerson,
  validation.checkPassword,
  auth.generateToken,
);

export default router;
