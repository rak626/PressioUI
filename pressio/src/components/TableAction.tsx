import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { MoreHorizontal } from 'lucide-react'
import type { Order } from '@/types/order-types'
import Link from 'next/link'

const TableAction = ({order}:{order:Order}) => {
  return (
	<DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.orderId)}
            >
              Copy Order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/order/${order.orderId}`}>View Order</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Change Order Status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default TableAction