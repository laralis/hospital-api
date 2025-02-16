import { inject, injectable } from "tsyringe";
import { ExamService } from "./Exam.service";
import { Request, Response } from "express";
import { examCreateSchema } from "./validators/Exam.validator";

@injectable()
export class ExamController {
  constructor(
    @inject(ExamService)
    private examService: ExamService
  ) {}

  async index(req: Request, res: Response) {
    const { specializationId } = req.query;

    const id = specializationId ? +specializationId : undefined;

    const response = await this.examService.index(id);
    res.send(response);
  }

  async create(req: Request, res: Response) {
    const { data, errors } = req.validate(examCreateSchema);

    if (errors) {
      return res.send(400).send({ errors });
    }
    const response = await this.examService.create(data);
    res.status(201).send(response);
  }

  async update(req: Request, res: Response) {
    const { data, errors } = req.validate(examCreateSchema);

    if (errors) {
      return res.send(400).send({ errors });
    }
    const id = Number(req.params.id);
    const response = await this.examService.update(data, id);
    res.send(response);
  }
}
