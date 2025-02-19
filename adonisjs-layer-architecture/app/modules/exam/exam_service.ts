import Exam from '#models/exam'
import { Infer } from '@vinejs/vine/types'
import { createExamValidator, updateExamValidator } from './validators/exam.js'

type NewExamData = Infer<typeof createExamValidator>

type UpdateExamData = Infer<typeof updateExamValidator>

export class ExamService {
  async index(specialtyId?: number) {
    const exams = await Exam.query().where((builder) => {
      if (specialtyId) {
        builder.where('specialty_id', specialtyId)
      }
    })
    return exams
  }

  async store(data: NewExamData) {
    const exam = await Exam.create(data)
    return exam
  }

  async show(id: number) {
    const exam = await Exam.findOrFail(id)
    return exam
  }

  async update(id: number, data: UpdateExamData) {
    const exam = await Exam.findOrFail(id)
    exam.merge(data)
    await exam.save()
    return exam
  }
}
