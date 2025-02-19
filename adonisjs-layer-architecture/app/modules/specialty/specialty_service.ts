import Specialty from '#models/specialty'
import { Infer } from '@vinejs/vine/types'
import { specialtyValidator } from './validators/specialty.js'
import cache from '@adonisjs/cache/services/main'

type SpecialtyData = Infer<typeof specialtyValidator>

export default class SpecialtyService {
  async index() {
    const specialties = await cache.getOrSet({
      key: 'specialties',
      factory: () => Specialty.all(),
      ttl: '10s',
    })

    return specialties
  }

  async store(data: SpecialtyData) {
    const specialty = await Specialty.create(data)

    return specialty
  }

  async show(id: number) {
    const specialty = await Specialty.findOrFail(id)

    return specialty
  }

  async update(id: number, data: SpecialtyData) {
    const specialty = await Specialty.findOrFail(id)

    specialty.merge(data)

    await specialty.save()

    return specialty
  }
}
