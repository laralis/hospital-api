import { specialtyValidator } from '#modules/specialty/validators/specialty'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import SpecialtyService from '#modules/specialty/specialty_service'

@inject()
export default class SpecialtyController {
  constructor(private specialtyService: SpecialtyService) {}

  async index({}: HttpContext) {
    const specialties = await this.specialtyService.index()

    return specialties
  }

  async store({ request }: HttpContext) {
    const data = await request.validateUsing(specialtyValidator)

    const specialty = await this.specialtyService.store(data)

    return specialty
  }

  async show({ params }: HttpContext) {
    const specialty = await this.specialtyService.show(+params.id)

    return specialty
  }

  async update({ params, request }: HttpContext) {
    const data = await request.validateUsing(specialtyValidator)

    const specialty = await this.specialtyService.update(+params.id, data)

    return specialty
  }
}
