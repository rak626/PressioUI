'use client'
import OrderParagraph from '@/components/OrderParagraph'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { orders } from '@/constants/orderData'
import { OrderStatus } from '@/utils/orderStatus'
import moment from 'moment'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'

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
    <div className=" bg-gradient-to-tr from-[rgb(0,0,0)]  to-[rgb(78,75,75)] min-h-screen pt-20">
      <Card className=" container mx-auto w-3/4 lg:w-2/4 ">
        <CardHeader>
          <CardTitle className="text-2xl text-rose-500">
            Order Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
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
      </Card>
    </div>
  )
}

export default OrderIdPage
