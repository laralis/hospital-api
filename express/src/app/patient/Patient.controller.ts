import { PatientService } from "./Patient.service";
import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { patientCreateSchema, patientUpdateSchema } from "./validators/Patient.validators";

@injectable()
export class PatientController {
  constructor(
    @inject(PatientService)
    private patientService: PatientService
  ) {}

  async index(req: Request, res: Response) {
    const response = await this.patientService.index();
    res.send(response);
  }

  async create(req: Request, res: Response) {
    const { data, errors } = req.validate(patientCreateSchema);

    if (errors) {
      return res.send(400).send({ errors });
    }
    const response = await this.patientService.create(data);
    res.status(201).send(response);
  }

  async update(req: Request, res: Response) {
    const { data, errors } = req.validate(patientUpdateSchema);

    if (errors) {
      return res.send(400).send({ errors });
    }
    const id = Number(req.params.id);
    const response = await this.patientService.update(data, id);
    res.send(response);
  }
}
