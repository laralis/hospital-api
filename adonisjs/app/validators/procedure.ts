import vine from '@vinejs/vine'

export const procedureValidator = vine.compile(
  vine.object({
    time: vine.date(),
    examId: vine.number(),
    patientId: vine.number(),
  })
)
