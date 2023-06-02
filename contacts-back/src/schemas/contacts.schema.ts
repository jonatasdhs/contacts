import { z } from "zod";

export const contactsSchema = z.object({
    name: z.string().max(128),
    email: z.string().email().max(128),
    phone: z.number(),
})

export const contactsReturnSchema = contactsSchema.extend({
    id: z.number(),
    createdAt: z.string()
})

export const contactsManySchema = contactsReturnSchema.array()