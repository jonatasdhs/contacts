import {z} from 'zod'

export const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    password: z.string()
})

export type RegisterData = z.infer<typeof schema>