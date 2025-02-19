import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Procedure from '#models/procedure'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Patient extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare cpf: string

  @column()
  declare birthdate: Date

  @hasMany(() => Procedure)
  declare procedure: HasMany<typeof Procedure>
}
