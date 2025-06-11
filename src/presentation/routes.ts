import { Router } from "express";
import { CompletarTextoRoutes } from "./completar-texto/routes";
import { ClassRoutes } from "./class/routes";
import { NotaTextoRoutes } from "./nota-texto/routes";
import { NotaRoutes } from "./nota/routes";
import { NativoesRoutes } from "./nativoes/routes";
import { FormarPalabrasRoutes } from "./formar-palabras/routes";
import { ImagenPalabraRoutes } from "./imagen-palabra/routes";
import { LlenarEspaciosRoutes } from "./llenar-espacio/routes";
import { OrdenarPalabrasRoutes } from "./ordenar-palabra/routes";
import { OrdenarTextoRoutes } from "./ordenar-texto/routes";
import { SeleccionPalabrasRoutes } from "./seleccion-palabra/routes";
import { AudioRoutes } from "./audio/routes";
import { ImageRoutes } from "./image/routes";
import { VideoRoutes } from "./video/routes";
import { GifRoutes } from "./gif/routes";

export class AppRoutes {
  
  static get routes(): Router {
    const router = Router();
    
    router.use("/api/ejercicios", NativoesRoutes.routes);
    
    router.use("/api/completar-texto", CompletarTextoRoutes.routes);
    router.use("/api/classes", ClassRoutes.routes);
    router.use("/api/nota-texto", NotaTextoRoutes.routes);
    router.use("/api/nota", NotaRoutes.routes);
    router.use("/api/formar-palabra", FormarPalabrasRoutes.routes);
    router.use("/api/imagen-palabra", ImagenPalabraRoutes.routes);
    router.use("/api/llenar-espacio", LlenarEspaciosRoutes.routes);
    router.use("/api/ordenar-palabra", OrdenarPalabrasRoutes.routes);
    router.use("/api/ordenar-texto", OrdenarTextoRoutes.routes);
    router.use("/api/seleccion-palabra", SeleccionPalabrasRoutes.routes);
    router.use("/api/audio", AudioRoutes.routes);
    router.use("/api/image", ImageRoutes.routes);
    router.use("/api/video", VideoRoutes.routes);
    router.use("/api/gif", GifRoutes.routes);

    return router;
  }
}
