import { Router } from "express";
import { CompletarTextoRoutes } from "./completar-texto/routes";
import { ClassRoutes } from "./class/routes";
import { NotaTextoRoutes } from "./nota-texto/routes";
import { NotaRoutes } from "./nota/routes";
import { NativoesRoutes } from "./nativoes/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    
    router.use("/api/ejercicios", NativoesRoutes.routes);
    
    router.use("/api/completar-texto", CompletarTextoRoutes.routes);
    router.use("/api/classes", ClassRoutes.routes);
    router.use("/api/nota-texto", NotaTextoRoutes.routes);
    router.use("/api/nota", NotaRoutes.routes);

    return router;
  }
}
