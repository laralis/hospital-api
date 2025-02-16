import vine from '@vinejs/vine'

export const doctorValidator = vine.compile(
  vine.object({
    name: vine.string(),
    crm: vine.string(),
    cpf: vine.string().fixedLength(11),
    email: vine.string().email(),
    password: vine.string().minLength(6),
  })
)
