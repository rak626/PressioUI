import { Phone } from 'lucide-react'
import { z } from 'zod'

const Role = z.enum(['ROLE_CUST', 'ROLE_ADMIN', 'ROLE_EMP'])
type Role = z.infer<typeof Role>

export const SignupFormSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  email: z.string().email(),
  role: Role,
  phone: z.string().min(2).max(50),
})
