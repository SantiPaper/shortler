import {
  getUrls,
  createUrl,
  getSingleUrl,
} from "../controllers/url.controller.js";

import { Router } from "express";
const router = Router();

router.get("/url", getUrls);
router.get("/url/:short_url", getSingleUrl);
router.post("/url", createUrl);

export default router;
