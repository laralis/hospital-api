import Procedure from '#models/procedure'
import { procedureValidator } from '#validators/procedure'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class ProceduresController {
  async index({ request }: HttpContext) {
    const patientCpf = request.input('cpf')
    const procedures = await Procedure.query().whereHas('patient', (builder) => {
      if (patientCpf) {
        builder.where('cpf', 'LIKE', `${patientCpf}%`)
      }
    })
    return procedures
  }

  async store({ request, auth }: HttpContext) {
    const data = await request.validateUsing(procedureValidator)
    const doctorId = auth.user?.id
    const procedure = await Procedure.create({
      ...data,
      time: DateTime.fromISO(data.time.toISOString()),
      doctorId: doctorId,
    })
    return procedure
  }

  async show({ params }: HttpContext) {
    const procedure = await Procedure.findOrFail(params.id)
    return procedure
  }
}
