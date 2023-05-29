import { z } from "zod";

export const schema = z.object({
    email: z.string().email(),
    phone: z.string(),
    name: z.string()
})

export type contactData = z.infer<typeof schema>