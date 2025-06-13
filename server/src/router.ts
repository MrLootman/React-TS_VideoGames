import express from "express";
import userAction from "./modules/user/userAction";
import videoGamesAction from "./modules/videoGames/videoGamesAction";
import validation from "./utils/validation";

const router = express.Router();

// Ci-dessous, les routes API

router.get("/video-games", videoGamesAction.browse);
router.get("/video-games/:id", videoGamesAction.read);

router.put("/video-games/:id", videoGamesAction.edit);

router.post("/video-games", videoGamesAction.add);
router.delete("/video-games/:id", videoGamesAction.destroy);

router.get("/user", userAction.read);
router.post("/user", validation.userValidation, userAction.add);

export default router;
