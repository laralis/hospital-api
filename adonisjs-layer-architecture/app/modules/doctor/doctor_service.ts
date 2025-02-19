import Doctor from '#models/doctor'
import { Infer } from '@vinejs/vine/types'
import { createDoctorValidator, updateDoctorValidator } from './validators/doctor.js'
import mail from '@adonisjs/mail/services/main'

export default class DoctorService {
  async index() {
    const doctors = await Doctor.all()

    return doctors
  }

  async store(data: Infer<typeof createDoctorValidator>) {
    const doctor = await Doctor.create(data)

    await mail.send(async (message) => {
      message
        .to(doctor.email)
        .from('hospital@email.org')
        .subject('Bem vindo ao sistema hospitalar')
        .htmlView('emails/create_account', { name: doctor.name })
    })

    return doctor
  }

  async show(id: number) {
    const doctor = await Doctor.findOrFail(id)

    return doctor
  }

  async update(id: number, data: Infer<typeof updateDoctorValidator>) {
    const doctor = await Doctor.findOrFail(id)

    doctor.merge(data)

    await doctor.save()

    return doctor
  }
}
