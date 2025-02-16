import Doctor from '#models/doctor'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Doctor.createMany([
      {
        name: 'Jo',
        crm: 'CRM-RJ 987654',
        cpf: '03676600000',
        password: 'joalindo123',
        email: 'jo@mail.com',
      },
      {
        name: 'lari',
        crm: 'CRM-BA 987653',
        cpf: '03676611111',
        password: '1234',
        email: 'lari@mail.com',
      },
    ])
  }
}
