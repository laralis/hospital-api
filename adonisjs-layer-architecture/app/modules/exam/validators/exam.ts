import vine from '@vinejs/vine'

export const createExamValidator = vine.compile(
  vine.object({
    name: vine.string(),
    specialtyId: vine.number(),
  })
)

export const updateExamValidator = vine.compile(
  vine.object({
    name: vine.string().optional(),
    specialtyId: vine.number().optional(),
  })
)
