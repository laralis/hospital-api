import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'auth_access_tokens'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('tokenable_id')

      table.dropColumn('tokenable_id')

      table
        .integer('tokenable_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('doctors')
        .onDelete('CASCADE')
    })

    this.schema.dropTable('users')
  }
}
