import { z } from "zod";

export const doctorCreateSchema = z.object({
  name: z.string(),
  cpf: z.string().length(11),
  crm: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const doctorUpdateSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});
