import { apiInstance } from '@/utils/axiosUtil'

const getOrders = async () => {
  const { data: orders } = await apiInstance.get('/backend/order/getAll')
  console.log('orders: ', orders)
  return orders
}

export default getOrders

export const getOrderById = async (orderId: string) => {
  const { data: order } = await apiInstance.get(`/backend/order/getById/${orderId}`)
  console.log('order: ', order)
  return order
}