import { Response } from "express";
import { CustomError } from "../../domain";
import { NativoesService } from "../services/nativoes.service";

export class NativoesController {

  constructor(public readonly service: NativoesService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  getAllExcercise = async (req: Request, res: Response) => {
    this.service
      .getAllExercises()
      .then((ct) => res.json(ct))
      .catch((error) => this.handleError(error, res));
  };
}
