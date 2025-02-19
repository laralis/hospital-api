import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Exam from '#models/exam'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Specialty extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @hasMany(() => Exam)
  declare exam: HasMany<typeof Exam>
}
