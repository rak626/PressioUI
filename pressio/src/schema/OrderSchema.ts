
import { z } from 'zod'

export const OrderSchema = z.object({
  orderId: z.string(),
  orderName: z.string(),
  orderDesc: z.string(),
  squareFeet: z.number(),
  orderStatus: z.number(),
  isUrgent: z.boolean(),
  createdBy: z.string(),
  assignedTo: z.string(),
  createdAt: z.string(),
  lastModifiedAt: z.string(),
  userNameOfEmp: z.string().optional(),
  userNameOfCustomer: z.string().optional(),
})
