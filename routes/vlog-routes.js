import { Router } from "express";
import { addvlog, getAllvlogs } from "../controllers/vlog-controller.js";

const vlogRouter = Router();

vlogRouter.get("/", getAllvlogs)
vlogRouter.post("/addvlog", addvlog)


export default vlogRouter;