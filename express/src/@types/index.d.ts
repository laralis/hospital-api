import "express";
import { DoctorPayload } from "../core/types";
import { ZodSchema } from "zod";

declare module "express" {
  interface Request {
    doctor?: DoctorPayload;
    validate<T>(schema: ZodSchema<T>): {
      data: T;
      errors: any[];
    };
  }
}
