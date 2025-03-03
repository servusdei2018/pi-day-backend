import { Request, RequestHandler, Response } from "express";
import { scoreService } from "../services/scoreService";

export const getScores: RequestHandler = (
  _req: Request,
  res: Response,
): void => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(scoreService.getScores());
};
