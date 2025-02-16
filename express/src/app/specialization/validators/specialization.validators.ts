import { z } from "zod";

export const specializationCreateSchema = z.object({
  name: z.string(),
});

export const specializationUpdateSchema = z.object({
  name: z.string(),
});
