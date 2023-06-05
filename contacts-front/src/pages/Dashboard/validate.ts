import { z } from "zod";

export const schema = z.object({
    id: z.number(),
    email: z.string().email(),
    phone: z.string(),
    name: z.string()
})

export const contactRequest = schema.omit({id: true})

export type ContactRequest = z.infer<typeof contactRequest>
export type contactData = z.infer<typeof schema>