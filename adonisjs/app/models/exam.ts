import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Procedure from './procedure.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Specialty from '#models/specialty'

export default class Exam extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @hasMany(() => Procedure)
  declare procedure: HasMany<typeof Procedure>

  @column()
  declare specialtyId: number

  @belongsTo(() => Specialty)
  declare specialty: BelongsTo<typeof Specialty>
}
