import { inject, injectable } from "tsyringe";
import { ProcedureService } from "./Procedure.service";
import { Request, Response } from "express";
import { procedureCreateSchema } from "./validators/Procedure.validators";

@injectable()
export class ProcedureController {
  constructor(
    @inject(ProcedureService)
    private procedureService: ProcedureService
  ) {}

  async index(req: Request, res: Response) {
    let data = req.query.cpf;

    if (data) {
      data = String(data);
    }
    const response = await this.procedureService.index(data);
    res.send(response);
  }

  async create(req: Request, res: Response) {
    const { data, errors } = req.validate(procedureCreateSchema);

    if (errors) {
      return res.send(400).send({ errors });
    }
    const doctorId = req.doctor!.id;
    const response = await this.procedureService.create(data, doctorId);
    res.status(201).send(response);
  }
}
