import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { DoctorPayload } from "../core/types";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.headers.authorization;

  const token = data?.split(" ")[1] as string;

  const secret = process.env.SECRET!;

  try {
    jwt.verify(token, secret);

    req.doctor = jwt.decode(token) as DoctorPayload;

    next();
  } catch {
    res.send({ error: "Token invalido" });
  }
}
