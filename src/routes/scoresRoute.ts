import express from "express";
import { getScores } from "../controllers/scoresController";

const router = express.Router();
router.get("/scores", getScores);
export default router;
