import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().max(128),
    password: z.string().max(128)
})