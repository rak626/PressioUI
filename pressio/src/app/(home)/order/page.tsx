'use client'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import getOrders from '@/app/api/order/getOrders'
import { DataTable } from '@/components/DataTable'
import { useQuery } from '@tanstack/react-query'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { columns } from './column'
import { useSession } from 'next-auth/react'
import type { Order } from '@/types/order-types'

const OrderPage = () => {
  const session = useSession()
  if (!session) {
    redirect('/login')
  }
  const {
    data: orders,
    isLoading,
    isError,
    error,
  }: {
    data: Order[]
    isLoading: boolean
    isError: boolean
    error: any
  } = useQuery({
    queryKey: ['order', 'getAll'],
    queryFn: getOrders,
    initialData: [],
  })
  return (
    <div className="px-10 pt-20 min-h-screen h-full w-full mx-auto lg:w-11/12 ">
      <div className="">
        <DataTable columns={columns} data={orders} />
      </div>
    </div>
  )
}

export default OrderPage
