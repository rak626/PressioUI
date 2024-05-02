'use client'
import { OrderStatus } from '@/utils/orderStatus'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'

export type Order = {
  orderId: string
  orderName: string
  orderDesc: string
  squareFeet: number
  orderStatus: number
  isUrgent: boolean
  createdBy: string
  assignedTo: string
  createdAt: string
  lastModifiedAt: string
  userNameOfEmp: string
  userNameOfCustomer: string
}

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
        className="hover:underline hover:decoration-blue-500 hover:text-blue-600"
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
  },
  {
    accessorKey: 'isUrgent',
    header: 'Is Urgent',
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
  },
  {
    accessorKey: 'lastModifiedAt',
    header: 'Last Modified At',
  },
  {
    accessorKey: 'userNameOfEmp',
    header: 'User Name Of Emp',
  },
  {
    accessorKey: 'userNameOfCustomer',
    header: 'User Name Of Customer',
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const order = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.orderId)}
            >
              Copy Order ID
            </DropdownMenuItem>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
