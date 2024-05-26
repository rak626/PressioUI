import {z} from 'zod'

export const LoginFormSchema = z.object({
	phone: z.string().min(1),
	password: z.string().min(2).max(50),
})