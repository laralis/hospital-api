import Specialty from '#models/specialty'
import { specialtyValidator } from '#validators/specialty'
import type { HttpContext } from '@adonisjs/core/http'

export default class SpecialtiesController {
  async index({}: HttpContext) {
    const specialties = await Specialty.all()
    return specialties
  }

  async store({ request }: HttpContext) {
    const data = await request.validateUsing(specialtyValidator)
    const specialty = await Specialty.create(data)
    return specialty
  }

  async show({ params }: HttpContext) {
    const specialty = await Specialty.findOrFail(params.id)
    return specialty
  }

  async update({ params, request }: HttpContext) {
    const data = request.body()
    const specialty = await Specialty.findOrFail(params.id)
    specialty.merge(data)
    await specialty.save()
    return specialty
  }
}
