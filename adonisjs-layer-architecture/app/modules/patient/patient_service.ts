import { createPatientValidator, updatePatientValidator } from './validators/patient.js'
import Patient from '#models/patient'
import { Infer } from '@vinejs/vine/types'

export default class PatientService {
  async index() {
    const patient = await Patient.all()
    return patient
  }

  async store(data: Infer<typeof createPatientValidator>) {
    const patient = await Patient.create(data)
    return patient
  }

  async show(id: number) {
    const patient = await Patient.findOrFail(id)
    return patient
  }

  async update(id: number, data: Infer<typeof updatePatientValidator>) {
    const patient = await Patient.findOrFail(id)
    patient.merge(data)
    await patient.save()
    return patient
  }
}
