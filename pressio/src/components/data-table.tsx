'use client'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { OrderStatus } from '@/utils/orderStatus'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Input } from './ui/input'
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    orderId: true,
    orderName: true,
    orderStatus: true,
    squareFeet: true,
    orderDesc: false,
    isUrgent: true,
    createdBy: false,
    assignedTo: false,
    createdAt: true,
    lastModifiedAt: true,
    userNameOfEmp: true,
    userNameOfCustomer: true,
  })
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    enableColumnFilters: true,
    onColumnVisibilityChange: setColumnVisibility,
  })

  /**
   * Returns the sort indicator for the given column.
   * @param isSorted - Whether the column is sorted or not.
   * @returns The sort indicator to be displayed.
   */
  function getSortIndicator(
    isSorted: boolean | string | null
  ): JSX.Element | null {
    console.log('sorted value :', isSorted)
    switch (isSorted) {
      case 'asc':
        return (
          <span className="inline-block">
            <ChevronUp size={16} />
          </span>
        )
      case 'desc':
        return (
          <span className="inline-block">
            <ChevronDown size={16} />
          </span>
        )
      default:
        return null
    }
  }
  return (
    <div>
      <div className="flex justify-between items-center pb-4">
        {/* Filter Preview */}
        <div className="flex justify-start gap-4 ">
          {/* global filter */}
          <div>
            <Input
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="text-white"
            />
          </div>
          {/* order status filter */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Order Status</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup
                  value={
                    (table
                      .getColumn('orderStatus')
                      ?.getFilterValue() as string) ?? ''
                  }
                  onValueChange={(value) =>
                    table.getColumn('orderStatus')?.setFilterValue(value)
                  }
                >
                  <DropdownMenuItem>
                    <DropdownMenuLabel>Order Status</DropdownMenuLabel>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {Object.keys(OrderStatus).map((status) => {
                    return (
                      <DropdownMenuRadioItem key={status} value={status}>
                        {OrderStatus[+status]}
                      </DropdownMenuRadioItem>
                    )
                  })}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* column select button */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Columns</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuCheckboxItem
                checked={table.getIsAllColumnsVisible()}
                onCheckedChange={() => table.toggleAllColumnsVisible()}
              >
                Toggle All
              </DropdownMenuCheckboxItem>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      checked={column.getIsVisible()}
                      onCheckedChange={() => column.toggleVisibility()}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* Table preview */}
      <div className="rounded-lg border border-gray-400 overflow-hidden backdrop-blur-3xl bg-opacity-30">
        <Table>
          <TableHeader className="bg-[rgb(71,114,223)] ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-white text-center"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {getSortIndicator(header.column.getIsSorted())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="transition-colors bg-blue-500/10 hover:bg-muted/60"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-center text-white">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-20 text-center text-2xl text-white"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination Preview */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Go to page
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Page</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <DropdownMenuCheckboxItem
                key={i}
                checked={table.getState().pagination.pageIndex === i}
                onCheckedChange={(value) => table.setPageIndex(value ? i : 0)}
              >
                {i + 1}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Show
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Records</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {[10, 25, 50, 100].map((value) => (
              <DropdownMenuCheckboxItem
                key={value}
                checked={table.getState().pagination.pageSize === value}
                onCheckedChange={(checked) =>
                  table.setPageSize(checked ? value : 10)
                }
              >
                {value}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
