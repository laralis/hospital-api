import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { DoctorController } from "./app/doctor/Doctor.controller";
import { SpecializationController } from "./app/specialization/Specialization.controller";
import { ExamController } from "./app/exam/Exam.controller";
import { PatientController } from "./app/patient/Patient.controller";
import { ProcedureController } from "./app/procedure/Procedure.controller";
import { LoginController } from "./app/login/Login.controller";
import { authMiddleware } from "./middlewares/authMiddleware";

export const router = express.Router();

const doctorController = container.resolve(DoctorController);

router.get("/doctors", authMiddleware, (req: Request, res: Response) =>
  doctorController.index(req, res)
);

router.post("/doctors", (req: Request, res: Response) =>
  doctorController.create(req, res)
);

router.put("/doctors/:id", (req: Request, res: Response) =>
  doctorController.update(req, res)
);

const specializationConttroler = container.resolve(SpecializationController);

router.get("/specializations", authMiddleware, (req: Request, res: Response) =>
  specializationConttroler.index(req, res)
);

router.post("/specializations", authMiddleware, (req: Request, res: Response) =>
  specializationConttroler.create(req, res)
);

router.put(
  "/specializations/:id",
  authMiddleware,
  (req: Request, res: Response) => specializationConttroler.update(req, res)
);

const examConttroler = container.resolve(ExamController);

router.get("/exams", (req: Request, res: Response) =>
  examConttroler.index(req, res)
);

router.post("/exams", authMiddleware, (req: Request, res: Response) =>
  examConttroler.create(req, res)
);

router.put("/exams/:id", authMiddleware, (req: Request, res: Response) =>
  examConttroler.update(req, res)
);

const patientConttroler = container.resolve(PatientController);

router.get("/patients", authMiddleware, (req: Request, res: Response) =>
  patientConttroler.index(req, res)
);

router.post("/patients", authMiddleware, (req: Request, res: Response) =>
  patientConttroler.create(req, res)
);

router.put("/patients/:id", authMiddleware, (req: Request, res: Response) =>
  patientConttroler.update(req, res)
);

const procedureConttroler = container.resolve(ProcedureController);

router.get("/procedures", authMiddleware, (req: Request, res: Response) =>
  procedureConttroler.index(req, res)
);

router.post("/procedures", authMiddleware, (req: Request, res: Response) =>
  procedureConttroler.create(req, res)
);

const loginController = container.resolve(LoginController);
router.post("/login", (req: Request, res: Response) =>
  loginController.login(req, res)
);
