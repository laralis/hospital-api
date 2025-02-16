import { z } from "zod";

export const procedureCreateSchema = z.object({
  time: z.date(),
  examId: z.number(),
  doctorId: z.number(),
  patientId: z.number(),
});
