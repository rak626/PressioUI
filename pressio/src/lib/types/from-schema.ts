import { z } from 'zod'
export const CreateOrderFormSchema = z.object({
  orderName: z.string().min(2).max(50),
  orderDesc: z.string().min(2).max(50),
  squareFeet: z.number().positive(),
  // orderStatus: z.number().int().min(0).max(8).optional(),
  isUrgent: z.boolean(),
  // createdBy: z.string().min(2).max(50).optional(),
  // assignedTo: z.string().min(2).max(50).optional(),
  // createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/),
  // lastModifiedAt: z
  //   .string()
  //   .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/),
})