import { Score } from "../models/score";

class ScoreService {
  private scores: Score[] = [];

  addScore(score: Score): void {
    this.scores.push(score);
    this.scores.sort((a, b) => b.score - a.score);
  }

  getScores(): Score[] {
    return this.scores;
  }
}

export const scoreService = new ScoreService();
