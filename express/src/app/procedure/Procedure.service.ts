import { Procedure } from "@prisma/client";
import { database } from "../../database";
import { injectable } from "tsyringe";

@injectable()
export class ProcedureService {
  async index(patientCpf?: string) {
    if (patientCpf) {
      const proceduresList = await database.procedure.findMany({
        where: {
          patient: {
            cpf: patientCpf,
          },
        },
      });

      return proceduresList;
    } else {
      const allProcedures = await database.procedure.findMany({});

      return allProcedures;
    }
  }
  async create(data: Omit<Procedure, "id">, doctorId: number) {
    const newProcedure = await database.procedure.create({
      data: {
        ...data,
        doctorId,
      },
    });
    return newProcedure;
  }
}
