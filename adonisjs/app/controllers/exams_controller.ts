import Exam from '#models/exam'
import { examValidator } from '#validators/exam'
import type { HttpContext } from '@adonisjs/core/http'

export default class ExamsController {
  async index({ request }: HttpContext) {
    const specialtyId = request.input('specialty')
    const exams = await Exam.query().where((builder) => {
      if (specialtyId) {
        builder.where('specialty_id', specialtyId)
      }
    })
    return exams
  }

  async store({ request }: HttpContext) {
    const data = await request.validateUsing(examValidator)
    const exam = await Exam.create(data)
    return exam
  }

  async show({ params }: HttpContext) {
    const exam = await Exam.findOrFail(params.id)
    return exam
  }

  async update({ params, request }: HttpContext) {
    const data = request.body()
    const exam = await Exam.findOrFail(params.id)
    exam.merge(data)
    await exam.save()
    return exam
  }
}
