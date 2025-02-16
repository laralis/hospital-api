import { Doctor } from "@prisma/client";

export type DoctorPayload = Omit<Doctor, "password"> & {
  iat: number;
  exp: number;
};
