import { createPatientValidator, updatePatientValidator } from '#modules/patient/validators/patient'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import PatientService from './patient_service.js'

@inject()
export default class PatientsController {
  constructor(private patientService: PatientService) {}

  async index({}: HttpContext) {
    const patient = await this.patientService.index()
    return patient
  }

  async store({ request }: HttpContext) {
    const data = await request.validateUsing(createPatientValidator)
    const patient = await this.patientService.store(data)
    return patient
  }

  async show({ params }: HttpContext) {
    const patient = await this.patientService.show(+params.id)
    return patient
  }

  async update({ params, request }: HttpContext) {
    const data = await request.validateUsing(updatePatientValidator)
    const patient = await this.patientService.update(+params.id, data)
    return patient
  }
}
