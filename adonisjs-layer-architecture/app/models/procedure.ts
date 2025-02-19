import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Doctor from './doctor.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Patient from './patient.js'
import Exam from './exam.js'

export default class Procedure extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.date()
  declare time: DateTime

  @column()
  declare examId: number

  @belongsTo(() => Exam)
  declare exam: BelongsTo<typeof Exam>

  @column()
  declare doctorId: number

  @belongsTo(() => Doctor)
  declare doctor: BelongsTo<typeof Doctor>

  @column()
  declare patientId: number

  @belongsTo(() => Patient)
  declare patient: BelongsTo<typeof Patient>
}
