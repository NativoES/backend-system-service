import { Router } from "express";
import { UserRoutes } from "./user/routes";
import { AuthRoutes } from "./auth/routes";
import { EnrollmentRoutes } from "./enrollment/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/user", UserRoutes.routes);
    router.use("/api/auth", AuthRoutes.routes);
    router.use("/api/enrollment", EnrollmentRoutes.routes);
    
    return router;
  }
}
