import { Exam } from "@prisma/client";
import { database } from "../../database";
import { injectable } from "tsyringe";

@injectable()
export class ExamService {
  async index(specializationId?: number) {
    if (specializationId && !Number.isNaN(specializationId)) {
      const examsList = await database.exam.findMany({
        where: {
          specializationId,
        },
      });
      return examsList;
    } else {
      const allExams = await database.exam.findMany();
      return allExams;
    }
  }
  async create(data: Omit<Exam, "id">) {
    const newExam = await database.exam.create({ data });
    return newExam;
  }

  async update(data: Omit<Exam, "id">, id: number) {
    const updatedExam = await database.exam.update({
      data,
      where: { id: id },
    });
    return updatedExam;
  }

  async filter(specialization: string) {
    const examsList = await database.exam.findMany({
      where: {
        specialization: {
          name: specialization,
        },
      },
    });
    return examsList;
  }
}
