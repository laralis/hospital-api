import { authValidator } from '#modules/auth/validators/auth'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import AuthService from './auth_service.js'

@inject()
export default class AuthController {
  constructor(private authService: AuthService) {}

  async login({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(authValidator)

    const token = await this.authService.login(email, password)

    return token
  }
}
