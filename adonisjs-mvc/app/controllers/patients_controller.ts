import Patient from '#models/patient'
import { patientValidator } from '#validators/patient'
import type { HttpContext } from '@adonisjs/core/http'

export default class PatientsController {
  async index({}: HttpContext) {
    const patient = await Patient.all()
    return patient
  }

  async store({ request }: HttpContext) {
    const data = await request.validateUsing(patientValidator)
    const patient = await Patient.create(data)
    return patient
  }

  async show({ params }: HttpContext) {
    const patient = await Patient.findOrFail(params.id)
    return patient
  }

  async update({ params, request }: HttpContext) {
    const data = request.body()
    const patient = await Patient.findOrFail(params.id)
    patient.merge(data)
    await patient.save()
    return patient
  }
}
