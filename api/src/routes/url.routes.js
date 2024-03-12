import {
  getUrls,
  createUrl,
  getSingleUrl,
  deleteUrl,
} from "../controllers/url.controller.js";

import { Router } from "express";
const router = Router();

router.get("/url", getUrls);
router.get("/url/:short_url", getSingleUrl);
router.post("/url", createUrl);
router.delete("/url/:short_url", deleteUrl);

export default router;
