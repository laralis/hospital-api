import { inject, injectable } from "tsyringe";
import { DoctorService } from "./Doctor.service";
import { Request, Response } from "express";
import {
  doctorCreateSchema,
  doctorUpdateSchema,
} from "./validators/Doctor.validator";

@injectable()
export class DoctorController {
  constructor(@inject(DoctorService) private doctorService: DoctorService) {}

  async index(req: Request, res: Response) {
    const response = await this.doctorService.index();

    res.send(response);
  }

  async create(req: Request, res: Response) {
    const { data, errors } = req.validate(doctorCreateSchema);

    if (errors) {
      return res.send(400).send({ errors });
    }

    const response = await this.doctorService.create(data);

    res.status(201).send(response);
  }

  async update(req: Request, res: Response) {
    const { data, errors } = req.validate(doctorUpdateSchema);

    if (errors) {
      return res.send(400).send({ errors });
    }

    const id = Number(req.params.id);

    const response = await this.doctorService.update(data, id);

    res.send(response);
  }
}
