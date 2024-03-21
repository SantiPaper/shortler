import {
  getUrls,
  createUrl,
  getSingleUrl,
  deleteUrl,
} from "../controllers/url.controller.js";

import { Router } from "express";
const router = Router();

router.get("/", getUrls);
router.get("/:short_url", getSingleUrl);
router.post("/", createUrl);
router.delete("/:short_url", deleteUrl);

export default router;
