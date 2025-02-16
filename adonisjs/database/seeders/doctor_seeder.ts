import Doctor from '#models/doctor'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Doctor.createMany([
      {
        name: 'Luiza',
        crm: 'CRM-RJ 987654',
        cpf: '03676600000',
        password: 'lu1234',
        email: 'lu@mail.com',
      },
      {
        name: 'lari',
        crm: 'CRM-BA 987653',
        cpf: '03676611111',
        password: '123456',
        email: 'lari@mail.com',
      },
    ])
  }
}
