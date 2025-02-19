import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import ProcedureService from './procedure_service.js'
import { createProcedureValidator } from './validators/procedure.js'

@inject()
export default class ProceduresController {
  constructor(private procedureService: ProcedureService) {}

  async index({ request }: HttpContext) {
    const patientCpf = request.input('cpf') ?? null
    const procedures = await this.procedureService.index(patientCpf)
    return procedures
  }

  async store({ request, auth }: HttpContext) {
    const data = await request.validateUsing(createProcedureValidator)
    const doctorId = auth.user?.id!
    const procedure = await this.procedureService.store(data, doctorId)
    return procedure
  }

  async show({ params }: HttpContext) {
    const procedure = await this.procedureService.show(+params.id)
    return procedure
  }
}
