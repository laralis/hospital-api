import { Doctor } from "@prisma/client";
import { database } from "../../database";
import argon2 from "argon2";
import { injectable } from "tsyringe";

@injectable()
export class DoctorService {
  async index() {
    const data = await database.doctor.findMany();

    return data;
  }

  async create(data: Omit<Doctor, "id">) {
    const password = await argon2.hash(data.password);

    const newDoctor = await database.doctor.create({
      data: {
        ...data,
        password,
      },
    });

    return newDoctor;
  }

  async update(data: Partial<Omit<Doctor, "id" | "password">>, id: number) {
    const updatedDoctor = await database.doctor.update({
      data,
      where: { id },
    });

    return updatedDoctor;
  }
}
