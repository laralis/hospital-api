import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'procedures'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('time').notNullable()
      table
        .integer('exam_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('exams')
        .onDelete('CASCADE')
      table
        .integer('doctor_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('doctors')
        .onDelete('CASCADE')

      table
        .integer('patient_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('patients')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
