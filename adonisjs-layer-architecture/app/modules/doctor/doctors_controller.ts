import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { createDoctorValidator, updateDoctorValidator } from './validators/doctor.js'
import DoctorService from './doctor_service.js'

@inject()
export default class DoctorsController {
  constructor(private doctorService: DoctorService) {}

  async index({}: HttpContext) {
    const doctors = await this.doctorService.index()

    return doctors
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createDoctorValidator)

    const doctor = await this.doctorService.store(data)

    return response.created(doctor)
  }

  async show({ params }: HttpContext) {
    const doctor = await this.doctorService.show(+params.id)

    return doctor
  }

  async update({ params, request }: HttpContext) {
    const data = await request.validateUsing(updateDoctorValidator)

    const doctor = await this.doctorService.update(+params.id, data)

    return doctor
  }
}
