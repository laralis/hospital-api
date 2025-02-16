import { z } from "zod";

export const examCreateSchema = z.object({
  name: z.string(),
  specializationId: z.number(),
});

export const examUpdateSchema = z.object({
  name: z.string(),
  specializationId: z.number(),
});
