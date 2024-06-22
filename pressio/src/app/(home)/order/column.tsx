'use client'
import TableAction from '@/components/TableAction'
import { Order } from '@/types/order-types'
import { OrderStatus } from '@/utils/orderStatus'
import { ColumnDef } from '@tanstack/react-table'
import moment from 'moment'
import Link from 'next/link'

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order Id',
  },
  {
    accessorKey: 'orderName',
    header: 'Order Name',
    cell: ({ row }) => (
      <Link
        href={`/order/${row.getValue('orderId')}`}
        className="hover:underline decoration-blue-500 hover:text-blue-600"
      >
        {row.getValue('orderName')}
      </Link>
    ),
  },
  {
    accessorKey: 'orderDesc',
    header: 'Order Description',
  },
  {
    accessorKey: 'squareFeet',
    header: 'Square Feet',
  },
  {
    accessorKey: 'orderStatus',
    header: 'Order Status',
    cell: ({ row }) => {
      const orderStatus: number = row.getValue('orderStatus')
      return OrderStatus[orderStatus]
    },
    filterFn: (row, columnId, filterValue) => {
      const orderStatus: number = row.getValue(columnId)
      return orderStatus === parseInt(filterValue)
    },
  },
  {
    accessorKey: 'isUrgent',
    header: 'Is Urgent',
    cell: ({ row }) => {
      const isUrgent: boolean = row.getValue('isUrgent')
      return isUrgent ? (
        <div className="bg-green-500 text-black rounded-md">Yes</div>
      ) : (
        <div className="bg-yellow-500 text-black rounded-md">No</div>
      )
    },
  },
  {
    accessorKey: 'createdBy',
    header: 'Created By',
  },
  {
    accessorKey: 'assignedTo',
    header: 'Assigned To',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => {
      const createdAt: string = row.getValue('createdAt')
      return moment(createdAt).format('DD-MM-YYYY')
    },
  },
  {
    accessorKey: 'lastModifiedAt',
    header: 'Last Modified At',
    cell: ({ row }) => {
      const lastModifiedAt: string = row.getValue('lastModifiedAt')
      return moment(lastModifiedAt).format('DD-MM-YYYY')
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const order = row.original
      return <TableAction order={order} />
    },
  },
]
