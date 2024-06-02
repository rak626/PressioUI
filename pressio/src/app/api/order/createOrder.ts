'use server'
import type { CreateOrderFormSchema } from '@/schema/CreateOrderFormSchema'
import type { OrderSchema } from '@/schema/OrderSchema'
import { apiInstance } from '@/utils/axiosUtil'
import type { z } from 'zod'

export default async function createOrder(
  newOrderDetails: z.infer<typeof CreateOrderFormSchema>
): Promise<z.infer<typeof OrderSchema>> {
  const response = await apiInstance.post('/order/create', newOrderDetails)
  return response.data as z.infer<typeof OrderSchema>
}
