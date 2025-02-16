import vine from '@vinejs/vine'

export const patientValidator = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string().email(),
    cpf: vine.string().fixedLength(11),
    birthdate: vine.date(),
  })
)
