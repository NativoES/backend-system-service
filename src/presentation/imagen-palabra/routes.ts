import { Router } from "express";
import { ImagenPalabraService } from "../services/imagen-palabra.service";
import { ImagenPalabraController } from "./controller";
import { uploadMultipleFiles } from "../middleware/uploadMiddleware";

export class ImagenPalabraRoutes {
  static get routes(): Router {
    const router = Router();
    const service = new ImagenPalabraService();
    const controller = new ImagenPalabraController(service);

    router.post("/", uploadMultipleFiles, controller.create as any);
    router.patch("/:id", controller.update as any);
    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.delete("/:id", controller.delete);

    return router;
  }
}
