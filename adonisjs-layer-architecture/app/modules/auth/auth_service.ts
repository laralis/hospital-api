import Doctor from '#models/doctor'

export default class AuthService {
  async login(email: string, password: string) {
    const doctor = await Doctor.verifyCredentials(email, password)

    const token = await Doctor.accessTokens.create(doctor)

    return token
  }
}
