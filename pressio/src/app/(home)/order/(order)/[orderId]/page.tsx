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
import { orders } from '@/constants/orderData'
import { cn } from '@/lib/utils'
import { OrderStatus } from '@/utils/orderStatus'
import moment from 'moment'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'
const inter = Inter({ subsets: ['latin'] })
// import { useQuery } from 'react-query'
// import { getOrderById } from '@/lib/orders'
// import Loading from '@/components/ui/loading'
// import ErrorComponent from '@/components/ui/error'

const OrderIdPage = () => {
  const orderId = usePathname().replace('/order/', '')
  // const { isLoading, isError, data, error } = useQuery(
  //   ['order', orderId],
  //   () => getOrderById(orderId)
  // )

  // if (isLoading) return <Loading />
  // if (isError) return <ErrorComponent error={error} />
  const order = orders[parseInt(orderId) - 1]
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
