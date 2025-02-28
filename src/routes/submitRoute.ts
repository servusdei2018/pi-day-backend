import express from "express";
import { submitScore } from "../controllers/submitController";

const router = express.Router();
router.post("/submit", submitScore);
export default router;
