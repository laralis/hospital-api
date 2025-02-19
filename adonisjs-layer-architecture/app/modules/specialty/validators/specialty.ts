import vine from '@vinejs/vine'

export const specialtyValidator = vine.compile(
  vine.object({
    name: vine.string(),
  })
)
