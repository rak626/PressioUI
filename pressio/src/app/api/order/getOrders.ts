import { apiInstance } from '@/utils/axiosUtil'

const getOrders = async () => {
  const { data: orders } = await apiInstance.get('/backend/order/getAll')
  return orders
}

export default getOrders

export const getOrderById = async (orderId: string) => {
  const { data: order } = await apiInstance.get(`/backend/order/getById/${orderId}`)
  return order
}