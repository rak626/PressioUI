import { apiInstance } from '@/utils/axiosUtil'

const GetOrders = async () => {
  const { data: orders } = await apiInstance.get('/backend/orders')
  console.log('orders: ', orders)
  return orders
}

export default GetOrders

export const getOrderById = async (orderId: string) => {
  const { data: order } = await apiInstance.get(`/backend/order/getById/${orderId}`)
  console.log('order: ', order)
  return order
}