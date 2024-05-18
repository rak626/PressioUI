import { DataTable } from '@/components/DataTable'
import React from 'react'
import { columns } from './column'
import { orders } from '@/constants/orderData'

const OrderPage = () => {
  return (
    <div className="px-10 pt-20 min-h-screen h-full w-full mx-auto lg:w-11/12 ">
      <div className="">
        <DataTable columns={columns} data={orders} />
      </div>
    </div>
  )
}

export default OrderPage
