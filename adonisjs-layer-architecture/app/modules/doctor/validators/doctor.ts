import vine from '@vinejs/vine'

export const createDoctorValidator = vine.compile(
  vine.object({
    name: vine.string(),
    crm: vine.string(),
    cpf: vine.string().fixedLength(11),
    email: vine.string().email(),
    password: vine.string().minLength(6),
  })
)

export const updateDoctorValidator = vine.compile(
  vine.object({
    name: vine.string().optional(),
    crm: vine.string().optional(),
    cpf: vine.string().fixedLength(11).optional(),
    email: vine.string().email().optional(),
    password: vine.string().minLength(6).optional(),
  })
)
