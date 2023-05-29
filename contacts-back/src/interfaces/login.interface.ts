import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

export type ILoginData = z.infer<typeof loginSchema>