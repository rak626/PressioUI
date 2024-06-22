
import type { CreateOrderFormSchema } from '@/schema/CreateOrderFormSchema'
import { apiInstance } from '@/utils/axiosUtil'
import type { z } from 'zod'

export default async function createOrder(
  newOrderDetails: z.infer<typeof CreateOrderFormSchema>
){
  return await apiInstance.post('/backend/order/create', newOrderDetails)
}
