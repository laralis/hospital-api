import { Specialization } from "@prisma/client";
import { database } from "../../database";
import { injectable } from "tsyringe";

@injectable()
export class SpecializationService {
  async index() {
    const allSpecializations = await database.specialization.findMany();
    return allSpecializations;
  }
  async create(data: Omit<Specialization, "id">) {
    const newSpecialization = await database.specialization.create({ data });
    return newSpecialization;
  }

  async update(data: Omit<Specialization, "id">, id: number) {
    const updatedSpecialization = await database.specialization.update({
      data,
      where: { id: id },
    });
    return updatedSpecialization;
  }
}
