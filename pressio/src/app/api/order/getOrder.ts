'use server'

import { apiInstance } from '@/utils/axiosUtil'

const GetOrder = async () => {
  const { data: orders } = await apiInstance.get('/api/orders')
  console.log('orders: ', orders)
  return orders
}

export default GetOrder
