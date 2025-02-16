import { Patient } from "@prisma/client";
import { database } from "../../database";
import { injectable } from "tsyringe";

@injectable()
export class PatientService {
  async index() {
    const allPatients = await database.patient.findMany();
    return allPatients;
  }
  async create(data: Omit<Patient, "id">) {
    const newPatient = await database.patient.create({ data });
    return newPatient;
  }

  async update(data: Partial<Omit<Patient, "id">>, id: number) {
    const updatedPatient = await database.patient.update({
      data,
      where: { id },
    });
    return updatedPatient;
  }
}
