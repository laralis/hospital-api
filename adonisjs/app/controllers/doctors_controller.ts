import Doctor from '#models/doctor'
import { doctorValidator } from '#validators/doctor'
import type { HttpContext } from '@adonisjs/core/http'

export default class DoctorsController {
  async index({}: HttpContext) {
    const doctors = await Doctor.all()
    return doctors
  }

  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(doctorValidator)
    const doctor = await Doctor.create(data)
    return response.created(doctor)
  }

  async show({ params }: HttpContext) {
    const doctor = await Doctor.findOrFail(params.id)
    return doctor
  }

  async update({ params, request }: HttpContext) {
    const data = request.body()
    const doctor = await Doctor.findOrFail(params.id)
    doctor.merge(data)
    await doctor.save()
    return doctor
  }
}
