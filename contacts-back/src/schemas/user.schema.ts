import { z } from "zod";

export const userSchema = z.object({
    name: z.string().max(128),
    email: z.string().email().max(128),
    password: z.string().min(4).max(128),
    phone: z.number()
})

export const userReturnSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.string()
}).omit({password: true})

export const userUpdateSchema = userSchema.partial()