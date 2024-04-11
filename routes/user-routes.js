import { Router } from "express";
import { getAllUser , signup } from "../controllers/user-controller.js";

 const router = Router();

router.route("/").get(getAllUser);
router.route("/").post(signup);

export default router;



