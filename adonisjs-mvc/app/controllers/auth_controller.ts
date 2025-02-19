import Doctor from '#models/doctor'
import { authValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(authValidator)

    const doctor = await Doctor.verifyCredentials(email, password)

    const token = await Doctor.accessTokens.create(doctor)

    return token
  }
}
