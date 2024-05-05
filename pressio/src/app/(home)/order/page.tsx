import { DataTable } from '@/components/data-table'
import React from 'react'
import { columns } from './column'
import { orders } from '@/constants/orderData'

const OrderPage = () => {
  return (
    <div className="px-10 pt-20 min-h-screen h-full bg-gradient-to-tr from-[rgb(0,0,0)]  to-[rgb(78,75,75)]">
      <div className=''>
        <DataTable columns={columns} data={orders} />
      </div>
    </div>
  )
}

export default OrderPage
