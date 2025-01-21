import express from "express";
import userActions from "./modules/user/userActions";

const router = express.Router();

/* ************************************************************************* */

router.get("/api/user", userActions.browse);
router.post("/api/user", userActions.hashPassword, userActions.add);

export default router;
