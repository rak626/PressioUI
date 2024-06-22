'use client'
import OrderParagraph from '@/components/OrderParagraph'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { getOrderById } from '@/app/api/order/getOrders'
import { cn } from '@/lib/utils'
import type { Order } from '@/types/order-types'
import { OrderStatus } from '@/utils/orderStatus'
import { useQuery } from '@tanstack/react-query'
import moment from 'moment'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
// import { getOrderById } from '@/lib/orders'
// import Loading from '@/components/ui/loading'
// import ErrorComponent from '@/components/ui/error'

const OrderIdPage = () => {
  const initOrder = {
    orderId: '',
    orderName: '',
    orderDesc: '',
    squareFeet: 0,
    orderStatus: 0,
    isUrgent: false,
    createdBy: '',
    assignedTo: '',
    createdAt: '',
    lastModifiedAt: '',
    userNameOfEmp: '',
    userNameOfCustomer: '',
  }
  const orderId = usePathname().replace('/order/', '')
  const {
    isLoading,
    isError,
    data: order,
    error,
  } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderById(orderId),
    initialData: initOrder,
  })

  // if (isLoading) return <Loading />
  // if (isError) return <ErrorComponent error={error} />
  // const order = orders[parseInt(orderId) - 1]
  const elapsedTime = useCallback(
    () => moment().diff(moment(order?.createdAt), 'seconds'),
    [order?.createdAt]
  )
  const timestamp = moment.duration(elapsedTime(), 'seconds').humanize()

  return (
    <div className="min-h-screen  pt-8">
      <Card className="mx-auto w-full lg:w-3/4 bg-transparent border-none">
        <CardHeader>
          <CardTitle
            className={cn(
              'text-primary text-3xl tracking-wider',
              inter.className
            )}
          >
            Order Details
            <hr className="border-gray-500 mt-6 w-full lg:w-1/6" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 gap-x-[5rem] lg:grid-cols-2">
            <OrderParagraph value={order?.orderId} header={'Order Id'} />
            <OrderParagraph value={order?.orderName} header={'Order Name'} />
            <OrderParagraph
              value={order?.orderDesc}
              header={'Order Description'}
            />
            <OrderParagraph value={order?.squareFeet} header={'Square Feet'} />
            <OrderParagraph
              value={OrderStatus[order?.orderStatus]}
              header={'Order Status'}
            />
            <OrderParagraph
              value={order?.isUrgent ? 'Yes' : 'No'}
              header={'Is Urgent'}
            />
            <OrderParagraph value={order?.createdAt} header={'Created At'} />
            <OrderParagraph
              value={order?.lastModifiedAt}
              header={'Last Modified At'}
            />
            <OrderParagraph value={order?.createdBy} header={'Created By'} />
            <OrderParagraph value={order?.assignedTo} header={'Assigned To'} />
            <OrderParagraph value={timestamp} header={'Elapsed Time'} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center lg:justify-end py-4">
          <Button className="w-24">Edit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default OrderIdPage
