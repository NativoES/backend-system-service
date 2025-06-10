
import { Request, Response } from "express";
import { AudioService } from "../services/audio.service";
import { CustomError, RegisterAudioDto, UpdateAudioDto } from "../../domain";

export class AudioController {
  constructor(private readonly service: AudioService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${error}`);
    return res.status(500).json({ error: "Internal server error" });
  };

  create = (req: Request, res: Response) => {
    const [error, dto] = RegisterAudioDto.create(req.body);
    if (error) return res.status(400).json({ error });

    this.service
      .create(dto!)
      .then((audio) => res.status(201).json(audio))
      .catch((error) => this.handleError(error, res));
  };

  update = (req: Request, res: Response) => {
    const { id } = req.params;
    const [error, dto] = UpdateAudioDto.create(req.body);
    if (error) return res.status(400).json({ error });

    this.service
      .update(id, dto!)
      .then((audio) => res.json(audio))
      .catch((error) => this.handleError(error, res));
  };

  getAll = (req: Request, res: Response) => {
    const { claseId } = req.query;

    this.service
      .getAll(claseId as string)
      .then((audios) => res.json(audios))
      .catch((error) => this.handleError(error, res));
  };

  getById = (req: Request, res: Response) => {
    const { id } = req.params;
    this.service
      .getById(id)
      .then((audio) => res.json(audio))
      .catch((error) => this.handleError(error, res));
  };

  delete = (req: Request, res: Response) => {
    const { id } = req.params;
    this.service
      .delete(id)
      .then((audio) => res.json(audio))
      .catch((error) => this.handleError(error, res));
  };
}
