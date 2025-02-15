import express from "express";

const router = express.Router();

/* ************************************************************************* */

import multer, { diskStorage } from "multer";
import videoGamesActions from "./modules/videoGames/videoGamesActions";

const storage = diskStorage({
  destination: "./public/assets/images",
  filename: (_, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get("/api/video-games", videoGamesActions.browse);
router.post(
  "/api/video-games/upload",
  upload.single("file"),
  videoGamesActions.upload,
  videoGamesActions.add,
);

export default router;
