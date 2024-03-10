import { getUrls, createUrl } from "../controllers/url.controller.js";
import { Router } from "express";
const router = Router();

router.get("/url", getUrls);
router.post("/url", createUrl);

export default router;
