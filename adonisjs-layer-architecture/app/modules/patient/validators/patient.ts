import vine from '@vinejs/vine'

export const createPatientValidator = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string().email(),
    cpf: vine.string().fixedLength(11),
    birthdate: vine.date(),
  })
)
export const updatePatientValidator = vine.compile(
  vine.object({
    name: vine.string().optional(),
    email: vine.string().email().optional(),
    birthdate: vine.date().optional(),
  })
)
