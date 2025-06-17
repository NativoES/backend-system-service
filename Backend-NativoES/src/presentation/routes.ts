import { Router } from "express";
import { TeachersRoutes } from "./teacher/routes";
import { HeroRoutes } from "./hero/routes";
import { CourseRoutes } from "./course/routes";
import { PlanRoutes } from "./plan/routes";
import { ReviewRoutes } from "./review/routes";
import { InformationRoutes } from "./information/routes";
import { FormStudyRoutes } from "./form-study/routes";
import { MethodCourseRoutes } from "./method-course/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/teacher", TeachersRoutes.routes);
    router.use("/api/hero", HeroRoutes.routes);
    router.use("/api/course", CourseRoutes.routes);
    router.use("/api/plan", PlanRoutes.routes);
    router.use("/api/review", ReviewRoutes.routes);
    router.use("/api/information", InformationRoutes.routes);
    router.use("/api/form-study", FormStudyRoutes.routes);
    router.use("/api/method-course", MethodCourseRoutes.routes);

    return router;
  }
}
