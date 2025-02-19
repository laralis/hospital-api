import vine from '@vinejs/vine'

export const examValidator = vine.compile(
  vine.object({
    name: vine.string(),
    specialtyId: vine.number(),
  })
)
