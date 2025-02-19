import { createExamValidator, updateExamValidator } from '#modules/exam/validators/exam'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { ExamService } from './exam_service.js'

@inject()
export default class ExamsController {
  constructor(private examService: ExamService) {}

  async index({ request }: HttpContext) {
    const specialtyId = request.input('specialty') ?? null

    const exams = await this.examService.index(+specialtyId)

    return exams
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createExamValidator)

    const exam = await this.examService.store(data)

    return response.created(exam)
  }

  async show({ params }: HttpContext) {
    const exam = await this.examService.show(+params.id)

    return exam
  }

  async update({ params, request }: HttpContext) {
    const data = await request.validateUsing(updateExamValidator)

    const exam = await this.examService.update(+params.id, data)

    return exam
  }
}
