import Procedure from '#models/procedure'
import { Infer } from '@vinejs/vine/types'
import { DateTime } from 'luxon'
import { createProcedureValidator } from './validators/procedure.js'

export default class ProcedureService {
  async index(cpf: string | null) {
    const procedures = await Procedure.query().whereHas('patient', (builder) => {
      if (cpf) {
        builder.where('cpf', 'LIKE', `${cpf}%`)
      }
    })

    return procedures
  }

  async store(data: Infer<typeof createProcedureValidator>, doctorId: number) {
    const procedure = await Procedure.create({
      ...data,
      time: DateTime.fromISO(data.time.toISOString()),
      doctorId: doctorId,
    })
    return procedure
  }

  async show(id: number) {
    const procedure = await Procedure.findOrFail(id)
    return procedure
  }
}
