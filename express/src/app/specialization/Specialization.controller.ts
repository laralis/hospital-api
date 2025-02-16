import {
  specializationCreateSchema,
  specializationUpdateSchema,
} from "./validators/specialization.validators";
import { inject, injectable } from "tsyringe";
import { SpecializationService } from "./Specialization.service";
import { Request, Response } from "express";

@injectable()
export class SpecializationController {
  constructor(
    @inject(SpecializationService)
    private specializationService: SpecializationService
  ) {}

  async index(req: Request, res: Response) {
    const response = await this.specializationService.index();
    res.send(response);
  }

  async create(req: Request, res: Response) {
    const { data, errors } = req.validate(specializationCreateSchema);

    if (errors) {
      return res.send(400).send({ errors });
    }
    const response = await this.specializationService.create(data);
    res.status(201).send(response);
  }

  async update(req: Request, res: Response) {
    const { data, errors } = req.validate(specializationUpdateSchema);

    if (errors) {
      return res.send(400).send({ errors });
    }
    const id = Number(req.params.id);
    const response = await this.specializationService.update(data, id);
    res.send(response);
  }
}
