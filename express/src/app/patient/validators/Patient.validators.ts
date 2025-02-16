import { z } from "zod";

export const patientCreateSchema = z.object({
  email: z.string().email(),
  cpf: z.string().length(11),
  name: z.string(),
  birthDate: z.date(),
});

export const patientUpdateSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});

