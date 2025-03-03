import { Request, RequestHandler, Response } from "express";
import { scoreService } from "../services/scoreService";
import { Score } from "../models/score";

export const submitScore: RequestHandler = (
  req: Request,
  res: Response,
): void => {
  const { name, score }: Score = req.body;
  if (!name || typeof score !== "number") {
    res.status(400).json({ error: "Bad request" });
  }
  scoreService.addScore({ name, score });
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(201).json({ message: "Score submitted" });
};
